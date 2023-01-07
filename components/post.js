import { ChevronRightIcon } from "@chakra-ui/icons"
import { Heading,Box,Image,Link,Badge, Img } from "@chakra-ui/react"
import NextLink from "next/link"
 
export const Title = ({children}) => (
    <Box>
        <NextLink href="/posts">
            <Link>Posts</Link>
        </NextLink>
        <span>
    <ChevronRightIcon/>
    </span>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
    </Heading>
    </Box>

)

export const PostImage = ({ src,alt }) => (
    <Img borderRadius="lg" w="full" src={src} alt={alt} mb={4} />

)

export const Meta = ({children}) => (
    <Badge colorScheme="green" mr={2}>
        {children}
    </Badge>
)