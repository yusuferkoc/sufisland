 import { Box } from '@chakra-ui/react';
import React from 'react'

 class Blink extends React.Component {
    render () {
        return (
            <Box class="dot" width={"10px"} height="10px" backgroundColor={"red"} borderRadius="full">  </Box>
        );
    }
 }
 export default Blink