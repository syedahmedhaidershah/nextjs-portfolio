import './globals.css'
import { Inter } from 'next/font/google';
import data from './assets/data/portfolio.json';
import { AOSInit } from './components/Aos';

const inter = Inter({ subsets: ['latin'] })

const useClass = [
  inter.className,
  'min-w-full',
  'overflow-x-hidden',
].join(' ');

export const viewport = {
  width: 'device-width',
  initialScale: '1.0',
}
 

export const metadata = {
  title: data.name,
  robots: "index,follow",
  description: data.metadata.description,
  keywords: data.metadata.keywords.join(","),
  author: data.name,
  charset: "UTF-8"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={useClass}>{children}</body>
      <AOSInit />
    </html>
  )
}
