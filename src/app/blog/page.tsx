import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getAllPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog | bacco',
  description: 'Duyurular, kahve rehberleri, sürdürülebilirlik hikayeleri.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Blog | bacco', description: 'Duyurular, kahve rehberleri, sürdürülebilirlik hikayeleri.' },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-lg text-gray-600">Duyurular ve kahve kültürü üzerine içerikler</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden border border-gray-100">
              <div className="aspect-video relative bg-gradient-to-br from-amber-100 to-orange-100">
                {post.image && (
                  <Image src={post.image} alt={post.title} fill className="object-cover" />
                )}
              </div>
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-1">{new Date(post.date).toLocaleDateString('tr-TR')}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h2>
                <p className="text-gray-600 line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}


