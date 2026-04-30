import { CheckCircleOutlined, ReadOutlined } from "@ant-design/icons";
import { Card, List, Typography } from "antd";
import { PureComponent } from "react";
import { withTranslation, type WithTranslation } from "react-i18next";
import styles from "./styles.module.css";

const { Title, Paragraph } = Typography;

class AboutPageView extends PureComponent<WithTranslation> {
  render() {
    const { t } = this.props;
    const aboutParagraphs = [t("about.paragraph1"), t("about.paragraph2")];
    const educationItems = [
      t("about.education1"),
      t("about.education2"),
      t("about.education3"),
    ];
    const strengths = [t("about.strength1"), t("about.strength2"), t("about.strength3")];

    return (
      <Card variant="borderless" className={styles.card}>
        <Title level={2}>{t("about.title")}</Title>

        {aboutParagraphs.map((paragraph) => (
          <Paragraph key={paragraph} type="secondary" className={styles.paragraph}>
            {paragraph}
          </Paragraph>
        ))}

        <Title level={4} className={styles.sectionTitle}>
          {t("about.sectionEducation")}
        </Title>
        <List
          dataSource={educationItems}
          renderItem={(item) => (
            <List.Item>
              <ReadOutlined className={styles.listIcon} />
              {item}
            </List.Item>
          )}
        />

        <Title level={4} className={styles.sectionTitle}>
          {t("about.sectionStrengths")}
        </Title>
        <List
          dataSource={strengths}
          renderItem={(item) => (
            <List.Item>
              <CheckCircleOutlined className={styles.listIcon} />
              {item}
            </List.Item>
          )}
        />
      </Card>
    );
  }
}

export const AboutPage = withTranslation()(AboutPageView);
