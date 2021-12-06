import Web3 from 'web3';
import detectEthereumProvider from '@metamask/detect-provider';
import { AbstractProvider } from 'web3-core';
import { Web3Container } from '../container/web3Container';

export const useMetamask = () => {
  const { updateWeb3 } = Web3Container.useContainer();

  const connectMetamask = async () => {
    const provider = (await detectEthereumProvider()) as AbstractProvider;

    if (provider) {
      await provider.request?.({ method: 'eth_requestAccounts' });
      const newWeb3 = new Web3(provider);
      updateWeb3(newWeb3);
    } else {
      // TODO: show error modal?
      console.log('Please install metamask');
    }
  };

  return { connectMetamask };
};
