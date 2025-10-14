export type MenuCategoryId = 'restaurant' | 'cafe';

export type MenuItem = {
  id: number;
  name: string;
  description: string;
  category: MenuCategoryId;
  image: string;
  popular?: boolean;
  features?: string[];
  ingredients?: string[];
};

export const categories = [
  { id: 'restaurant', name: 'Restoran' },
  { id: 'cafe', name: 'Cafe' },
];

export const menuItems: MenuItem[] = [
  // CAFE MENÜSÜ - 10 ÜRÜN
  { id: 1, name: 'Espresso', description: 'İtalyan tarzı yoğun ve aromalı kahve', category: 'cafe', image: '/images/espresso.svg', popular: true, features: ['Tek shot', 'Yoğun aroma', 'Hızlı servis'], ingredients: ['Arabica çekirdek', 'Su'] },
  { id: 2, name: 'Cappuccino', description: 'Espresso, sıcak süt ve süt köpüğü', category: 'cafe', image: '/images/cappuccino.svg', popular: true, features: ['Dengeli gövde', 'Kremamsı doku', 'Yoğun köpük'], ingredients: ['Espresso', 'Süt', 'Süt köpüğü'] },
  { id: 3, name: 'Latte', description: 'Espresso ve buharda ısıtılmış süt', category: 'cafe', image: '/images/latte.svg', features: ['Yumuşak içim', 'Büyük porsiyon', 'Süt bazlı'], ingredients: ['Espresso', 'Süt'] },
  { id: 4, name: 'Cold Brew', description: 'Soğuk demleme kahve', category: 'cafe', image: '/images/cold-brew.svg', features: ['12-18 saat demleme', 'Düşük asidite', 'Soğuk servis'], ingredients: ['Öğütülmüş kahve', 'Su', 'Buz'] },
  { id: 5, name: 'Americano', description: 'Espresso ve sıcak su karışımı', category: 'cafe', image: '/images/americano.svg', features: ['Hafif içim', 'Uzun süre sıcak', 'Düşük kalori'], ingredients: ['Espresso', 'Sıcak su'] },
  { id: 6, name: 'Mocha', description: 'Çikolatalı espresso ve süt', category: 'cafe', image: '/images/mocha.svg', popular: true, features: ['Çikolata aroması', 'Tatlı içim', 'Kremalı doku'], ingredients: ['Espresso', 'Süt', 'Çikolata şurubu', 'Krema'] },
  { id: 7, name: 'Macchiato', description: 'Espresso üzerine süt köpüğü', category: 'cafe', image: '/images/macchiato.svg', features: ['Güçlü kahve tadı', 'Hafif süt dokunuşu', 'Sanatsal sunum'], ingredients: ['Espresso', 'Süt köpüğü'] },
  { id: 8, name: 'Flat White', description: 'Avustralya tarzı düz beyaz kahve', category: 'cafe', image: '/images/flat-white.svg', features: ['İnce süt köpüğü', 'Dengeli lezzet', 'Modern sunum'], ingredients: ['Espresso', 'Mikro köpük süt'] },
  { id: 9, name: 'Türk Kahvesi', description: 'Geleneksel Türk tarzı kahve', category: 'cafe', image: '/images/turkish-coffee.svg', popular: true, features: ['Geleneksel demleme', 'Koyu kıvam', 'Lokum ile servis'], ingredients: ['Öğütülmüş kahve', 'Su', 'Şeker'] },
  { id: 10, name: 'Filtre Kahve', description: 'Drip coffee makinesi ile demlenen kahve', category: 'cafe', image: '/images/filter-coffee.svg', features: ['Temiz içim', 'Orta gövde', 'Uzun süre sıcak'], ingredients: ['Öğütülmüş kahve', 'Filtre kağıdı', 'Su'] },

  // RESTAURANT MENÜSÜ - 10 ÜRÜN
  { id: 11, name: 'Akdeniz Salata', description: 'Zeytin, domates, salatalık ve beyaz peynir ile', category: 'restaurant', image: '/images/med-salad.svg', popular: true, features: ['Hafif ve ferah', 'Zeytinyağlı sos', 'Vejetaryen uyumlu'], ingredients: ['Domates', 'Salatalık', 'Yeşillik', 'Siyah zeytin', 'Beyaz peynir', 'Zeytinyağı', 'Limon'] },
  { id: 12, name: 'Izgara Tavuk', description: 'Izgara tavuk göğsü, pilav ve mevsim salata', category: 'restaurant', image: '/images/grilled-chicken.svg', features: ['Izgarada mühürleme', 'Yüksek protein', 'Glutensiz'], ingredients: ['Tavuk göğsü', 'Zeytinyağı', 'Baharat karışımı', 'Pilav', 'Mevsim yeşillikleri'] },
  { id: 13, name: 'Makarna Alfredo', description: 'Kremalı parmesan soslu makarna', category: 'restaurant', image: '/images/alfredo-pasta.svg', features: ['Kremalı sos', 'Parmesan aroması', 'Doyurucu'], ingredients: ['Makarna', 'Tereyağı', 'Krema', 'Parmesan', 'Sarımsak', 'Karabiber'] },
  { id: 14, name: 'Cheesecake', description: 'Krem peynirli klasik cheesecake', category: 'restaurant', image: '/images/cheesecake.svg', features: ['Klasik New York tarzı', 'Kıtır taban', 'Kremamsı doku'], ingredients: ['Krem peynir', 'Şeker', 'Yumurta', 'Tereyağı', 'Bisküvi taban', 'Vanilya'] },
  { id: 15, name: 'Klasik Hamburger', description: 'Alevde ızgara dana köfte, taze marul ve domates ile', category: 'restaurant', image: '/images/classic-burger.svg', popular: true, features: ['Alevde ızgara', 'Taze günlük ekmek', 'Ev yapımı sos'], ingredients: ['Dana köfte', 'Hamburger ekmeği', 'Marul', 'Domates', 'Soğan', 'Turşu', 'Burger sos'] },
  { id: 16, name: 'Cheeseburger', description: 'Erimiş cheddar peynirli klasik burger', category: 'restaurant', image: '/images/cheeseburger.svg', features: ['Çedar peynir', 'Dengeli lezzet', 'Hızlı servis'], ingredients: ['Dana köfte', 'Cheddar', 'Hamburger ekmeği', 'Marul', 'Domates', 'Turşu', 'Burger sos'] },
  { id: 17, name: 'Double Burger', description: 'Çift köfte ile ekstra doyurucu burger', category: 'restaurant', image: '/images/double-burger.svg', features: ['Çift köfte', 'Protein zengini', 'Doyurucu porsiyon'], ingredients: ['Dana köfte', 'Dana köfte', 'Hamburger ekmeği', 'Cheddar', 'Soğan', 'Turşu', 'Özel sos'] },
  { id: 18, name: 'Vejetaryen Burger', description: 'Nohut ve sebze köfteli hafif seçenek', category: 'restaurant', image: '/images/veggie-burger.svg', features: ['Vejetaryen uyumlu', 'Lif açısından zengin', 'Hafif'], ingredients: ['Nohut köfte', 'Tam buğday ekmeği', 'Avokado', 'Roka', 'Domates', 'Soğan', 'Yoğurtlu sos'] },
  { id: 19, name: 'BBQ Burger', description: 'Dumanlı barbekü soslu burger', category: 'restaurant', image: '/images/bbq-burger.svg', features: ['BBQ sos', 'Karamelize soğan', 'Dumanlı lezzet'], ingredients: ['Dana köfte', 'Hamburger ekmeği', 'BBQ sos', 'Karamelize soğan', 'Turşu', 'Cheddar'] },
  { id: 20, name: 'Klasik Tost', description: 'Kaşar peynirli sıcak tost', category: 'restaurant', image: '/images/classic-toast.svg', popular: true, features: ['Sıcak servis', 'Ergimiş peynir', 'Kıtır ekmek'], ingredients: ['Beyaz ekmek', 'Kaşar peyniri', 'Tereyağı'] },
];

export function getPopularItems(): MenuItem[] {
  return menuItems.filter((i) => i.popular);
}

export function getItemById(id: number): MenuItem | undefined {
  return menuItems.find((i) => i.id === id);
}

