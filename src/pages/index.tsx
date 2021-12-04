import { NextPage } from 'next';
import Layout from '../components/ui-elements/Layout';
import { Posts } from '../components/posts';

const Page: NextPage = () => {
  return (
    <Layout>
      <Posts />
    </Layout>
  );
};

export default Page;
