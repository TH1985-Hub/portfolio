import {
  AppstoreOutlined,
  ArrowRightOutlined,
  CodeOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Button, Card, Col, Row, Space, Tag, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const { Title, Paragraph } = Typography;
const TECH_STACK = ["React", "TypeScript", "Ant Design"] as const;
const BANNER_TECH = [
  { label: "π² + e = beauty" },
  { label: "∞ × creativity" },
  { label: "∇imagination" },
  { label: "∫dreams dt" },
  { label: "√innovation" },
  { label: "Σideas" },
] as const;
const COMPLETED_PROJECTS = "15+";

const renderSkillIcon = (title: string) => {
  if (title.includes("React")) return <ThunderboltOutlined />;
  if (title.includes("TypeScript")) return <CodeOutlined />;
  return <AppstoreOutlined />;
};

export const HomePage = () => {
  const { t } = useTranslation();
  const cards = [
    {
      title: t("home.reactMastery"),
      description: t("home.reactMasteryDescription"),
    },
    {
      title: t("common.typeScript"),
      description: t("home.typeScriptDescription"),
    },
    {
      title: t("common.uiSystems"),
      description: t("home.uiSystemsDescription"),
    },
  ];

  return (
    <div className={styles.root}>
      <div className={styles.hero}>
        <div className={styles.heroLeft}>
          <Tag className={styles.badge}>{t("home.badge")}</Tag>
          <Title level={3} className={styles.heroTitle}>
            <span className={styles.heroTitleLinePrimary}>
              {t("home.titleLinePrimary")}
            </span>
            <span className={styles.heroTitleLineSecondary}>
              {t("home.titleLineSecondaryPrefix")}{" "}
              <span className={styles.heroTitleAccent}>
                {t("home.titleAccent")}
              </span>
            </span>
          </Title>
          <Paragraph className={styles.heroParagraph}>
            {t("home.subtitle")}
          </Paragraph>
          <Space wrap size={12} className={styles.heroActions}>
            <Link to="/projects">
              <Button type="primary" className={styles.primaryButton}>
                {t("home.ctaPrimary")} <ArrowRightOutlined />
              </Button>
            </Link>
            <Link to="/resume">
              <Button className={styles.resumeButton}>
                {t("common.resume")}
              </Button>
            </Link>
          </Space>
          <Space wrap size={10} className={styles.stackRow}>
            <Typography.Text className={styles.stackLabel}>
              {t("home.stackLabel")}
            </Typography.Text>
            {TECH_STACK.map((tech) => (
              <Tag key={tech} className={styles.stackTag}>
                {tech}
              </Tag>
            ))}
          </Space>
        </div>
        <div className={styles.heroRight}>
          <div className={styles.heroImage}>
            <div className={styles.heroImageFrame}>
              <img
                className={styles.heroImageImg}
                src={new URL(
                  "../../assets/hero.png",
                  import.meta.url,
                ).toString()}
                alt={t("home.heroImageAlt")}
              />
            </div>
            <div className={styles.heroImageBadge}>
              <span className={styles.heroImageBadgeValue}>
                {COMPLETED_PROJECTS}
              </span>
              <span className={styles.heroImageBadgeLabel}>
                {t("home.statLabel")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Row gutter={[16, 16]} className={styles.skillsRow}>
        {cards.map((card) => (
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
            {t("home.bannerTitle")}
          </Title>
          <Paragraph className={styles.bannerSubtitle}>
            {t("home.bannerSubtitle")}
          </Paragraph>
          <div className={styles.bannerTechRow}>
            {BANNER_TECH.map((tech) => (
              <div key={tech.label} className={styles.bannerSymbol}>
                {tech.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
