import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'bacco',
    short_name: 'bacco',
    description: 'Premium kahve ve restoran deneyimi',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#008000',
    icons: [
      {
        src: '/icons/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icons/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}


