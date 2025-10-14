# bacco - Netlify Deployment Guide

## 🚀 Netlify'da Canlıya Alma Adımları

### 1. GitHub'a Kod Yükleme
```bash
# Git repository oluştur (eğer yoksa)
git init
git add .
git commit -m "Initial commit"

# GitHub'da repository oluştur ve bağla
git remote add origin https://github.com/username/bacco.git
git branch -M main
git push -u origin main
```

### 2. Netlify'da Site Oluşturma

#### Yöntem 1: GitHub ile Otomatik Deploy
1. [Netlify](https://netlify.com) hesabına giriş yap
2. "New site from Git" tıkla
3. GitHub'ı seç ve repository'yi bağla
4. Build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
   - **Node version**: 18

#### Yöntem 2: Manuel Deploy
1. Netlify'da "Deploy manually" seç
2. `.next` klasörünü sıkıştır ve yükle
3. Site URL'ini al

### 3. Environment Variables Ayarlama

Netlify Dashboard > Site Settings > Environment Variables:

```
NEXT_PUBLIC_SITE_URL=https://your-site-name.netlify.app
NEXT_PUBLIC_SITE_NAME=bacco
```

### 4. Domain Ayarlama (Opsiyonel)

1. Netlify Dashboard > Domain Management
2. Custom domain ekle
3. DNS ayarlarını yapılandır

### 5. Form Handling (İletişim Formu)

İletişim formu için Netlify Forms kullan:

```html
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <!-- form fields -->
</form>
```

### 6. Analytics (Opsiyonel)

Google Analytics eklemek için:
1. Google Analytics hesabı oluştur
2. Tracking ID'yi al
3. Environment variable olarak ekle: `NEXT_PUBLIC_GA_ID`

### 7. Performance Optimizasyonu

- **Image Optimization**: Next.js otomatik olarak yapar
- **Caching**: `netlify.toml` dosyasında ayarlandı
- **CDN**: Netlify otomatik CDN sağlar

### 8. SSL Sertifikası

Netlify otomatik olarak Let's Encrypt SSL sertifikası sağlar.

## 📁 Önemli Dosyalar

- `netlify.toml`: Netlify konfigürasyonu
- `next.config.ts`: Next.js konfigürasyonu
- `public/sw.js`: PWA service worker
- `src/app/manifest.ts`: PWA manifest

## 🔧 Troubleshooting

### Build Hatası
- Node.js versiyonunu 18 olarak ayarla
- `npm install` komutunu çalıştır
- Environment variables'ları kontrol et

### 404 Hatası
- `netlify.toml` dosyasındaki redirect kurallarını kontrol et
- Next.js routing yapısını doğrula

### PWA Çalışmıyor
- Service worker dosyasının yüklendiğini kontrol et
- Manifest dosyasının doğru olduğunu doğrula

## 📞 Destek

Herhangi bir sorun için:
- Netlify Docs: https://docs.netlify.com
- Next.js Docs: https://nextjs.org/docs
