import detectEthereumProvider from '@metamask/detect-provider';
import { useCallback, useEffect, useState } from 'react';
import { createContainer } from 'unstated-next';
import Web3 from 'web3';
import { AbstractProvider } from 'web3-core';

const useWeb3 = () => {
  const [web3, setWeb3] = useState<Web3>();
  const [errorMessage, setErrorMessage] = useState<string>();
  const updateWeb3 = useCallback(
    (web3) => {
      setWeb3(web3);
      setErrorMessage(undefined);
    },
    [setWeb3]
  );
  useEffect(() => {
    const setup = async () => {
      if (!web3) {
        const provider = (await detectEthereumProvider()) as AbstractProvider;
        setWeb3(new Web3(provider));
      }
    };
    setup();
  });
  return { web3, updateWeb3, errorMessage, setErrorMessage };
};
export const Web3Container = createContainer(useWeb3);
