import Navbar from '@components/navigation/navbar/navbar'
import Footer from '@components/navigation/footer/footer'
import '@styles/global-styles.css'
import { Inter } from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: 'UBICON',
  description: 'Fly through the clouds with UBICON UNHAS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar className={inter.className}/>
          {children}
        <Footer className={inter.className}/>
      </body>
    </html>
  )
}
