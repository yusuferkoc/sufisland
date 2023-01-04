import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Glas">
      <Container>
        <Title>
          Glas <Badge>2019</Badge>
        </Title>
        <Paragraph>A tool that creates a stylish code preview.</Paragraph>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://dekorglas.vercel.app/">
              Glas
              <ExternalLinkIcon />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Windows/macOS</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript</span>
          </ListItem>
        </List>
        <List>
          <ListItem>
            <WorkImage src="../static/images/glass.png" alt="glass"></WorkImage>
          </ListItem>
          <ListItem>
            <WorkImage src="../static/images/glas.png" alt="glas"></WorkImage>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
