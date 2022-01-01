import { Box, Container, useColorModeValue, Stack } from '@chakra-ui/react';
import React from 'react';


function Navbar(props) {
    return (
        <Box 
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={1}
            {...props}
        >
             <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
          Test
      </Container>
        </Box>
    );
}

export default Navbar;