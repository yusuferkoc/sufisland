import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Container,Badge,Link,List,ListItem } from "@chakra-ui/react";
import { Title,WorkImage,Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return(
        <Layout title="Swapper">
            <Container>
                <Title>
                    Swapper <Badge>2021</Badge>
                </Title>
                <Paragraph>
                Decentralized swapper based on ethereum.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.sufisland.com/">https://www.sufisland.com<ExternalLinkIcon/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOs</span>
                    </ListItem>
                </List>
                <WorkImage src={"static/images/hero.png"} alt="swapper"></WorkImage>
            </Container>
        </Layout>
    )
}

export default Work