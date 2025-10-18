'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Coffee, Droplets, GlassWater, Filter } from 'lucide-react';
import type { MenuItem } from '@/data/menu';

const GROUPS = [
  { label: 'Kahveler', matchers: ['espresso', 'latte', 'americano', 'cappuccino', 'filtre', 'cold brew', 'mocha', 'macchiato', 'flat white', 'türk'], icon: Coffee, color: 'text-amber-600' },
  { label: 'Soğuk İçecekler', matchers: ['soda', 'gazoz', 'limonata', 'iced', 'soğuk'], icon: Droplets, color: 'text-blue-600' },
  { label: 'Sular ve Diğer', matchers: ['su', 'water', 'çay', 'tea', 'milk', 'süt'], icon: GlassWater, color: 'text-green-600' },
];

const QUICK_FILTERS = [
  { id: 'all', label: 'Tümü', icon: Coffee },
  { id: 'espresso', label: 'Espresso Bazlı', icon: Coffee },
  { id: 'milk', label: 'Sütlü', icon: Droplets },
  { id: 'cold', label: 'Soğuk', icon: GlassWater },
  { id: 'decaf', label: 'Kafeinsiz', icon: Coffee },
];

type Props = {
  items: MenuItem[];
};

export default function CafeClient({ items }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeFilter, setActiveFilter] = useState('all');

  // URL parametrelerinden filtreyi yükle
  useEffect(() => {
    const filter = searchParams.get('filter');
    if (filter && QUICK_FILTERS.some(f => f.id === filter)) {
      setActiveFilter(filter);
    }
  }, [searchParams]);

  // Filtre değiştiğinde URL'yi güncelle
  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
    const params = new URLSearchParams(searchParams);
    if (filterId === 'all') {
      params.delete('filter');
    } else {
      params.set('filter', filterId);
    }
    router.push(`?${params.toString()}`, { scroll: false });
  };

  const groups: Record<string, { items: typeof items; icon: any; color: string }> = {};
  for (const g of GROUPS) {
    groups[g.label] = { 
      items: items.filter(i => g.matchers.some(m => i.name.toLowerCase().includes(m))), 
      icon: g.icon, 
      color: g.color 
    };
  }
  // Diğerleri
  const listedIds = new Set(Object.values(groups).flatMap(g => g.items).map(i => i.id));
  const others = items.filter(i => !listedIds.has(i.id));
  if (others.length) groups['Diğer İçecekler'] = { items: others, icon: Coffee, color: 'text-gray-600' };

  const filteredGroups = Object.entries(groups).filter(([_, { items: groupItems }]) => {
    if (activeFilter === 'all') return groupItems.length > 0;
    if (activeFilter === 'espresso') return groupItems.some(i => ['espresso', 'latte', 'cappuccino', 'mocha', 'macchiato', 'flat white'].some(m => i.name.toLowerCase().includes(m)));
    if (activeFilter === 'milk') return groupItems.some(i => ['latte', 'cappuccino', 'mocha', 'flat white'].some(m => i.name.toLowerCase().includes(m)));
    if (activeFilter === 'cold') return groupItems.some(i => ['cold brew', 'iced'].some(m => i.name.toLowerCase().includes(m)));
    if (activeFilter === 'decaf') return groupItems.some(i => i.name.toLowerCase().includes('kafeinsiz'));
    return groupItems.length > 0;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <nav className="text-sm mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-600">
            <li><Link href="/" className="hover:underline">Ana Sayfa</Link></li>
            <li className="text-gray-400">/</li>
            <li><Link href="/menu" className="hover:underline">Menü</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Cafe</li>
          </ol>
        </nav>
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cafe Menüsü</h1>

        {/* Quick Filters */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-gray-600" />
            <span className="text-sm font-medium text-gray-700">Hızlı Filtreler:</span>
          </div>
          <div className="flex flex-wrap gap-2">
              {QUICK_FILTERS.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => handleFilterChange(filter.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeFilter === filter.id
                      ? 'bg-amber-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 hover:bg-amber-50 border border-gray-200'
                  }`}
                >
                  <filter.icon className="h-4 w-4" />
                  {filter.label}
                </button>
              ))}
          </div>
        </div>

        <div className="space-y-16">
          {filteredGroups.map(([group, { items: groupItems, icon: Icon, color }]) => (
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
                      <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center relative">
                        {item.image ? (
                          <Image src={item.image} alt={item.name} width={200} height={200} className="object-contain p-4 group-hover:scale-110 transition-transform duration-300" />
                        ) : (
                          Icon && <Icon className="h-16 w-16 text-amber-600 group-hover:scale-110 transition-transform duration-300" />
                        )}
                        {item.popular && (
                          <div className="absolute top-3 right-3 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                            Popüler
                          </div>
                        )}
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">{item.name}</h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                        {Array.isArray(item.features) && item.features.length > 0 && (
                          <div className="space-y-2">
                            {item.features.slice(0, 2).map((f, i) => (
                              <div key={i} className="flex items-center text-xs text-gray-500">
                                <div className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2"></div>
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
