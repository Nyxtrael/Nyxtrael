import { notFound } from 'next/navigation';

const posts = [
  { id: '1', title: 'The Future of Web Design', content: '...' },
  // Add other posts
];

export default function BlogPost({ params }) {
  const post = posts.find(p => p.id === params.id);
  if (!post) notFound();
  return <div>{post.title} - {post.content}</div>;
}