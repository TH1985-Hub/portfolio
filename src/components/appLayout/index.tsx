import { useState } from "react";
import {
  GithubOutlined,
  LinkedinOutlined,
  MoonOutlined,
  SunOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import { Button, Layout, Menu, Space, Typography } from "antd";
import { PureComponent, useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { GeminiWidget } from "../../pages/Gemini/widget";

import { ThemeModeContext } from "@/App";
import { menuItems } from "./const";
import styles from "./styles.module.css";
import type { AppLayoutViewProps } from "./types";
import { getSelectedMenuKeys, shouldShowGeminiWidget } from "./utils";

const { Header, Content, Footer } = Layout;

class AppLayoutView extends PureComponent<AppLayoutViewProps> {
  render() {
    const selectedKeys = getSelectedMenuKeys(this.props.pathname);
    const { showGeminiWidget } = this.props;

    return (
      <Layout className={styles.root}>
        <Header className={styles.header}>
          <Typography.Title level={4} className={styles.title}>
            Tatevik Harutyunyan
          </Typography.Title>
          <Menu
            mode="horizontal"
            selectedKeys={selectedKeys}
            items={menuItems}
            onClick={({ key }) => {
              this.props.onNavigate(key);
            }}
            className={styles.menu}
          />
          <Space size={10} className={styles.headerActions}>
            <Button
              aria-label="Toggle theme"
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
                © {new Date().getFullYear()} Built with React & TypeScript
              </Typography.Text>
            </div>
            <Space size="middle" className={styles.footerLinks}>
              <Typography.Link href="https://github.com" target="_blank">
                <GithubOutlined /> GitHub
              </Typography.Link>
              <Typography.Link href="https://linkedin.com" target="_blank">
                <LinkedinOutlined /> LinkedIn
              </Typography.Link>
              <Typography.Link href="https://x.com" target="_blank">
                <TwitterOutlined /> Twitter
              </Typography.Link>
            </Space>
          </div>
        </Footer>
      </Layout>
    );
  }
}

export function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const theme = useContext(ThemeModeContext);

  const [isChatOpen, setIsChatOpen] = useState(false);

  const showGeminiWidget = shouldShowGeminiWidget(location.pathname);

  return (
    <AppLayoutView
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
    />
  );
}
