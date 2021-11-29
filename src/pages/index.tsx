import React, { useState } from 'react';
import { NextPage } from 'next';
import clsx from 'clsx';
import Layout from '../components/ui-elements/Layout';
import Button from '../components/ui-elements/Button';

type tabTitles = 'allPosts' | 'myPosts';

const PostsList: NextPage = () => {
  const [openTab, setOpenTab] = useState<tabTitles>('allPosts');
  const classes = {
    baseTab:
      'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-medium border-blue-500',
    selected: 'text-blue-500 border-b-2',
  };

  return (
    <Layout>
      <div className="mt-8">
        <div className="flex justify-between container mx-auto">
          <h1>List of Posts</h1>
          <Button text="Create New Post" />
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
      </div>
    </Layout>
  );
};

export default PostsList;
