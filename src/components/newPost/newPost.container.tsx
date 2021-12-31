import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import BN from 'bn.js';
import { NewPostComponent } from './newPost';
import { Web3Container } from 'src/container/web3Container';
import { createQuestion } from '../../utils/contractHelper';

export type FormData = {
  title: string;
  description: string;
  reward: number;
  restrict: string;
};

export const NewPost: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: 'onBlur' });

  const router = useRouter();
  const { web3 } = Web3Container.useContainer();

  const onSubmit = handleSubmit(async (data: FormData) => {
    try {
      if (web3) {
        const contents = {
          title: data.title,
          description: data.description,
          restrict: data.restrict === 'true',
        };
        const hex = web3.utils.stringToHex(JSON.stringify(contents));

        await createQuestion(
          web3,
          web3.utils.toWei(new BN(data.reward), 'ether'),
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
    <NewPostComponent onSubmit={onSubmit} register={register} errors={errors} />
  );
};
