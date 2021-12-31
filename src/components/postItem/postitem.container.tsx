import { PostItemComponent } from './postItem';
import { PostItemProps } from './types';

export const PostItem = (props: PostItemProps) => {
  const { post } = props;
  return <PostItemComponent post={post} />;
};
