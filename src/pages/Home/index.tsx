import {
  AppstoreOutlined,
  ArrowRightOutlined,
  CodeOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Space, Tag, Typography } from "antd";
import { Link } from "react-router-dom";
import { homeCopy } from "./const";
import styles from "./styles.module.css";

const { Title, Paragraph } = Typography;

const renderSkillIcon = (title: string) => {
  if (title === "React Mastery") return <ThunderboltOutlined />;
  if (title === "TypeScript") return <CodeOutlined />;
  return <AppstoreOutlined />;
};

export const HomePage = () => {
  return (
    <div className={styles.root}>
      <Row gutter={[24, 24]} align="middle" className={styles.hero}>
        <Col xs={24} md={12}>
          <div className={styles.heroLeft}>
            <Tag className={styles.badge}>{homeCopy.badge}</Tag>
            <Title level={1} className={styles.heroTitle}>
              <span className={styles.heroTitleLinePrimary}>
                Crafting Digital
              </span>
              <span className={styles.heroTitleLineSecondary}>
                Experiences with{" "}
                <span className={styles.heroTitleAccent}>React.</span>
              </span>
            </Title>
            <Paragraph className={styles.heroParagraph}>
              I am Tatevik Harutyunyan, a{" "}
              <span className={styles.heroParagraphEmphasis}>
                Frontend Engineer
              </span>{" "}
              specializing in building{" "}
              <span className={styles.heroParagraphEmphasis}>
                scalable, high-performance
              </span>{" "}
              web applications. With{" "}
              <span className={styles.heroParagraphAccent}>
                2 years of React experience
              </span>
              , I blend technical rigor with sophisticated{" "}
              <span className={styles.heroParagraphEmphasis}>
                design systems
              </span>
              .
            </Paragraph>
            <Space wrap size={12} className={styles.heroActions}>
              <Link to="/projects">
                <Button type="primary" className={styles.primaryButton}>
                  {homeCopy.ctaPrimary} <ArrowRightOutlined />
                </Button>
              </Link>
              <Button
                className={styles.resumeButton}
                href="/resume.pdf"
                target="_blank"
              >
                {homeCopy.ctaSecondary}
              </Button>
            </Space>
            <Space wrap size={10} className={styles.stackRow}>
              <Typography.Text className={styles.stackLabel}>
                {homeCopy.stackLabel}
              </Typography.Text>
              {homeCopy.stack.map((tech) => (
                <Tag key={tech} className={styles.stackTag}>
                  {tech}
                </Tag>
              ))}
            </Space>
          </div>
        </Col>
        <Col xs={24} md={12}>
          <div className={styles.heroRight}>
            <div className={styles.heroImage}>
              <div className={styles.heroImageFrame}>
                <img
                  className={styles.heroImageImg}
                  src={new URL(
                    "../../assets/hero.png",
                    import.meta.url,
                  ).toString()}
                  alt="Hero portrait"
                />
              </div>
              <div className={styles.heroImageBadge}>
                <span className={styles.heroImageBadgeValue}>
                  {homeCopy.statValue}
                </span>
                <span className={styles.heroImageBadgeLabel}>
                  {homeCopy.statLabel}
                </span>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <Row gutter={[16, 16]} className={styles.skillsRow}>
        {homeCopy.cards.map((card) => (
          <Col xs={24} md={8} key={card.title}>
            <Card variant="borderless" className={styles.skillCard}>
              <div className={styles.skillCardBody}>
                <div>
                  <div className={styles.skillIcon}>
                    {renderSkillIcon(card.title)}
                  </div>
                  <Title level={4} className={styles.skillTitle}>
                    {card.title}
                  </Title>
                  <Paragraph className={styles.skillDescription}>
                    {card.description}
                  </Paragraph>
                </div>
                <div className={styles.skillUnderline} aria-hidden="true" />
              </div>
            </Card>
          </Col>
        ))}
      </Row>

      <div className={styles.banner}>
        <div className={styles.bannerBackground} />
        <div className={styles.bannerContent}>
          <Title level={2} className={styles.bannerTitle}>
            {homeCopy.bannerTitle}
          </Title>
          <Paragraph className={styles.bannerSubtitle}>
            {homeCopy.bannerSubtitle}
          </Paragraph>
        </div>
      </div>
    </div>
  );
};
