import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, PostImage, Meta } from '../../components/post'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Post = () => {
  return (
    <Layout title="cv">
      <Container>
        <Title>
          my cv <Badge>2022</Badge>
        </Title>
        <List ml={4} my={2}>
          <ListItem>
            <Meta>philo</Meta>
          </ListItem>
        </List>
        <Paragraph>
            özgeçmiş ??
        </Paragraph>
        <List>
          <ListItem>
            <PostImage
              src={'../static/images/yecv.png'}
              alt="contract"
            ></PostImage>
          </ListItem>
          </List>
      </Container>
    </Layout>
  )
}

export default Post
