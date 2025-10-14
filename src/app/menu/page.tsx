import type { Metadata } from 'next';
import { categories as baseCategories, menuItems } from '@/data/menu';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Menü | bacco',
  description: 'Restoran ve cafe menümüz: kahveler, burgerler, tatlılar ve daha fazlası.',
  openGraph: {
    title: 'Menü | bacco',
    description: 'Restoran ve cafe menümüz: kahveler, burgerler, tatlılar ve daha fazlası.',
    type: 'website',
  },
  alternates: { canonical: '/menu' },
};
export default function MenuPage() {
  const itemList = menuItems.map((m, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `${process.env.NEXT_PUBLIC_SITE_URL || ''}/menu/${m.id}`,
    name: m.name,
  }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: itemList,
  };

  return (
    <>
      <Script id="menu-itemlist-jsonld" type="application/ld+json">
        {JSON.stringify(jsonLd)}
      </Script>
      <div className="min-h-screen bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Menü</h1>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                İki ana bölümden birini seçin: Restoran veya Cafe
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Link href="/menu/restaurant" className="group relative overflow-hidden rounded-3xl border-2 border-orange-200 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-200 p-8 block hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-amber-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex-1">
                    <div className="text-orange-700 font-bold text-sm mb-3 uppercase tracking-wider">Restoran Bölümü</div>
                    <div className="text-4xl font-black text-gray-900 mb-4">Restoran</div>
                    <div className="text-gray-700 text-lg leading-relaxed mb-6">
                      Salatalar, Hamburgerler, Tostlar ve daha fazlası
                    </div>
                    <div className="flex items-center text-orange-700 font-bold group-hover:text-orange-800 transition-colors">
                      <span className="mr-2">Menüyü İncele</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="w-32 h-32 bg-white/80 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Image src="/images/burger.svg" alt="Restoran" width={80} height={80} className="drop-shadow-lg" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/60 rounded-xl p-3">
                    <div className="text-orange-700 font-bold text-sm">Salatalar</div>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3">
                    <div className="text-orange-700 font-bold text-sm">Hamburgerler</div>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3">
                    <div className="text-orange-700 font-bold text-sm">Tostlar</div>
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/menu/cafe" className="group relative overflow-hidden rounded-3xl border-2 border-amber-200 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-200 p-8 block hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex-1">
                    <div className="text-amber-700 font-bold text-sm mb-3 uppercase tracking-wider">Cafe Bölümü</div>
                    <div className="text-4xl font-black text-gray-900 mb-4">Cafe</div>
                    <div className="text-gray-700 text-lg leading-relaxed mb-6">
                      Kahveler, Sodalar, Su ve diğer içecekler
                    </div>
                    <div className="flex items-center text-amber-700 font-bold group-hover:text-amber-800 transition-colors">
                      <span className="mr-2">Menüyü İncele</span>
                      <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                  <div className="ml-6">
                    <div className="w-32 h-32 bg-white/80 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <Image src="/images/espresso.svg" alt="Cafe" width={80} height={80} className="drop-shadow-lg" />
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-white/60 rounded-xl p-3">
                    <div className="text-amber-700 font-bold text-sm">Kahveler</div>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3">
                    <div className="text-amber-700 font-bold text-sm">Sodalar</div>
                  </div>
                  <div className="bg-white/60 rounded-xl p-3">
                    <div className="text-amber-700 font-bold text-sm">İçecekler</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
