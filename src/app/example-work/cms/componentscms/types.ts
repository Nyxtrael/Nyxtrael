export type Post = {
  id: number;
  title: string;
  status: 'draft' | 'published';
  author: string;
  date: string; // ISO
};

export type MediaItem = {
  id: number;
  name: string;
  url: string;
  sizeKB: number;
};
