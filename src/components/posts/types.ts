export type Post = {
  questioner: string;
  title: string;
  description: string;
  restrict: boolean;
  incentive: string
}

export type PostComponentsProps = {
  openTab: 'allPosts' | 'myPosts';
  setOpenTab: (tab: TabTitles) => void;
  posts: Post[] | undefined;
  isLoading: boolean;
};

export type TabTitles = 'allPosts' | 'myPosts';
