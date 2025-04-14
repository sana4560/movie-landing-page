import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import ClientThemeProvider from './components/providers/ClientThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Movie Landing Page',
  description: 'A modern movie landing page built with Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ backgroundColor: '#000000', minHeight: '100vh' }}>
    
          <Header />
          {children}
          <Footer />
        
      </body>
    </html>
  )
}
