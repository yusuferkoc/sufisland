import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Container,Badge,Link,List,ListItem } from "@chakra-ui/react";
import { Title,WorkImage,Meta } from "../../components/work";
import Paragraph from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return(
        <Layout title="Glas">
            <Container>
                <Title>
                    Glas <Badge>2019</Badge>
                </Title>
                <Paragraph>
                A tool that creates a stylish code preview.
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://dekorglas.vercel.app/">glas<ExternalLinkIcon/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOs</span>
                    </ListItem>
                </List>
                <WorkImage src={"/images/glas.png"} alt="glas"></WorkImage>
            </Container>
        </Layout>
    )
}

export default Work