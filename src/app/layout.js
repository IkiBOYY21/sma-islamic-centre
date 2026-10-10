import { Manrope, Instrument_Serif } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

const sans = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-display",
});

export const metadata = {
  title: {
    default: "SMA Islamic Centre Tangerang",
    template: "%s | SMA Islamic Centre",
  },
  description:
    "Website profil SMA Islamic Centre Tangerang - Ilmu Amaliah, Amal Ilmiah.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${sans.variable} ${display.variable}`}>
      <body className="overflow-x-hidden font-sans antialiased">
        <Cursor />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
