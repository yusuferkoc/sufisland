import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="TechNews">
      <Container>
        <Title>
          App <Badge>2023</Badge>
        </Title>
        <Paragraph>Hacker News stream iOS app</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>App</Meta>
            <Link href="https://github.com/yusuferkoc/Tech-News-">
              sufisland
              <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>iOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>SwiftUI</span>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <WorkImage
              src={'../static/images/t1.png'}
              alt="contract"
            ></WorkImage>
          </ListItem>
          <ListItem>
            <WorkImage
              src={'../static/images/t2.png'}
              alt="contract"
            ></WorkImage>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
