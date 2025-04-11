import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    fcdo: {
      50: '#e6eaf4',
      100: '#b3bde5',
      200: '#8090d6',
      300: '#4d63c7',
      400: '#1a36b8',
      500: '#002868', // FCDO primary blue
      600: '#002154',
      700: '#001a40',
      800: '#00132c',
      900: '#000c18',
    },
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: 'fcdo.500',
      },
    },
    Select: {
      defaultProps: {
        focusBorderColor: 'fcdo.500',
      },
    },
    Button: {
      defaultProps: {
        colorScheme: 'fcdo',
      },
    },
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
      },
    },
  },
})

export default theme 