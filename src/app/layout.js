import './globals.css'
import { Inter } from 'next/font/google';
import data from './assets/data/portfolio.json';
import { AOSInit } from './components/Aos';

const inter = Inter({ subsets: ['latin'] })

const useClass = [
  inter.className,
  '!w-[100vw]',
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Syed Ahmed Haider",
    "jobTitle": "Cloud & AI Systems Architect",
    "url": "https://syedahmedhaidershah.com",
    "sameAs": [
      "https://github.com/syedahmedhaidershah",
      "https://www.linkedin.com/in/syedahmedhaidershah/"
    ],
    "knowsAbout": [
      "Agentic AI",
      "Autonomous Agents",
      "Model Context Protocol",
      "Control Planes",
      "Distributed Systems",
      "Cloud Architecture",
      "Kubernetes",
      "DevOps",
      "Rust",
      "TypeScript"
    ]
  };

  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://syedahmedhaidershah.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={useClass}>{children}</body>
      <AOSInit />
    </html>
  )
}
