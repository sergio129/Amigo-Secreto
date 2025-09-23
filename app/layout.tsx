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
      <body className={`${inter.className} d-flex flex-column min-vh-100`}>
        <SessionProvider>
          <main className="flex-grow-1">
            {children}
          </main>
        </SessionProvider>
        
        {/* Footer */}
        <footer className="bg-light mt-auto py-4">
          <div className="container">
            <div className="row text-center">
              <div className="col-12">
                <h6 className="text-muted mb-2">🎁 Amigo Secreto</h6>
                <p className="text-muted small mb-2">¿Necesitas ayuda o tienes preguntas?</p>
                <div className="d-flex justify-content-center gap-4">
                  <a href="mailto:sanayaromero62@gmail.com" className="text-decoration-none text-muted">
                    ✉️ sanayaromero62@gmail.com
                  </a>
                  <span className="text-muted">|</span>
                  <a href="tel:3103904286" className="text-decoration-none text-muted">
                    📱 310 390 4286
                  </a>
                </div>
                <p className="text-muted small mt-2">© 2025 Amigo Secreto - Todos los derechos reservados</p>
              </div>
            </div>
          </div>
        </footer>
        
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
      </body>
    </html>
  )
}