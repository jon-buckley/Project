import React from 'react'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { BrowserRouter as Router } from 'react-router-dom'
import theme from './theme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Box>
          <Navbar />
          <Hero />
        </Box>
      </Router>
    </ChakraProvider>
  )
}

export default App
