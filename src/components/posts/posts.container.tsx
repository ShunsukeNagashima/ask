import { useState, useEffect } from 'react';
import { PostsComponent } from './posts';
import { Web3Container } from 'src/container/web3Container';
import { getQuestions } from 'src/utils/contractHelper';
import { TabTitles, Post } from './types';

export const Posts: React.FC = () => {
  const [openTab, setOpenTab] = useState<TabTitles>('allPosts');
  const [posts, setPosts] = useState<Post[]>();
  const [isLoading, setIsLoading] = useState(false);
  const { web3 } = Web3Container.useContainer();

  useEffect(() => {
    if (web3) {
      const fetchPosts = async () => {
        setIsLoading(true);
        try {
          const fetchedData = await getQuestions(web3);
          const posts = fetchedData.map((data) => {
            const contents = JSON.parse(web3.utils.hexToString(data.contents));
            return {
              questioner: data.questioner,
              title: String(contents.title),
              description: String(contents.description),
              restrict: Boolean(contents.restrict),
              incentive: data.incentive,
            };
          });
          setPosts(posts);
        } catch (err) {
          console.log(err);
        }
        setIsLoading(false);
      };
      fetchPosts();
    }
  }, [web3]);

  return (
    <PostsComponent
      openTab={openTab}
      setOpenTab={setOpenTab}
      posts={posts}
      isLoading={isLoading}
    />
  );
};
