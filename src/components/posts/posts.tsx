import Link from 'next/link';
import clsx from 'clsx';
import { PostComponentsProps } from './types';
import { PostItem } from '../postItem';
import { Spinner } from '../spinner';

export const PostsComponent: React.FC<PostComponentsProps> = (props) => {
  const { openTab, setOpenTab, posts, isLoading } = props;

  const classes = {
    baseTab:
      'text-gray-600 py-4 px-6 block hover:text-blue-500 focus:outline-none font-medium border-blue-500',
    selected: 'text-blue-500 border-b-2',
  };

  return (
    <div>
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

      <div className="grid grid-cols-1 gap-3 justify-items-center container mx-auto mt-6">
        {isLoading && <Spinner />}
        {posts &&
          posts.length > 0 &&
          (openTab === 'allPosts' ? (
            posts.map((post, index) => {
              return <PostItem key={index} post={post} />;
            })
          ) : (
            //TODO
            <h2>posts filtered by addrss</h2>
          ))}
      </div>
    </div>
  );
};
