import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { Title, PostImage, Meta } from '../../components/post'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Post = () => {
  return (
    <Layout title="moi">
      <Container>
        <Title>
          Münacaat <Badge>2022</Badge>
        </Title>
        <List ml={4} my={2}>
          <ListItem>
            <Meta>philo</Meta>
          </ListItem>
        </List>
        <Paragraph>
          Bu yaşa erdirdin beni,gençtim almadın canımı ölmedim genç olarak
          ,ölmedim beni leylak büklümlerinin içten ve dışardan sarmaladığı
          günlerde bir zamandı heves ettim gölgemi enginde yatan o berrak
          sayfada gezindirsem diye ölmedim, bir gençlik ölümü saklı kaldı bende.
          Vakti vardıysa aşkın,onu beklemeliydi genç olmak yetmiyordu fayrap
          sevişmek için halbuki aşk,başka ne olsundu hayatın mazereti demedim
          dilimin ucuna gelen her ne ise vay ki gençtim ölümle paslanmış buldum
          sesimi.
        </Paragraph>
      </Container>
    </Layout>
  )
}

export default Post
