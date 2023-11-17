import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="FlashChat">
      <Container>
        <Title>
          App <Badge>2023</Badge>
        </Title>
        <Paragraph> iOS chat app</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>App</Meta>
            <Link href="https://github.com/yusuferkoc/FlashChat">
              Github
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
              src={'../static/images/1.png'}
              alt="contract"
            ></WorkImage>
          </ListItem>
          <ListItem>
            <WorkImage
              src={'../static/images/2.png'}
              alt="contract"
            ></WorkImage>
            <WorkImage
              src={'../static/images/3.png'}
              alt="contract"
            ></WorkImage>
            <WorkImage
              src={'../static/images/4.png'}
              alt="contract"
            ></WorkImage>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
