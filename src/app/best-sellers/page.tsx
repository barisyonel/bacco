import type { Metadata } from 'next';
import { getPopularItems } from '@/data/menu';
import Link from 'next/link';
import Image from 'next/image';
import { Star, Coffee, Utensils, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'En Çok Satanlar | bacco',
  description: 'bacco\'nun en popüler kahve ve restoran ürünleri. Müşterilerimizin favorileri.',
  alternates: { canonical: '/best-sellers' },
  openGraph: {
    title: 'En Çok Satanlar | bacco',
    description: 'bacco\'nun en popüler kahve ve restoran ürünleri.',
    type: 'website',
  },
};

export default function BestSellersPage() {
  const popularItems = getPopularItems();

  const cafeItems = popularItems.filter(item => item.category === 'cafe');
  const restaurantItems = popularItems.filter(item => item.category === 'restaurant');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brandGreen-900 to-brandGreen-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">En Çok Satanlar</h1>
          <p className="text-xl text-cream-200 max-w-3xl mx-auto">
            Müşterilerimizin en çok tercih ettiği kahve ve restoran ürünleri. 
            Bu lezzetleri mutlaka deneyin!
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-600">
            <li><Link href="/" className="hover:underline">Ana Sayfa</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">En Çok Satanlar</li>
          </ol>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Cafe Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-brandOrange-100 rounded-xl mr-4">
              <Coffee className="h-8 w-8 text-brandOrange-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">En Popüler Kahveler</h2>
              <p className="text-gray-600">Müşterilerimizin favori kahve çeşitleri</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cafeItems.map((item) => (
              <Link
                key={item.id}
                href={`/menu/${item.id}`}
                className="group block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center relative">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <Coffee className="h-16 w-16 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                  )}
                  <div className="absolute top-4 right-4 bg-brandOrange-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Popüler
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center text-brandOrange-600 font-medium">
                    Detayları Gör
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Restaurant Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <div className="p-3 bg-brandGreen-100 rounded-xl mr-4">
              <Utensils className="h-8 w-8 text-brandGreen-600" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">En Popüler Yemekler</h2>
              <p className="text-gray-600">Müşterilerimizin favori restoran ürünleri</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantItems.map((item) => (
              <Link
                key={item.id}
                href={`/menu/${item.id}`}
                className="group block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-square bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center relative">
                  {item.image ? (
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={200}
                      height={200}
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-300"
                    />
                  ) : (
                    <Utensils className="h-16 w-16 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                  )}
                  <div className="absolute top-4 right-4 bg-brandGreen-600 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="h-3 w-3 mr-1" />
                    Popüler
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                  <div className="flex items-center text-brandGreen-600 font-medium">
                    Detayları Gör
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-brandOrange-500 to-brandOrange-600 rounded-2xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Tüm Menümüzü Keşfedin</h2>
          <p className="text-xl text-cream-200 mb-8">
            Daha fazla lezzet için tam menümüze göz atın
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu/cafe"
              className="inline-flex items-center bg-white text-brandOrange-600 px-8 py-3 rounded-lg font-semibold hover:bg-cream-100 transition-colors duration-200"
            >
              <Coffee className="mr-2 h-5 w-5" />
              Cafe Menüsü
            </Link>
            <Link
              href="/menu/restaurant"
              className="inline-flex items-center bg-brandGreen-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brandGreen-700 transition-colors duration-200"
            >
              <Utensils className="mr-2 h-5 w-5" />
              Restoran Menüsü
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}