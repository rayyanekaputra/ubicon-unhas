import Navbar from '@components/navigation/navbar/navbar'
import Footer from '@components/navigation/footer/footer'
import '@styles/global-styles.css'


export const metadata = {
  title: 'UBICON',
  description: 'Fly through the clouds with UBICON UNHAS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
          {children}
        <Footer/>
      </body>
    </html>
  )
}
