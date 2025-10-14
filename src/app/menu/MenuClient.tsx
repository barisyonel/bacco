'use client';

import { useMemo, useState } from 'react';
import { Coffee, Search, Filter, ArrowUpDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import type { MenuItem } from '@/data/menu';

type Props = {
  baseCategories: { id: string; name: string }[];
  items: MenuItem[];
};

export default function MenuClient({ baseCategories, items }: Props) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'popular' | 'az' | 'za'>('popular');

  const categories = [
    { id: 'all', name: 'Tümü' },
    ...baseCategories,
  ];

  const filteredItems = useMemo(() => {
    const base = items.filter(item => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
    if (sortBy === 'popular') {
      return [...base].sort((a, b) => Number(b.popular) - Number(a.popular) || a.name.localeCompare(b.name));
    }
    if (sortBy === 'az') {
      return [...base].sort((a, b) => a.name.localeCompare(b.name));
    }
    if (sortBy === 'za') {
      return [...base].sort((a, b) => b.name.localeCompare(a.name));
    }
    return base;
  }, [items, selectedCategory, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 text-sm" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-gray-600">
          <li>
            <Link href="/" className="hover:underline text-gray-600">Ana Sayfa</Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-gray-900 font-medium">Menü</li>
        </ol>
      </nav>
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Menümüz</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              En taze malzemelerle hazırlanan lezzetli kahve ve yiyecek seçeneklerimizi keşfedin
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Ürün ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <ArrowUpDown className="h-5 w-5 text-gray-400" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              >
                <option value="popular">Popüler</option>
                <option value="az">A → Z</option>
                <option value="za">Z → A</option>
              </select>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-amber-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-amber-50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <button
            onClick={() => setSelectedCategory('restaurant')}
            className={`group relative overflow-hidden rounded-2xl border ${selectedCategory==='restaurant' ? 'border-amber-600' : 'border-gray-200'} bg-gradient-to-br from-orange-50 to-amber-100 p-8 text-left transition-transform hover:-translate-y-0.5`}
          >
            <div className="absolute inset-0 opacity-10" />
            <div className="text-amber-700 font-semibold text-sm mb-2">Kategori</div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Restoran</div>
            <div className="text-gray-600">Burgerler, ana yemekler, tatlılar ve daha fazlası</div>
          </button>
          <button
            onClick={() => setSelectedCategory('cafe')}
            className={`group relative overflow-hidden rounded-2xl border ${selectedCategory==='cafe' ? 'border-amber-600' : 'border-gray-200'} bg-gradient-to-br from-amber-50 to-orange-100 p-8 text-left transition-transform hover:-translate-y-0.5`}
          >
            <div className="absolute inset-0 opacity-10" />
            <div className="text-amber-700 font-semibold text-sm mb-2">Kategori</div>
            <div className="text-2xl font-bold text-gray-900 mb-2">Cafe</div>
            <div className="text-gray-600">Kahveler, soğuk demlemeler ve sıcak içecekler</div>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map(item => (
            <Link key={item.id} href={`/menu/${item.id}`} className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500">
              <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center relative">
                {item.image ? (
                  <Image src={item.image} alt={item.name} width={300} height={300} className="object-contain p-6" />
                ) : (
                  <Coffee className="h-16 w-16 text-amber-600" />
                )}
                {item.popular && (
                  <div className="absolute top-2 right-2 bg-amber-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                    Popüler
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                {Array.isArray(item.features) && item.features.length > 0 && (
                  <div className="mb-3">
                    <div className="text-xs font-semibold text-gray-900 mb-1">Özellikler</div>
                    <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                      {item.features.map((f, i) => (
                        <li key={i}>{f}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {Array.isArray(item.ingredients) && item.ingredients.length > 0 && (
                  <div>
                    <div className="text-xs font-semibold text-gray-900 mb-1">İçindekiler</div>
                    <div className="flex flex-wrap gap-2">
                      {item.ingredients.map((ing, i) => (
                        <span key={i} className="inline-block text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full border border-amber-200">
                          {IngCap(ing)}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Coffee className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Ürün bulunamadı</h3>
            <p className="text-gray-600">Arama kriterlerinizi değiştirerek tekrar deneyin.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function IngCap(text: string) {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

