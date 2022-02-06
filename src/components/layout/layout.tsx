import { useState, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { ConnectWalletModal } from '../connectWalletModal';
import { Web3Container } from 'src/container/web3Container';

export const Layout: React.FC = ({ children }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userAddress, setUserAddress] = useState('');
  const { web3 } = Web3Container.useContainer();

  useEffect(() => {
    const setUp = async () => {
      if (!web3) return;
      const address = (await web3.eth.getAccounts())[0];
      setUserAddress(address);
    };
    setUp();
  }, [web3]);

  return (
    <div>
      <nav className="flex bg-blue-500 justify-end items-center text-white mb-8">
        <div className="flex-grow font-bold pl-5">
          <Link href="/">
            <a>ASK</a>
          </Link>
        </div>
        <div className={clsx('block p-4', !userAddress && 'hover:bg-blue-700')}>
          {userAddress ? (
            `${userAddress.slice(0, 4)}...${userAddress.slice(-4)}`
          ) : (
            <button onClick={() => setShowModal(true)}>
              <a>Connect Wallet</a>
            </button>
          )}
        </div>
        <div className="block p-4 hover:bg-blue-700">
          <Link href="/">
            <a>All Posts</a>
          </Link>
        </div>
        <div className="block p-4 hover:bg-blue-700">
          <Link href="/posts/new">
            <a>+</a>
          </Link>
        </div>
      </nav>
      {children}
      {showModal && <ConnectWalletModal onClose={() => setShowModal(false)} />}
    </div>
  );
};
