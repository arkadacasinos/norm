import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://normcasino.vercel.app/'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Norm Casino: официальный сайт, зеркало и онлайн-игры без лишней суеты',
  description: 'Norm Casino — понятный гид по официальному сайту, рабочему зеркалу и онлайн-играм. Проверяйте адрес, читайте условия, выбирайте безопасный формат и сохраняйте контроль бюджета.',
  keywords: ['norm casino', 'norm casino официальный сайт', 'norm casino зеркало', 'norm casino играть', 'норм казино онлайн'],
  alternates: { canonical: siteUrl },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large' } },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    siteName: 'Norm Casino',
    title: 'Norm Casino — официальный сайт и понятный гид',
    description: 'Практичный маршрут по Norm Casino: официальный адрес, зеркало, игры и ответственное использование.',
  },
  twitter: {
    card: 'summary',
    title: 'Norm Casino — официальный сайт и понятный гид',
    description: 'Проверка адреса, зеркало, онлайн-игры и правила ответственного подхода.',
  },
  other: {
    'format-detection': 'telephone=no',
    'theme-color': '#202722',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  colorScheme: 'light',
  themeColor: '#202722',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className="bg-background">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="author" content="Norm Casino" />
        <meta name="content-language" content="ru" />
      </head>
      <body>{children}</body>
    </html>
  )
}
