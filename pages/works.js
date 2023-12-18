import { Container, Divider, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import Section from '../components/section'
import thumbContract from '../public/static/images/Contr`Act.png'
import Glas from '../public/static/images/glas.png'
import Layout from '../components/layouts/article'
import sufisland from '../public/static/images/sufisland.png'
import comp from '../public/static/images/dao.png'
import f1 from '../public/static/images/1.png'
import t1 from '../public/static/images/t1.png'
import pdf from '../public/static/images/p.gif'
import tn from '../public/static/images/tn.gif'
import btc from '../public/static/images/btc.gif'
import Subparagraph from '../components/subparagraph'
import noa from '../public/static/images/noa.png'
import recipe from '../public/static/images/recipe.png'






const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <WorkGridItem
              id="swapper"
              title="Swapper"
              thumbnail={thumbContract}
            ></WorkGridItem>
            <Subparagraph fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
              Crypto integrations at smart contract level.
            </Subparagraph>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem
              id="glas"
              title="Glas"
              thumbnail={Glas}
            ></WorkGridItem>
            <Subparagraph fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
              A tool that creates a stylish code preview.
            </Subparagraph>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem
              id="blog"
              title="Blog"
              thumbnail={sufisland}
            ></WorkGridItem>
            <Subparagraph fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
              A ready-made react template to create a personal website.
            </Subparagraph>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="recipe"
              title="recipe"
              thumbnail={recipe}
            ></WorkGridItem>
            <Subparagraph fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
            Recipe app UI 
            </Subparagraph>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="Noa"
              title="Noa"
              thumbnail={noa}
            ></WorkGridItem>
            <Subparagraph fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
            Social Media App UI
            </Subparagraph>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="BTCurrency"
              title="BTCurrency"
              thumbnail={btc}
            ></WorkGridItem>
            <Subparagraph fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
            iOS app that only shows the price of 1 BTC for all currencies
            </Subparagraph>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="TechNews"
              title="TechNews"
              thumbnail={t1}
            ></WorkGridItem>
            <Subparagraph fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
            Hacker News stream app
            </Subparagraph>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="FlashChat"
              title="FlashChat"
              thumbnail={f1}
            ></WorkGridItem>
            <Subparagraph fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
              iOS chat app 
            </Subparagraph>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem
              id="PDFReader"
              title="PDFReader"
              thumbnail={pdf}
            ></WorkGridItem>
            <Subparagraph fontFamily="M PLUS Rounded 1c" fontWeight={'thin'}>
              Swift UI PDF Reader app
            </Subparagraph>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works


