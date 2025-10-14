import type { Metadata } from 'next';
import { menuItems } from '@/data/menu';
import CafeClient from './CafeClient';

export const metadata: Metadata = {
  title: 'Cafe Menüsü | bacco',
  description: 'Kahveler, sodalar, su ve sıcak/soğuk içecekler.',
  alternates: { canonical: '/menu/cafe' },
  openGraph: { title: 'Cafe Menüsü | bacco', description: 'Kahveler, sodalar, su ve sıcak/soğuk içecekler.' }
};

export default function CafeMenuPage() {
  const items = menuItems.filter(m => m.category === 'cafe');
  
  return <CafeClient items={items} />;
}

