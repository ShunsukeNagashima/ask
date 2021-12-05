import { NextPage } from 'next';
import { Layout } from '../components/layout';
import { Posts } from '../components/posts';

const Page: NextPage = () => {
  return (
    <Layout>
      <Posts />
    </Layout>
  );
};

export default Page;
