import type { Metadata } from 'next';
import { Coffee, Clock, Thermometer, Droplets, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Demleme Rehberleri | bacco',
  description: 'Mükemmel kahve demleme teknikleri ve rehberleri. Espresso, French Press, V60 ve daha fazlası.',
  alternates: { canonical: '/brewing-guides' },
  openGraph: {
    title: 'Demleme Rehberleri | bacco',
    description: 'Mükemmel kahve demleme teknikleri ve rehberleri.',
    type: 'website',
  },
};

const guides = [
  {
    id: 'espresso',
    title: 'Espresso Demleme',
    description: 'Mükemmel espresso için adım adım rehber',
    icon: Coffee,
    difficulty: 'Orta',
    time: '5-10 dk',
    temperature: '90-95°C',
    steps: [
      'Kahve çekirdeklerini ince öğütün',
      'Portafilter\'ı 18g kahve ile doldurun',
      'Kahveyi düzgün şekilde sıkıştırın',
      'Makineyi 25-30 saniye çalıştırın',
      '30ml espresso elde edin'
    ]
  },
  {
    id: 'french-press',
    title: 'French Press',
    description: 'Klasik French Press ile demleme',
    icon: Filter,
    difficulty: 'Kolay',
    time: '4-5 dk',
    temperature: '95-98°C',
    steps: [
      'Su kaynatın ve 1 dakika bekleyin',
      'Kahveyi kaba öğütün (1:15 oran)',
      'Sıcak suyu ekleyin ve karıştırın',
      '4 dakika bekleyin',
      'Plunger\'ı yavaşça aşağı itin'
    ]
  },
  {
    id: 'v60',
    title: 'V60 Pour Over',
    description: 'Hario V60 ile hassas demleme',
    icon: Droplets,
    difficulty: 'Zor',
    time: '3-4 dk',
    temperature: '92-96°C',
    steps: [
      'Filtreyi V60\'a yerleştirin',
      'Kahveyi orta-ince öğütün',
      'Bloom için 50ml su ekleyin',
      '30 saniye bekleyin',
      'Dairesel hareketlerle su ekleyin'
    ]
  },
  {
    id: 'cold-brew',
    title: 'Cold Brew',
    description: 'Soğuk demleme tekniği',
    icon: Clock,
    difficulty: 'Kolay',
    time: '12-18 saat',
    temperature: 'Oda sıcaklığı',
    steps: [
      'Kahveyi kaba öğütün',
      '1:4 oranında soğuk su ekleyin',
      'Buzdolabında 12-18 saat bekletin',
      'Filtreleyin ve servis yapın',
      'Buz ile soğutun'
    ]
  }
];

export default function BrewingGuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-brandGreen-900 to-brandGreen-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Demleme Rehberleri</h1>
          <p className="text-xl text-cream-200 max-w-3xl mx-auto">
            Mükemmel kahve demleme tekniklerini öğrenin. Her yöntem için detaylı rehberler ve ipuçları.
          </p>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-600">
            <li><a href="/" className="hover:underline">Ana Sayfa</a></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Demleme Rehberleri</li>
          </ol>
        </nav>
      </div>

      {/* Guides Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <div key={guide.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-brandOrange-100 rounded-xl mr-4">
                      <Icon className="h-8 w-8 text-brandOrange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{guide.title}</h3>
                      <p className="text-gray-600 text-sm">{guide.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brandGreen-600">{guide.difficulty}</div>
                      <div className="text-xs text-gray-500">Zorluk</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-brandOrange-600">{guide.time}</div>
                      <div className="text-xs text-gray-500">Süre</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-amber-600">{guide.temperature}</div>
                      <div className="text-xs text-gray-500">Sıcaklık</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900 mb-2">Adımlar:</h4>
                    <ol className="space-y-2">
                      {guide.steps.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 bg-brandGreen-100 text-brandGreen-600 rounded-full flex items-center justify-center text-sm font-semibold mr-3">
                            {index + 1}
                          </span>
                          <span className="text-gray-700 text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-brandOrange-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Hangi Demleme Yöntemini Denemek İstiyorsunuz?</h2>
          <p className="text-xl text-cream-200 mb-8">
            Mağazalarımızda tüm demleme ekipmanlarını bulabilir, baristalarımızdan öğrenebilirsiniz.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-white text-brandOrange-600 px-8 py-3 rounded-lg font-semibold hover:bg-cream-100 transition-colors duration-200"
          >
            <Coffee className="mr-2 h-5 w-5" />
            Mağazalarımızı Ziyaret Edin
          </a>
        </div>
      </div>
    </div>
  );
}