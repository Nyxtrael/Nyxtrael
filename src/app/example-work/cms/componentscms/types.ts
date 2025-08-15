export type Post = {
  id: number;
  title: string;
  slug: string;
  status: 'draft' | 'scheduled' | 'published';
  author: string;
  date: string;
  updatedAt: string;
  summary?: string;
  content?: string;
  tags: string[];
  seoTitle?: string;
  seoDesc?: string;
  scheduleAt?: string;
  version: number;
  history: Array<{
    version: number;
    title: string;
    summary?: string;
    content?: string;
    updatedAt: string;
    editor: string;
  }>;
};

export type MediaItem = {
  id: number;
  name: string;
  url: string;
  sizeKB: number;
};
