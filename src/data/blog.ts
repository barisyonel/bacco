export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string; // ISO
  image?: string;
  tags?: string[];
};

export const posts: BlogPost[] = [
  {
    slug: 'yeni-mevsim-menusu-yayinda',
    title: 'Yeni Mevsim Menümüz Yayında',
    excerpt: 'Mevsimin en taze lezzetleriyle hazırlanan yeni menümüzü keşfedin.',
    content:
      'Mevsimsel ürünlerle zenginleştirilmiş yeni menümüzde, taze öğeler ve özel harman kahveler bulunuyor. Restoran tarafında salatalar ve burgerler, cafe tarafında ise cold brew ve sütlü kahveler öne çıkıyor.',
    date: '2025-10-01T09:00:00.000Z',
    image: '/images/blog-seasonal.jpg',
    tags: ['duyuru', 'menü'],
  },
  {
    slug: 'cold-brew-nedir-nasil-yapilir',
    title: 'Cold Brew Nedir? Nasıl Yapılır?',
    excerpt: 'Düşük asiditeli, pürüzsüz içimli cold brew hakkında bilmeniz gerekenler.',
    content:
      'Cold brew, 12-18 saat boyunca soğuk suda demlenen kahvedir. Düşük asidite ve pürüzsüz içim sunar. Evde yapmak için orta-kalın öğütüm, soğuk su ve sabır yeterlidir.',
    date: '2025-09-20T10:00:00.000Z',
    image: '/images/blog-coldbrew.jpg',
    tags: ['rehber', 'cold brew'],
  },
  {
    slug: 'cekirdekten-fincana-bizim-yolculuk',
    title: "Çekirdekten Fincana: Bizim Yolculuk",
    excerpt: 'Sürdürülebilir tedarik ve kavurma yaklaşımımız.',
    content:
      'Bacco olarak, sürdürülebilir çiftçilerle çalışıyor, izlenebilir tedarik zinciri ve hassas kavurma profilleri benimsiyoruz. Amaç, her fincanda tutarlı kalite ve tat profili sunmak.',
    date: '2025-09-05T08:00:00.000Z',
    image: '/images/blog-journey.jpg',
    tags: ['hikaye', 'sürdürülebilirlik'],
  },
];

export function getAllPosts(): BlogPost[] {
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}


