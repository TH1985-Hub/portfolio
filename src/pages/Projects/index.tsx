import { ExportOutlined } from '@ant-design/icons'
import { Card, Col, Row, Space, Tag, Typography } from 'antd'
import { PureComponent } from 'react'
import { projects } from '@/data/projects'
import styles from './styles.module.css'

const { Title, Paragraph, Link } = Typography

export class ProjectsPage extends PureComponent {
  render() {
    return (
      <Space direction="vertical" size={24} className={styles.root}>
        <div>
          <Title level={2}>Projects</Title>
          <Paragraph type="secondary" className={styles.intro}>
            Cards are driven from{' '}
            <Typography.Text code>src/data/projects.ts</Typography.Text>. Add
            links, images, and case-study routes as you grow the site.
          </Paragraph>
        </div>
        <Row gutter={[16, 16]}>
          {projects.map((project) => (
            <Col xs={24} md={12} key={project.id}>
              <Card
                title={project.title}
                extra={
                  project.href ? (
                    <Link href={project.href} target="_blank">
                      Live / repo <ExportOutlined />
                    </Link>
                  ) : null
                }
                variant="borderless"
              >
                <Paragraph>{project.description}</Paragraph>
                <Space wrap>
                  {project.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </Space>
              </Card>
            </Col>
          ))}
        </Row>
      </Space>
    )
  }
}

