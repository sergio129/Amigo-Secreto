import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import SessionProvider from '@/components/SessionProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amigo Secreto',
  description: 'Selecciona tu nombre y descubre a quién debes regalar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" 
          rel="stylesheet"
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" 
          rel="stylesheet"
        />
        <link 
          rel="icon" 
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 36 36'%3E%3Ctext y='32' font-size='32'%3E%F0%9F%8E%81%3C/text%3E%3C/svg%3E"
        />
      </head>
      <body className={inter.className}>
        <SessionProvider>
          {children}
        </SessionProvider>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}