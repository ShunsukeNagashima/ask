import { PostItemProps } from './types';

export const PostItemComponent = (props: PostItemProps) => {
  const { post } = props;
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-9/12">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">{post.title}</h2>
      <p className="text-gray-700">posted by {post.questioner}</p>
    </div>
  );
};
