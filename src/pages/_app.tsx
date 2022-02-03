import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';

import { SidebarDrawerProvider } from '../../SidebarDrawerContext';

import { theme } from '../styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

export default App;
