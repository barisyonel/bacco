import { Coffee, Heart, Award, Users, Clock, Globe } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hakkımızda | bacco',
  description: 'Bacco’nun hikayesi, misyonu, değerleri ve ekibi hakkında bilgi edinin.',
  openGraph: {
    title: 'Hakkımızda | bacco',
    description: 'Bacco’nun hikayesi, misyonu, değerleri ve ekibi hakkında bilgi edinin.',
    type: 'website',
  },
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  const values = [
    {
      icon: Coffee,
      title: 'Kaliteli Kahve',
      description: 'Dünyanın en kaliteli kahve çekirdeklerini kullanarak, her fincan kahvede mükemmel lezzet sunuyoruz.'
    },
    {
      icon: Heart,
      title: 'Sıcak Hizmet',
      description: 'Müşterilerimizi ailemiz gibi görüyor, onlara en iyi hizmeti sunmak için çalışıyoruz.'
    },
    {
      icon: Award,
      title: 'Uzmanlık',
      description: 'Yılların deneyimi ve uzmanlığımızla, kahve dünyasında fark yaratıyoruz.'
    },
    {
      icon: Users,
      title: 'Topluluk',
      description: 'Kahve severlerin buluşma noktası olarak, güçlü bir topluluk oluşturuyoruz.'
    }
  ];

  const stats = [
    { number: '15+', label: 'Yıllık Deneyim' },
    { number: '50K+', label: 'Mutlu Müşteri' },
    { number: '100+', label: 'Kahve Çeşidi' },
    { number: '5', label: 'Şube' }
  ];

  const team = [
    {
      name: 'Ahmet Yılmaz',
      position: 'Kurucu & Baş Barista',
      description: '15 yıllık kahve deneyimi ile mükemmel harmanlar yaratıyor.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Elif Kaya',
      position: 'Pastry Chef',
      description: 'Taze ve lezzetli tatlılarımızın yaratıcısı.',
      image: '/api/placeholder/200/200'
    },
    {
      name: 'Mehmet Demir',
      position: 'Genel Müdür',
      description: 'İşletmemizin günlük operasyonlarını yönetiyor.',
      image: '/api/placeholder/200/200'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hakkımızda
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              bacco olarak, 2010 yılından beri Türkiye'de premium kahve deneyimi sunuyoruz. 
              Her fincan kahvede mükemmellik arayışımız devam ediyor.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Hikayemiz</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  bacco, 2010 yılında Beşiktaş'ta küçük bir dükkan olarak kuruldu. 
                  Kurucumuz Ahmet Yılmaz'ın kahve tutkusu, bugün Türkiye'nin en sevilen 
                  kahve zincirlerinden birine dönüştü.
                </p>
                <p>
                  Başlangıçta sadece birkaç çeşit kahve sunarken, bugün 100'den fazla farklı 
                  kahve çeşidi ve harmanı ile müşterilerimize hizmet veriyoruz. Her kahve 
                  çekirdeğini özenle seçiyor, kavurma sürecini titizlikle takip ediyoruz.
                </p>
                <p>
                  Misyonumuz, sadece kahve satmak değil, kahve kültürünü yaymak ve 
                  müşterilerimize unutulmaz deneyimler yaşatmaktır.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8">
              <div className="aspect-square bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Coffee className="h-32 w-32 text-amber-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Değerlerimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              İş yapış şeklimizi belirleyen temel değerlerimiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Rakamlarla Biz</h2>
            <p className="text-xl text-amber-100">
              Başarılarımızı sayılarla gösteriyoruz
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-amber-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ekibimiz</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Kahve tutkusunu paylaşan deneyimli ekibimiz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-xl shadow-lg p-6">
                <div className="w-32 h-32 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-amber-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-amber-600 font-medium mb-2">{member.position}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-2xl p-8">
              <div className="aspect-square bg-white rounded-xl flex items-center justify-center shadow-lg">
                <Globe className="h-32 w-32 text-amber-600" />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Misyonumuz</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Dünyanın en kaliteli kahve çekirdeklerini kullanarak, müşterilerimize 
                  unutulmaz kahve deneyimleri sunmak. Her fincan kahvede mükemmellik 
                  arayışımız devam ediyor.
                </p>
                <p>
                  Sürdürülebilir tarım uygulamalarını destekleyerek, çiftçilerle doğrudan 
                  işbirliği yapıyor ve adil ticaret ilkelerini benimsiyoruz.
                </p>
                <p>
                  Kahve kültürünü yaymak ve toplumumuzda pozitif bir etki yaratmak 
                  için çalışıyoruz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
