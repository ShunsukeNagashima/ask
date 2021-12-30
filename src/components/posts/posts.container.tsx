import { useState, useEffect } from 'react';
import { PostsComponent } from './posts';
import { Web3Container } from 'src/container/web3Container';
import { getQuestions } from 'src/utils/contractHelper';
import { TabTitles, Post } from './types';

export const Posts: React.FC = () => {
  const [openTab, setOpenTab] = useState<TabTitles>('allPosts');
  const [posts, setPosts] = useState<Post[]>();
  const [filteredPosts, setFilteredPost] = useState<Post[]>();
  const [userAddress, setUserAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { web3 } = Web3Container.useContainer();

  useEffect(() => {
    if (web3) {
      const fetchPosts = async () => {
        setIsLoading(true);
        try {
          const address = (await web3.eth.getAccounts())[0];
          setUserAddress(address);
          const fetchedData = await getQuestions(web3);
          const posts = fetchedData.map((data) => {
            const contents = JSON.parse(web3.utils.hexToString(data.contents));
            return {
              questioner: data.questioner,
              title: contents.title,
              description: contents.description,
              restrict: contents.restrict === 'true',
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

  useEffect(() => {
    if (!posts || posts.length === 0 || !userAddress) return;
    const filteredPosts = posts.filter(
      (post) => post.questioner === userAddress
    );
    setFilteredPost(filteredPosts);
  }, [posts, userAddress]);

  return (
    <PostsComponent
      openTab={openTab}
      setOpenTab={setOpenTab}
      posts={posts}
      filteredPosts={filteredPosts}
      isLoading={isLoading}
    />
  );
};
