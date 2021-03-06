import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans',
    color: '#fff',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
      },
    },
  },
})
