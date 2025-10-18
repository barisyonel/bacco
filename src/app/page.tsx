import Image from 'next/image';
import Link from 'next/link';
import { Coffee, Clock, MapPin, Star, ArrowRight, Heart } from 'lucide-react';
import { getPopularItems } from '@/data/menu';
import JsonLd, { restaurantJsonLd } from '@/components/JsonLd';

export default function Home() {
  const popular = getPopularItems().slice(0, 6);

  const features = [
    {
      icon: Coffee,
      title: 'Premium Kahve',
      description: 'Dünyanın en kaliteli kahve çekirdeklerini kullanıyoruz'
    },
    {
      icon: Clock,
      title: '7/24 Hizmet',
      description: 'Haftanın her günü sizlere hizmet veriyoruz'
    },
    {
      icon: Heart,
      title: 'Sıcak Atmosfer',
      description: 'Rahat ve konforlu bir ortamda kahve keyfi'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-brandGreen-900 to-brandGreen-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Premium Kahve
                <span className="text-amber-300 block">Deneyimi</span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Türkiye'nin en kaliteli kahve deneyimini yaşayın. Özel harmanlarımız, 
                taze ürünlerimiz ve sıcak atmosferimizle sizi bekliyoruz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/menu" 
                  className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Menüyü İncele
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="/contact" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-brandGreen-800 transition-colors duration-200 flex items-center justify-center"
                >
                  <MapPin className="mr-2 h-5 w-5" />
                  Konumumuz
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-cream-100 rounded-2xl shadow-2xl p-8">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 rounded-xl flex items-center justify-center">
                  <Coffee className="h-32 w-32 text-amber-600" />
                </div>
              </div>
              <div className="absolute -top-4 -right-4 bg-amber-600 text-white p-4 rounded-full">
                <Star className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-br from-brandGreen-800 to-brandGreen-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Neden Bizi Tercih Etmelisiniz?</h2>
            <p className="text-lg text-cream-200 max-w-2xl mx-auto">
              Kalite, lezzet ve hizmet anlayışımızla fark yaratıyoruz
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300">
                <div className="bg-brandOrange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-cream-200">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers Preview */}
      <section className="py-16 bg-brandGreen-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">En Çok Tercih Edilenler</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">Misafirlerimizin favorilerini keşfedin</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popular.map((item) => (
              <Link key={item.id} href={`/menu/${item.id}`} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  {item.image ? (
                    <Image src={item.image} alt={item.name} width={300} height={300} className="object-contain p-6" />
                  ) : (
                    <Coffee className="h-16 w-16 text-amber-600" />
                  )}
                </div>
                <div className="p-6">
                  <div className="text-sm text-amber-600 font-medium mb-2">{item.category === 'cafe' ? 'Cafe' : 'Restoran'}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/best-sellers" 
              className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
            >
              Tümünü Gör
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Stripe */}
      <section className="py-12 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-brandGreen-900 p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Yeni ürün ve kampanyaları kaçırmayın</h3>
            <p className="text-white/80 mb-6">Abone olun, ilk siz haberdar olun</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <input type="email" placeholder="E-posta adresiniz"
                className="px-4 py-3 rounded-lg bg-white text-gray-900 w-full sm:w-80" />
              <button className="btn-primary">Abone Ol</button>
            </div>
          </div>
        </div>
      </section>

      {/* Mağazalarımız şeridi */}
      <section className="py-12 bg-brandGreen-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Mağazalarımız</h3>
              <p className="text-white/80">Size en yakın bacco şubesini bulun ve ziyaret edin.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full lg:w-auto">
              <div className="rounded-xl bg-brandGreen-800 p-4 text-white/90">
                <div className="font-semibold">Merkez / Amasya</div>
                <div className="text-sm text-white/70">Atatürk Cd. No:123</div>
              </div>
              <div className="rounded-xl bg-brandGreen-800 p-4 text-white/90">
                <div className="font-semibold">Beşiktaş / İstanbul</div>
                <div className="text-sm text-white/70">Barbaros Blv. No:45</div>
              </div>
              <div className="rounded-xl bg-brandGreen-800 p-4 text-white/90">
                <div className="font-semibold">Kadıköy / İstanbul</div>
                <div className="text-sm text-white/70">Bahariye Cd. No:22</div>
              </div>
            </div>
            <Link href="/contact" className="btn-secondary">Haritada Gör</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Kahve Keyfinizi Bugün Başlatın
          </h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            En kaliteli kahve deneyimini yaşamak için hemen ziyaret edin veya online sipariş verin
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-amber-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Ziyaret Edin
            </Link>
            <Link 
              href="/menu" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-amber-600 transition-colors duration-200"
            >
              Online Sipariş
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Blogumuzdan Son Yazılar</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Kahve dünyasından en güncel haberler ve rehberler</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`} 
                className="block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200 group"
                aria-label={`${post.title} blog yazısını oku`}
              >
                <div className="aspect-video relative bg-gradient-to-br from-brandOrange-100 to-brandOrange-200">
                  {post.image ? (
                    <Image 
                      src={post.image} 
                      alt={post.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-300" 
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <Coffee className="h-16 w-16 text-brandOrange-600" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-brandOrange-600">
                    Blog
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-brandOrange-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-amber-600 font-medium">
                      {new Date(post.date).toLocaleDateString('tr-TR')}
                    </div>
                    <div className="text-brandOrange-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                      Devamını Oku →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center bg-brandOrange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-brandOrange-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brandOrange-500 focus:ring-offset-2"
              aria-label="Tüm blog yazılarını görüntüle"
            >
              Tüm Blog Yazılarını Gör
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
