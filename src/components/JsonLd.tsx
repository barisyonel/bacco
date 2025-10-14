import Script from 'next/script'

interface JsonLdProps {
  data: any
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <Script
      id="json-ld"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

// Restoran JSON-LD
export const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  "name": "bacco",
  "description": "Türkiye'nin en kaliteli kahve deneyimini yaşayın. Özel harmanlarımız, taze ürünlerimiz ve sıcak atmosferimizle sizi bekliyoruz.",
  "url": "https://bacco.com",
  "logo": "https://bacco.com/images/logo.png",
  "image": "https://bacco.com/images/og-image.jpg",
  "telephone": "+90 212 555 0123",
  "email": "info@bacco.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Merkez Mahallesi Atatürk Caddesi No: 123",
    "addressLocality": "Merkez",
    "addressRegion": "Amasya",
    "postalCode": "05000",
    "addressCountry": "TR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "40.651",
    "longitude": "36.333"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "07:00",
      "closes": "23:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "08:00",
      "closes": "24:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Sunday",
      "opens": "08:00",
      "closes": "22:00"
    }
  ],
  "servesCuisine": ["Turkish", "International", "Coffee"],
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Debit Card"],
  "currenciesAccepted": "TRY",
  "hasMenu": "https://bacco.com/menu",
  "sameAs": [
    "https://www.facebook.com/bacco",
    "https://www.instagram.com/bacco",
    "https://www.twitter.com/bacco"
  ]
}

// Ürün JSON-LD
export const productJsonLd = (product: any) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": product.name,
  "description": product.description,
  "image": product.image ? `https://bacco.com${product.image}` : undefined,
  "brand": {
    "@type": "Brand",
    "name": "bacco"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "TRY",
    "seller": {
      "@type": "Organization",
      "name": "bacco"
    }
  },
  "category": product.category === 'cafe' ? 'Beverage' : 'Food'
})

// Breadcrumb JSON-LD
export const breadcrumbJsonLd = (items: Array<{name: string, url: string}>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": `https://bacco.com${item.url}`
  }))
})
