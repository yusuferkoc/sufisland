import { Container, Divider, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import { WorkGridItem } from "../components/grid-item";
import Section from "../components/section";
import thumbSwapper from "../public/static/images/ac.jpg"
import thumbDao from "../public/static/images/dao.png"
import Glas from "../public/static/images/glass.png"
import Layout from "../components/layouts/article";


 
const Works = () => {
    return(
        <Layout>
            <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section delay={0.1}>
                    <WorkGridItem id="swapper" title="Swapper" thumbnail={thumbSwapper}></WorkGridItem>
                        <Text fontFamily="M PLUS Rounded 1c" fontWeight={"thin"}>Decentralized swap exchange based on ethereum.</Text>
                </Section>
                <Section delay={0.2}>
                    <WorkGridItem id="glas" title="Glas" thumbnail={Glas}></WorkGridItem>
                    <Text fontFamily="M PLUS Rounded 1c" fontWeight={"thin"}>A tool that creates a stylish code preview.</Text>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
        
    )
}

export default Works
