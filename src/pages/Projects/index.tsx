import React, { Component } from 'react';
import { 
  Row, Col, Card, Typography, Tag, Button, 
  Spin, message
} from 'antd';
import { withTranslation, type WithTranslation } from 'react-i18next';
import { 
  SendOutlined, 
  GithubOutlined, 
  EyeOutlined 
} from '@ant-design/icons';
import styles from './styles.module.css';
import { PROJECTS } from './const';
import { openUrl } from './utils';
import type  { Project, ProjectsState } from './types';

const { Title, Paragraph, Text } = Typography;

class ProjectsView extends Component<WithTranslation, ProjectsState> {
  constructor(props: WithTranslation) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleViewProject = (project: Project): void => {
    const title = this.props.t(`projects.project${project.id}Title`);
    if (project.liveUrl) {
      openUrl(project.liveUrl);
    } else {
      message.info(this.props.t('projects.viewDetailsToast', { title }));
    }
  };

  handleViewGithub = (project: Project): void => {
    const title = this.props.t(`projects.project${project.id}Title`);
    if (project.githubUrl) {
      openUrl(project.githubUrl);
    } else {
      message.info(this.props.t('projects.viewRepoToast', { title }));
    }
  };

  getGradientClass = (projectId: number): string => {
    switch(projectId) {
      case 1: return styles.projectImageNexus;
      case 2: return styles.projectImageVapor;
      case 3: return styles.projectImageLumina;
      case 4: return styles.projectImageAtmosphere;
      default: return styles.projectImageNexus;
    }
  };

  renderProjectCard = (project: Project): React.ReactNode => {
    const gradientClass = this.getGradientClass(project.id);
    const title = this.props.t(`projects.project${project.id}Title`);
    const description = this.props.t(`projects.project${project.id}Description`);
    
    return (
      <Col xs={24} sm={24} md={12} lg={12} xl={12} key={project.id}>
        <Card 
          className={styles.projectCard}
          hoverable
          cover={
            <div className={`${styles.projectImage} ${gradientClass}`}>
              <span className={styles.imageTitle}>{title}</span>
            </div>
          }
        >
          <div>
            <Title level={4} className={styles.projectTitle}>
              {title}
            </Title>
            <Paragraph className={styles.projectDescription}>
              {description}
            </Paragraph>
            <div className={styles.projectTags}>
              {project.tags.map((tag, idx) => (
                <Tag key={idx} className={styles.projectTag}>
                  {tag}
                </Tag>
              ))}
            </div>
            <div className={styles.cardActions}>
              <Button 
                className={styles.actionButton}
                type="primary"
                icon={<EyeOutlined />}
                onClick={() => this.handleViewProject(project)}
              >
                {this.props.t('projects.viewProject')}
              </Button>
              <Button 
                className={styles.actionButton}
                icon={<GithubOutlined />}
                onClick={() => this.handleViewGithub(project)}
              >
                {this.props.t('projects.github')}
              </Button>
            </div>
          </div>
        </Card>
      </Col>
    );
  };

  render() {
    const { loading } = this.state;
    
    return (
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.badgeDot}></span>
              <span className={styles.badgeText}>{this.props.t('projects.badge')}</span>
            </div>
            <Title className={styles.heroTitle}>
              {this.props.t('projects.heroTitle')}
            </Title>
            <Paragraph className={styles.heroDescription}>
              {this.props.t('projects.heroDescription')}
            </Paragraph>
          </div>
        </div>

        {/* Projects Grid */}
        <div className={styles.projectsSection}>
          {loading ? (
            <div className={styles.emptyState}>
              <Spin size="large" />
            </div>
          ) : PROJECTS.length === 0 ? (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>📁</div>
              <Title level={4} className={styles.emptyTitle}>
                {this.props.t('projects.noProjects')}
              </Title>
              <Text className={styles.emptyDescription}>
                {this.props.t('projects.noProjectsHint')}
              </Text>
            </div>
          ) : (
            <>
              <Row gutter={[32, 32]}>
                {PROJECTS.map((project) => this.renderProjectCard(project))}
              </Row>
              
              {/* CTA Section - exactly like screenshot */}
              <div className={styles.ctaSection}>
                <Title level={2} className={styles.ctaTitle}>
                  {this.props.t('projects.ctaTitle')}
                </Title>
                <Paragraph className={styles.ctaDescription}>
                  {this.props.t('projects.ctaDescription')}
                </Paragraph>
                <Button 
                  type="primary" 
                  className={styles.ctaButton} 
                  icon={<SendOutlined />}
                  onClick={() => message.info(this.props.t('projects.ctaToast'))}
                >
                  {this.props.t('projects.ctaButton')}
                </Button>
              </div>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default withTranslation()(ProjectsView);