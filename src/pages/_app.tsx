import type { AppProps } from 'next/app';
import '../styles/styles.css';
import { Web3Container } from '../container/web3Container';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3Container.Provider>
      <Component {...pageProps} />
    </Web3Container.Provider>
  );
}

export default MyApp;
