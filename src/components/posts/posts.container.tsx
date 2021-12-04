import { useState } from 'react';
import { PostsComponent } from './posts';

export type tabTitles = 'allPosts' | 'myPosts';

export const Posts: React.FC = () => {
  const [openTab, setOpenTab] = useState<tabTitles>('allPosts');

  return <PostsComponent openTab={openTab} setOpenTab={setOpenTab} />;
};
