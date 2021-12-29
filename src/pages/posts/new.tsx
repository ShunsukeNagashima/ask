import { NextPage } from 'next';
import { Layout } from '../../components/layout';
import { NewPost } from '../../components/newPost';

const Page: NextPage = () => {
  return (
    <Layout>
      <NewPost />
    </Layout>
  );
};

export default Page;
