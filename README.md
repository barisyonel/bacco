# ☕ bacco - Premium Kahve ve Restoran Deneyimi

Modern Next.js 15 ile geliştirilmiş, responsive tasarıma sahip cafe ve restoran web sitesi. PWA desteği, SEO optimizasyonu ve kullanıcı dostu arayüz ile öne çıkan profesyonel bir proje.

## ✨ Özellikler

- 🚀 **Next.js 15** - En son React ve Next.js teknolojileri
- 📱 **PWA Desteği** - Offline çalışma ve app-like deneyim
- 🎨 **Modern Tasarım** - Tailwind CSS ile responsive ve şık arayüz
- 🔍 **SEO Optimizasyonu** - Meta tags, sitemap, JSON-LD structured data
- ⚡ **Performans** - Image optimization, lazy loading, ISR
- 📊 **Analytics Ready** - Google Analytics entegrasyonu hazır
- 🌐 **Çoklu Dil** - Türkçe içerik ve i18n desteği

## 🏗️ Teknoloji Stack

- **Framework**: Next.js 15 + React 19
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **PWA**: Service Worker + Web App Manifest
- **Deployment**: Netlify ready

## 📁 Proje Yapısı

```
bacco/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── menu/           # Menü sayfaları
│   │   ├── blog/           # Blog sayfaları
│   │   └── manifest.ts     # PWA manifest
│   ├── components/         # React bileşenleri
│   ├── data/              # Veri dosyaları
│   └── middleware.ts       # Next.js middleware
├── public/                # Statik dosyalar
│   ├── images/           # Görseller
│   ├── icons/            # PWA ikonları
│   └── sw.js             # Service worker
├── netlify.toml          # Netlify konfigürasyonu
└── README-DEPLOYMENT.md  # Deployment rehberi
```

## 🚀 Kurulum

```bash
# Repository'yi klonla
git clone https://github.com/username/bacco.git
cd bacco

# Bağımlılıkları yükle
npm install

# Development server'ı başlat
npm run dev

# Production build
npm run build
npm run start
```

## 🌐 Canlı Demo

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site-name)

**Demo URL**: https://your-site-name.netlify.app

## 📱 Sayfalar

- **Ana Sayfa** - Hero section, best-sellers, newsletter
- **Menü** - Restoran ve cafe kategorileri
- **Blog** - Kahve rehberleri ve haberler
- **Demleme Rehberleri** - V60, AeroPress, French Press
- **Hakkımızda** - Şirket hikayesi ve değerler
- **İletişim** - Form, harita ve şube bilgileri

## 🎨 Tasarım Sistemi

### Renk Paleti
- **Yeşil**: `#008000` (Ana marka rengi)
- **Turuncu**: `#ff8800` (Vurgu rengi)
- **Krem**: `#e4e4d9` (Arka plan tonu)

### Tipografi
- **Başlık**: Inter font family
- **İçerik**: System font stack

## 🔧 Konfigürasyon

### Environment Variables
```env
NEXT_PUBLIC_SITE_URL=https://your-site-name.netlify.app
NEXT_PUBLIC_SITE_NAME=bacco
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Netlify Deployment
Detaylı deployment rehberi için `README-DEPLOYMENT.md` dosyasına bakın.

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, SEO, Accessibility)
- **Core Web Vitals**: Optimized
- **Bundle Size**: Optimized with tree shaking
- **Image Optimization**: Next.js Image component

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 📞 İletişim

- **Website**: https://bacco.com
- **Email**: info@bacco.com
- **GitHub**: [@bacco](https://github.com/bacco)

## 🙏 Teşekkürler

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Lucide](https://lucide.dev/) - Icon library
- [Netlify](https://netlify.com/) - Hosting platform

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!