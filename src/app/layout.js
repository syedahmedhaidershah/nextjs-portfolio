import './globals.css'
import { Inter } from 'next/font/google';
import data from './assets/data/portfolio.json';
import { AOSInit } from './components/Aos';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: data.name,
  robots: "index,follow",
  description: data.metadata.description,
  keywords: data.metadata.keywords.join(","),
  author: data.name,
  viewport: "width=device-width, initial-scale=1.0",
  charset: "UTF-8"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
