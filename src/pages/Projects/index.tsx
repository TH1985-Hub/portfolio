import React, { Component } from "react";
import {
  GithubOutlined,
  RocketOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Button, Typography, message } from "antd";
import { withTranslation, type WithTranslation } from "react-i18next";

import { PROJECTS } from "./const";
import styles from "./styles.module.css";
import { openUrl } from "./utils";
import type { Project, ProjectsState } from "./types";

const { Title, Paragraph } = Typography;

class ProjectsView extends Component<WithTranslation, ProjectsState> {
  constructor(props: WithTranslation) {
    super(props);
    this.state = { loading: false };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  handleViewProject = (project: Project): void => {
    const title = this.props.t(`projects.project${project.id}Title`);
    if (project.liveUrl) {
      openUrl(project.liveUrl);
    } else {
      message.info(this.props.t("projects.viewDetailsToast", { title }));
    }
  };

  handleViewGithub = (project: Project): void => {
    const title = this.props.t(`projects.project${project.id}Title`);
    if (project.githubUrl) {
      openUrl(project.githubUrl);
    } else {
      message.info(this.props.t("projects.viewRepoToast", { title }));
    }
  };

  handleCTA = (): void => {
    message.info(this.props.t("projects.ctaToast"));
  };

  renderProjectCard = (project: Project): React.ReactNode => {
    const { t } = this.props;
    const title = t(`projects.project${project.id}Title`);
    const description = t(`projects.project${project.id}Description`);
    const alt = t(`projects.project${project.id}ImageAlt`);

    return (
      <article key={project.id} className={styles.projectCard}>
        <div className={styles.projectImage}>
          <img
            src={project.coverImage}
            alt={alt}
            className={styles.projectImageImg}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className={styles.projectContent}>
          <Title level={3} className={styles.projectTitle}>
            {title}
          </Title>

          <Paragraph className={styles.projectDescription}>
            {description}
          </Paragraph>

          <div className={styles.techStack}>
            {project.tags.map((tag) => (
              <span key={tag} className={styles.techBadge}>
                {tag}
              </span>
            ))}
          </div>

          <div className={styles.projectActions}>
            <Button
              className={`${styles.actionButton} ${styles.liveButton}`}
              icon={<RocketOutlined />}
              onClick={() => this.handleViewProject(project)}
            >
              {t("projects.linkLaunch")}
            </Button>
            <Button
              className={`${styles.actionButton} ${styles.githubButton}`}
              icon={<GithubOutlined />}
              onClick={() => this.handleViewGithub(project)}
            >
              {t("projects.linkRepository")}
            </Button>
          </div>
        </div>
      </article>
    );
  };

  render() {
    const { t } = this.props;

    return (
      <div className={styles.root}>
        <div className={styles.header}>
          <Title level={1} className={styles.title}>
            {t("projects.heroTitleLead")}{" "}
            <span style={{ color: "var(--app-accent)" }}>
              {t("projects.heroTitleAccent")}
            </span>
          </Title>
          <Paragraph className={styles.subtitle}>
            {t("projects.heroDescription")}
          </Paragraph>
        </div>

        <div className={styles.projectsGrid}>
          {PROJECTS.map((project) => this.renderProjectCard(project))}
        </div>

        <div className={styles.ctaSection}>
          <div className={styles.ctaContent}>
            <Title level={2} className={styles.ctaTitle}>
              {t("projects.ctaTitle")}
            </Title>
            <Paragraph className={styles.ctaDescription}>
              {t("projects.ctaDescription")}
            </Paragraph>
            <Button
              className={styles.ctaButton}
              icon={<ThunderboltOutlined />}
              size="large"
              onClick={() => this.handleCTA()}
            >
              {t("projects.ctaButton")}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default withTranslation()(ProjectsView);
