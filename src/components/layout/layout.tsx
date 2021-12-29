import { useState } from 'react';
import Link from 'next/link';
import { ConnectWalletModal } from '../connectWalletModal';

export const Layout: React.FC = ({ children }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  return (
    <div>
      <nav className="flex bg-blue-500 justify-end items-center text-white mb-8">
        <div className="flex-grow font-bold pl-5">
          <Link href="/">
            <a>ASK</a>
          </Link>
        </div>
        <div className="block p-4 hover:bg-blue-700">
          <button onClick={() => setShowModal(true)}>
            <a>Connect Wallet</a>
          </button>
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
