import { Coffee } from 'lucide-react';
import Image from 'next/image';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'En Çok Tercih Edilenler | bacco',
  description: 'Bacco misafirlerinin en çok tercih ettiği kahveler ve lezzetler.',
  openGraph: {
    title: 'En Çok Tercih Edilenler | bacco',
    description: 'Bacco misafirlerinin en çok tercih ettiği kahveler ve lezzetler.',
    type: 'website',
  },
  alternates: { canonical: '/best-sellers' },
};
import { getPopularItems } from '@/data/menu';
import Link from 'next/link';

export default function BestSellersPage() {
  const items = getPopularItems();

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">En Çok Tercih Edilenler</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">Misafirlerimizin en çok beğendiği kahveler ve lezzetler</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <Link key={item.id} href={`/menu/${item.id}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center relative">
                {item.image ? (
                  <Image src={item.image} alt={item.name} width={300} height={300} className="object-contain p-6" />
                ) : (
                  <Coffee className="h-16 w-16 text-amber-600" />
                )}
                <div className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium">Popüler</div>
              </div>
              <div className="p-6">
                <div className="text-sm text-amber-600 font-medium mb-2">{item.category === 'cafe' ? 'Cafe' : 'Restoran'}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {items.length === 0 && (
          <div className="text-center py-12">
            <Coffee className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Henüz öne çıkan ürün yok</h3>
            <p className="text-gray-600">Menümüzü yakında güncelleyeceğiz.</p>
          </div>
        )}

        <div className="text-center mt-10">
          <Link href="/menu" className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200">
            Tüm Menüyü Gör
          </Link>
        </div>
      </div>
    </div>
  );
}


