import { getItemById } from '@/data/menu';
import { Coffee } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  // Pre-render first N items; for demo, render first 20 ids
  const ids = Array.from({ length: 20 }).map((_, i) => String(i + 1));
  return ids.map((id) => ({ id }));
}

export const revalidate = 60; // ISR: 60s

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id: rawId } = await params;
  const id = Number(rawId);
  const item = getItemById(id);
  const title = item ? `${item.name} | bacco` : 'Ürün | bacco';
  const description = item ? item.description : 'Bacco ürün detayları.';
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
    },
    alternates: { canonical: `/menu/${rawId}` },
  };
}

export default async function MenuDetailPage({ params }: PageProps) {
  const { id: rawId } = await params;
  const id = Number(rawId);
  const item = getItemById(id);

  if (!item) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <Coffee className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h1 className="text-2xl font-bold mb-2">Ürün bulunamadı</h1>
        <p className="text-gray-600 mb-6">Aradığınız ürün mevcut değil veya kaldırılmış olabilir.</p>
        <Link href="/menu" className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">Menüye Dön</Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl aspect-square flex items-center justify-center">
          {item.image ? (
            <Image src={item.image} alt={item.name} width={480} height={480} className="object-contain p-10" />
          ) : (
            <Coffee className="h-32 w-32 text-amber-600" />
          )}
        </div>
        <div>
          <div className="text-sm text-amber-600 font-medium mb-2">{item.category === 'cafe' ? 'Cafe' : 'Restoran'}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">{item.name}</h1>
          <p className="text-gray-700 mb-6">{item.description}</p>

          {Array.isArray(item.features) && item.features.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">Özellikler</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {item.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>
          )}

          {Array.isArray(item.ingredients) && item.ingredients.length > 0 && (
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">İçindekiler</h2>
              <div className="flex flex-wrap gap-2">
                {item.ingredients.map((ing, i) => (
                  <span key={i} className="inline-block text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-200">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex gap-3">
            <Link href="/menu" className="bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700">Menüye Dön</Link>
            <Link href="/best-sellers" className="border border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50">En Çok Tercih Edilenler</Link>
          </div>
        </div>
      </div>
    </div>
  );
}


