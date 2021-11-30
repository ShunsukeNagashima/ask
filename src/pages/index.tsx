import React, { useState } from 'react';
import { NextPage } from 'next';
import Link from 'next/link';
import clsx from 'clsx';
import Layout from '../components/ui-elements/Layout';

type tabTitles = 'allPosts' | 'myPosts';

const PostsListPage: NextPage = () => {
  const [openTab, setOpenTab] = useState<tabTitles>('allPosts');
  const classes = {
    baseTab:
      'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-medium border-blue-500',
    selected: 'text-blue-500 border-b-2',
  };

  return (
    <Layout>
      <div className="flex justify-between container mx-auto">
        <h1>List of Posts</h1>
        <button className="btn bg-blue-500 hover:bg-blue-700 text-white">
          <Link href="/posts/new">
            <a>Create New Post</a>
          </Link>
        </button>
      </div>

      <div>
        <nav className="flex justify-center">
          <button
            onClick={() => setOpenTab('allPosts')}
            className={clsx(
              classes.baseTab,
              openTab === 'allPosts' && classes.selected
            )}
          >
            All Posts
          </button>
          <button
            onClick={() => setOpenTab('myPosts')}
            className={clsx(
              classes.baseTab,
              openTab === 'myPosts' && classes.selected
            )}
          >
            My Posts
          </button>
        </nav>
        <hr className="border-b-2 border-blue-500" />
      </div>
    </Layout>
  );
};

export default PostsListPage;
