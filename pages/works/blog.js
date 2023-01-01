import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Blog">
      <Container>
        <Title>
          Blog <Badge>2022</Badge>
        </Title>
        <Paragraph>A ready-made react template to create a personal website</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://sufisland.vercel.app/">
              Contr`Act
              <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOs</span>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <WorkImage
              src={'../static/images/sufisland.png'}
              alt="contract"
            ></WorkImage>
          </ListItem>
          <ListItem>
            <WorkImage
              src={'../static/images/sufisland2.png'}
              alt="contract"
            ></WorkImage>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
