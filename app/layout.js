import { Outfit, Ovo } from "next/font/google";
import Footer from "./components/Footer";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "Carna canil",
  description: "Uma coleção dos trabalhos dos quais mais me orgulho",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth bg-canilThemeRoxo text-textCanil">
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        <main>{children}</main>
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
