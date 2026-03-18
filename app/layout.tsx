import type { Metadata } from 'next'
import { Noto_Sans_JP, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from "@vercel/speed-insights/next";
import './globals.css'

export const metadata = {
  title: "個別学習戦略室 | 現役医学生による思考型の学習コーチング",
  description: "医学部合格を勝ち取った『思考の型』を伝授。国立大学の医学部生が、単なる知識ではなく『最短ルートの勉強法』を完全オンラインで指導します。",
  keywords: ["医学部受験", "学習コーチング", "勉強法", "医学部", "オンライン塾"],
  openGraph: {
    title: "個別学習戦略室",
    description: "医学部で培った『思考の型』を、君の武器に。",
    url: "https://online-juku-site.vercel.app/", 
    siteName: "個別学習戦略室",
    locale: "ja_JP",
    type: "website",
  },
};

const notoSansJP = Noto_Sans_JP({ 
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"]
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});

export const metadata: Metadata = {
  title: '個別学習戦略室 | 医学生コーチングサービス',
  description: '現役国立大学医学生による完全オンライン個別学習コーチング。医学部で培った思考の型を、あなたの武器に。',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${notoSansJP.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
