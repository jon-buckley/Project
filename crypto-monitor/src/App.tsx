import React from 'react';
import { ChakraProvider, Box, Container, CSSReset } from '@chakra-ui/react';
import { Header } from './components/Header';
import { CryptoList } from './components/CryptoList';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Box minH="100vh" bg="gray.50">
        <Header />
        <Container maxW="container.xl" py={8}>
          <CryptoList />
        </Container>
      </Box>
    </ChakraProvider>
  );
}

export default App;
