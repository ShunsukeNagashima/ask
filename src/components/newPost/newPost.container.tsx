import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { Layout } from '../layout';
import { NewPostComponent } from './newPost';
import { Web3Container } from 'src/container/web3Container';
import { createQuestion } from '../../utils/contractHelper';

export type FormData = {
  title: string;
  description: string;
  reward: string;
  restrict: boolean;
};

export const NewPost: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const router = useRouter();
  const { web3 } = Web3Container.useContainer();

  const onSubmit = handleSubmit(async (data: FormData) => {
    try {
      if (web3) {
        const contents = {
          title: data.title,
          description: data.description,
          restrict: data.restrict,
        };
        const hex = web3.utils.stringToHex(JSON.stringify(contents));

        await createQuestion(
          web3,
          parseInt(web3.utils.toWei(data.reward, 'ether')),
          hex
        );

        router.push('/');
      } else {
        // TODO handle error
      }
    } catch (err) {
      console.log(err);
    }
  });

  return (
    <Layout>
      <NewPostComponent
        onSubmit={onSubmit}
        register={register}
        errors={errors}
      />
    </Layout>
  );
};
