import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Noa">
      <Container>
        <Title>
          App <Badge>2023</Badge>
        </Title>
        <Paragraph>Social Media App UI with Swift UI</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>App</Meta>
            <Link href="https://github.com/yusuferkoc/Noa-SocialMediaUI-SwiftUI">
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
              src={'../static/images/noa.gif'}
              alt="btc"
            ></WorkImage>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
