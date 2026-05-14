import { useState } from "react";
import {
  AppstoreOutlined,
  GithubOutlined,
  HomeOutlined,
  LinkedinOutlined,
  MoonOutlined,
  PhoneOutlined,
  ProjectOutlined,
  SunOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Space, Typography } from "antd";
import { PureComponent, useContext } from "react";
import { useTranslation, withTranslation, type WithTranslation } from "react-i18next";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { LanguageSwitcher } from "@/components/common/languageSwitcher";
import { GeminiWidget } from "../../pages/Gemini/widget";

import { ThemeModeContext } from "@/App";
import styles from "./styles.module.css";
import type { AppLayoutViewProps } from "./types";
import { getSelectedMenuKeys, shouldShowGeminiWidget } from "./utils";

const { Header, Content, Footer } = Layout;

class AppLayoutView extends PureComponent<AppLayoutViewProps & WithTranslation> {
  render() {
    const selectedKeys = getSelectedMenuKeys(this.props.pathname);
    const { showGeminiWidget } = this.props;
    const { t } = this.props;
    const headerMenuItems = [
      { key: "/", label: t("layout.menuHome") },
      { key: "/gemini", label: t("layout.menuGemini") },
      { key: "/projects", label: t("common.projects") },
      { key: "/experience", label: t("common.experience") },
      { key: "/contact", label: t("common.contact") },
    ];
    const menuItems = [
      { key: "/", label: <HomeOutlined />, title: t("layout.menuHome") },
      {
        key: "/gemini",
        label: <AppstoreOutlined />,
        title: t("layout.menuGemini"),
      },
      {
        key: "/projects",
        label: <ProjectOutlined />,
        title: t("common.projects"),
      },
      {
        key: "/experience",
        label: <GithubOutlined />,
        title: t("common.experience"),
      },
      {
        key: "/contact",
        label: <PhoneOutlined />,
        title: t("common.contact"),
      },
    ];

    return (
      <Layout className={styles.root}>
        <Header className={styles.header}>
          <Typography.Title level={3} className={styles.title}>
            Tatevik Harutyunyan
          </Typography.Title>
          <Space size={10} className={styles.headerActions}>
            <nav className={styles.headerMenu} aria-label="Header navigation">
              {headerMenuItems.map((item) => {
                const isActive = selectedKeys.includes(item.key);

                return (
                  <button
                    key={item.key}
                    type="button"
                    className={`${styles.headerMenuLink} ${
                      isActive ? styles.headerMenuLinkActive : ""
                    }`}
                    onClick={() => {
                      this.props.onNavigate(item.key);
                    }}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
            <LanguageSwitcher
              lang={this.props.lang}
              onChange={this.props.onChangeLanguage}
            />
            <Button
              aria-label={t("layout.toggleTheme")}
              className={styles.themeButton}
              icon={
                this.props.themeMode === "dark" ? (
                  <SunOutlined />
                ) : (
                  <MoonOutlined />
                )
              }
              onClick={() => {
                this.props.onToggleThemeMode();
              }}
            />
          </Space>
        </Header>
        <Menu
          mode="horizontal"
          selectedKeys={selectedKeys}
          items={menuItems}
          onClick={({ key }) => {
            this.props.onNavigate(key);
          }}
          className={styles.menu}
        />
        <Content className={styles.content}>
          <Outlet />

          {showGeminiWidget && <GeminiWidget />}
        </Content>
        <Footer className={styles.footer}>
          <div className={styles.footerInner}>
            <div className={styles.footerLeft}>
              <Typography.Text type="secondary" className={styles.footerBrand}>
                DevPortfolio
              </Typography.Text>
              <Typography.Text
                type="secondary"
                className={styles.footerCopyright}
              >
                © {new Date().getFullYear()} {t("layout.builtWith")}
              </Typography.Text>
            </div>
            <Space size="middle" className={styles.footerLinks}>
              <Typography.Link href="https://github.com" target="_blank">
                <GithubOutlined /> {t("common.github")}
              </Typography.Link>
              <Typography.Link href="https://linkedin.com" target="_blank">
                <LinkedinOutlined /> {t("layout.linkedIn")}
              </Typography.Link>
              <Typography.Link href="https://x.com" target="_blank">
                <TwitterOutlined /> {t("layout.twitter")}
              </Typography.Link>
            </Space>
          </div>
        </Footer>
      </Layout>
    );
  }
}

const LocalizedAppLayoutView = withTranslation()(AppLayoutView);

export function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useContext(ThemeModeContext);
  const { i18n } = useTranslation();

  const [isChatOpen, setIsChatOpen] = useState(false);

  const showGeminiWidget = shouldShowGeminiWidget(location.pathname);

  return (
    <LocalizedAppLayoutView
      pathname={location.pathname}
      showGeminiWidget={showGeminiWidget}
      isChatOpen={isChatOpen}
      onOpenChat={() => setIsChatOpen(true)}
      onCloseChat={() => setIsChatOpen(false)}
      onNavigate={(to) => {
        void navigate(to);
      }}
      themeMode={theme?.mode ?? "dark"}
      onToggleThemeMode={() => {
        theme?.toggleMode();
      }}
      lang={i18n.language === "am" || i18n.language === "ru" ? i18n.language : "en"}
      onChangeLanguage={(lang) => {
        void i18n.changeLanguage(lang);
      }}
    />
  );
}
