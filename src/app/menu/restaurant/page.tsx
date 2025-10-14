import type { Metadata } from 'next';
import { menuItems } from '@/data/menu';
import Link from 'next/link';
import Image from 'next/image';
import { Utensils, Salad, Sandwich } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Restoran Menüsü | bacco',
  description: 'Salatalar, hamburgerler, tostlar ve daha fazlası.',
  alternates: { canonical: '/menu/restaurant' },
  openGraph: { title: 'Restoran Menüsü | bacco', description: 'Salatalar, hamburgerler, tostlar ve daha fazlası.' }
};

export default function RestaurantMenuPage() {
  const items = menuItems.filter(m => m.category === 'restaurant');

  const groups: Record<string, { items: typeof items; icon: any; color: string }> = {
    'Salatalar': { 
      items: items.filter(i => i.name.toLowerCase().includes('salata')), 
      icon: Salad, 
      color: 'text-green-600' 
    },
    'Hamburgerler': { 
      items: items.filter(i => i.name.toLowerCase().includes('burger')), 
      icon: Sandwich, 
      color: 'text-orange-600' 
    },
    'Tostlar': { 
      items: items.filter(i => i.name.toLowerCase().includes('tost')), 
      icon: Sandwich, 
      color: 'text-amber-600' 
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-600">
            <li><Link href="/" className="hover:underline">Ana Sayfa</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/menu" className="hover:underline">Menü</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Restoran</li>
          </ol>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Restoran Menüsü</h1>

        <div className="space-y-16">
          {Object.entries(groups).map(([group, { items: groupItems, icon: Icon, color }]) => (
            groupItems.length > 0 && (
              <section key={group} className="relative">
                <div className="flex items-center mb-8">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 mr-4 ${color}`}>
                    {Icon && <Icon className="h-8 w-8" />}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900">{group}</h2>
                    <p className="text-gray-600 mt-1">{groupItems.length} çeşit</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {groupItems.map(item => (
                    <Link key={item.id} href={`/menu/${item.id}`} className="group block bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                      <div className="aspect-square bg-gradient-to-br from-orange-100 to-amber-100 flex items-center justify-center relative">
                        {item.image ? (
                          <Image src={item.image} alt={item.name} width={200} height={200} className="object-contain p-4 group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                          Icon && <Icon className="h-16 w-16 text-orange-600 group-hover:scale-110 transition-transform duration-300" />
                        )}
                        {item.popular && (
                          <div className="absolute top-3 right-3 bg-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            Popüler
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                        {Array.isArray(item.features) && item.features.length > 0 && (
                          <div className="space-y-2">
                            {item.features.slice(0, 2).map((f, i) => (
                              <div key={i} className="flex items-center text-xs text-gray-500">
                                <div className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2"></div>
                                {f}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )
          ))}
        </div>
      </div>
    </div>
  );
}

