import React from 'react';
import Link from 'next/link';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <nav className="flex bg-blue-500 justify-end items-center text-white mb-8">
        <div className="flex-grow font-bold pl-5">
          <Link href="/">
            <a>ASK</a>
          </Link>
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
    </div>
  );
};

export default Layout;
