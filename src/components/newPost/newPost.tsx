import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { FormData } from './newPost.container';

type Props = {
  onSubmit: () => void;
  register: UseFormRegister<FormData>;
  errors: FieldErrors;
};

export const NewPostComponent: React.FC<Props> = (props) => {
  const { onSubmit, register, errors } = props;

  return (
    <div className="container mx-auto">
      <h1>New Post</h1>
      <form className="space-y-6 mt-6" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label>Title</label>
          <input
            className="input"
            {...register('title', { required: 'This field is required.' })}
          />
          <p>{errors.title?.message}</p>
        </div>

        <div className="flex flex-col">
          <label>Description</label>
          <textarea
            className="input"
            {...register('description', {
              required: 'This field is required.',
            })}
          ></textarea>
          <p>{errors.description?.message}</p>
        </div>

        <div className="flex flex-col">
          <label>Reward for best answer</label>
          <div>
            <input
              className="input"
              type="number"
              step="0.000000001"
              {...register('reward', {
                required: 'This field is required.',
                pattern: {
                  value: /^([1-9]\d*|0)(\.\d+)?$/,
                  message: 'Please Enter values greater than zero.',
                },
              })}
            />
            <span className="px-3">Ether</span>
          </div>
          <p>{errors.reward?.message}</p>
        </div>

        <div className="flex flex-col">
          <label>Answer for this post can be seen by...</label>
          <div>
            <label>
              <input
                type="radio"
                value="false"
                {...register('restrict', {
                  required: 'This field is required.',
                })}
                defaultChecked
              />
              <span className="ml-2">anyone using this site</span>
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                value="true"
                {...register('restrict', { required: true })}
              />
              <span className="ml-2">only you</span>
            </label>
          </div>
          <p>{errors.restrict?.message}</p>
        </div>

        <button className="btn bg-blue-500 hover:bg-blue-700 text-white">
          Create!
        </button>
      </form>
    </div>
  );
};
