import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Thermometer, Droplets, Coffee, ArrowRight, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Demleme Rehberleri',
  description: 'V60, Aeropress, French Press ile mükemmel kahve demleme teknikleri. Barista ipuçları ve adım adım rehberler.',
  openGraph: {
    title: 'Demleme Rehberleri | bacco',
    description: 'V60, Aeropress, French Press ile mükemmel kahve demleme teknikleri.',
  },
  alternates: { canonical: '/brewing-guides' },
};

const brewingMethods = [
  {
    id: 'v60',
    name: 'V60 Pour Over',
    description: 'Japon tarzı damla demleme tekniği ile temiz ve aromalı kahve',
    difficulty: 'Orta',
    time: '4-5 dk',
    temperature: '92-96°C',
    ratio: '1:16',
    image: '/images/v60-brewing.jpg',
    steps: [
      'Kahve çekirdeğini orta-ince öğütün (tuz tanesi büyüklüğünde)',
      'Filtreyi V60\'a yerleştirin ve sıcak su ile ıslatın',
      '30g kahve için 480ml su kullanın',
      '30 saniye bloom (ilk döküm) yapın',
      'Dairesel hareketlerle 3-4 turda dökümü tamamlayın',
      'Toplam demleme süresi 3-4 dakika olmalı'
    ],
    tips: [
      'Su sıcaklığını termometre ile kontrol edin',
      'Döküm hızını sabit tutun',
      'Kahve yatağını düz tutun'
    ]
  },
  {
    id: 'aeropress',
    name: 'AeroPress',
    description: 'Hızlı ve pratik demleme yöntemi ile yoğun aromalı kahve',
    difficulty: 'Kolay',
    time: '2-3 dk',
    temperature: '85-90°C',
    ratio: '1:12',
    image: '/images/aeropress-brewing.jpg',
    steps: [
      'Kahve çekirdeğini ince öğütün',
      'AeroPress\'e filtre kağıdı yerleştirin',
      '17g kahve için 200ml su kullanın',
      'Kahveyi AeroPress\'e koyun',
      '30 saniye bekleyin (bloom)',
      'Kalan suyu ekleyin ve 1 dakika bekleyin',
      'Yavaşça bastırarak demlemeyi tamamlayın'
    ],
    tips: [
      'Bastırma süresini 30-45 saniye tutun',
      'Çok hızlı bastırmayın',
      'Filtre kağıdını ıslatmayı unutmayın'
    ]
  },
  {
    id: 'french-press',
    name: 'French Press',
    description: 'Geleneksel demleme yöntemi ile tam gövdeli kahve',
    difficulty: 'Kolay',
    time: '4-5 dk',
    temperature: '90-95°C',
    ratio: '1:15',
    image: '/images/french-press-brewing.jpg',
    steps: [
      'Kahve çekirdeğini kalın öğütün (deniz tuzu büyüklüğünde)',
      'French Press\'e kahveyi koyun',
      '30g kahve için 450ml su kullanın',
      'Tüm suyu dökün ve karıştırın',
      '4 dakika bekleyin',
      'Yavaşça aşağı bastırarak filtreyi indirin',
      'Hemen servis yapın'
    ],
    tips: [
      'Çok ince öğütmeyin',
      '4 dakikadan fazla bekletmeyin',
      'Hemen servis yapın, bekletmeyin'
    ]
  }
];

export default function BrewingGuidesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Demleme Rehberleri
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Mükemmel kahve demlemek için barista teknikleri. V60, AeroPress ve French Press 
              ile evde profesyonel kalitede kahve hazırlayın.
            </p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <nav className="text-sm mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-gray-600">
            <li><Link href="/" className="hover:underline">Ana Sayfa</Link></li>
            <li className="text-gray-400">/</li>
            <li className="text-gray-900 font-medium">Demleme Rehberleri</li>
          </ol>
        </nav>
      </div>

      {/* Methods Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {brewingMethods.map((method) => (
            <div key={method.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              {/* Method Image */}
              <div className="aspect-video bg-gradient-to-br from-amber-100 to-orange-100 relative">
                <Image 
                  src={method.image} 
                  alt={method.name}
                  fill
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-gray-900">
                  {method.difficulty}
                </div>
              </div>

              {/* Method Content */}
              <div className="p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{method.name}</h2>
                <p className="text-gray-600 mb-6">{method.description}</p>

                {/* Method Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2 text-amber-600" />
                    <span>{method.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Thermometer className="h-4 w-4 mr-2 text-amber-600" />
                    <span>{method.temperature}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Droplets className="h-4 w-4 mr-2 text-amber-600" />
                    <span>{method.ratio}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Coffee className="h-4 w-4 mr-2 text-amber-600" />
                    <span>Orta-ince</span>
                  </div>
                </div>

                {/* Steps */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Adımlar</h3>
                  <ol className="space-y-2">
                    {method.steps.map((step, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <span className="bg-amber-100 text-amber-800 rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Tips */}
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="text-sm font-semibold text-amber-800 mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Barista İpuçları
                  </h4>
                  <ul className="space-y-1">
                    {method.tips.map((tip, index) => (
                      <li key={index} className="text-sm text-amber-700 flex items-start">
                        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Hazır mısınız?</h2>
            <p className="text-xl mb-6 opacity-90">
              En kaliteli kahve çekirdeklerimizle evde barista deneyimi yaşayın
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/menu/cafe" 
                className="bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center"
              >
                Kahve Çekirdekleri
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/contact" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200 flex items-center justify-center"
              >
                Barista Eğitimi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
