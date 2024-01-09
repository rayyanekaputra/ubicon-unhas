import "@styles/global-styles.scss";
import Navbar from "@components/navigation/navbar/navbar";
import Footer from "@components/navigation/footer/footer";

import SplashScreen from "./splash";

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-object

export const metadata = {
  title: 'UBICON LAB',
  description: 'Ubiquitous Computing and Networking Lab',
  metadataBase: new URL('https://ubicon.unhas.ac.id'),

};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SplashScreen/>
        {children}
        <Navbar />
        <Footer />
      </body>
    </html>
  );
}
