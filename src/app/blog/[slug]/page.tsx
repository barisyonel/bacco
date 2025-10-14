import type { Metadata } from 'next';
import { getAllPosts, getPostBySlug } from '@/data/blog';
import Image from 'next/image';
import Link from 'next/link';

type PageProps = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  const title = post ? `${post.title} | bacco` : 'Blog | bacco';
  const description = post?.excerpt || 'Bacco Blog';
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title, description },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) {
    return (
      <div className="max-w-3xl mx-auto p-8">
        <p>Yazı bulunamadı.</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <nav className="text-sm mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-600">
            <li><Link href="/" className="hover:underline">Ana Sayfa</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">{post.title}</li>
          </ol>
        </nav>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
        {post.image && (
          <div className="aspect-video relative rounded-xl overflow-hidden mb-6">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>
        )}
        <div className="text-gray-500 text-sm mb-4">{new Date(post.date).toLocaleDateString('tr-TR')}</div>
        <article className="prose prose-amber max-w-none">
          <p>{post.content}</p>
        </article>
      </div>
    </div>
  );
}


