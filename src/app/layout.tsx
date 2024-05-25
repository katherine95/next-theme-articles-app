import type { Metadata } from 'next'
import { ReactNode } from 'react'
import './globals.css'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'
export const metadata: Metadata = {
  title: 'Article Reader',
  description: 'Application to read codecademy articles',
}

export default function RootLayout({ children }: { children: React.ReactNode}) {
  return(
    // <main>
    <html>
    <body>
    <Navigation/>
    {children}
    <Footer />
    </body>
    </html>
    // </main>
  )
}