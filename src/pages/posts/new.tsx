import { NextPage } from 'next';
import Layout from '../../components/ui-elements/Layout';
import { NewPost } from '../../components/newPost';

const Page: NextPage = () => {
  return (
    <Layout>
      <NewPost />
    </Layout>
  );
};

export default Page;
