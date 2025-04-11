import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import Header from './components/Header'
import DistributionForm from './components/DistributionForm'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <DistributionForm />
    </ChakraProvider>
  )
}

export default App
