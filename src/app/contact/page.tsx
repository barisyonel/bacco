import type { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'İletişim | bacco',
  description: 'Bacco ile iletişime geçin. Adres, telefon, e-posta ve çalışma saatleri bilgileri.',
  openGraph: {
    title: 'İletişim | bacco',
    description: 'Bacco ile iletişime geçin. Adres, telefon, e-posta ve çalışma saatleri bilgileri.',
    type: 'website',
  },
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactClient />;
}
