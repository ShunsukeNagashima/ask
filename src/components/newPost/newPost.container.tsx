import { useForm } from 'react-hook-form';
import { NewPostComponent } from './newPost';

export type FormData = {
  title: string;
  description: string;
  reward: number;
  restrict: boolean;
};

export const NewPost: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data: FormData) => {
    console.log(data);
  });

  return (
    <NewPostComponent onSubmit={onSubmit} register={register} errors={errors} />
  );
};
