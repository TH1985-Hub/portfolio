import { CheckCircleOutlined, ReadOutlined } from "@ant-design/icons";
import { Card, List, Typography } from "antd";
import { PureComponent } from "react";
import { aboutParagraphs, educationItems, strengths } from "./const";
import styles from "./styles.module.css";

const { Title, Paragraph } = Typography;

export class AboutPage extends PureComponent {
  render() {
    return (
      <Card variant="borderless" className={styles.card}>
        <Title level={2}>About</Title>

        {aboutParagraphs.map((paragraph) => (
          <Paragraph key={paragraph} type="secondary" className={styles.paragraph}>
            {paragraph}
          </Paragraph>
        ))}

        <Title level={4} className={styles.sectionTitle}>
          Education & Journey
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
          What I bring
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
