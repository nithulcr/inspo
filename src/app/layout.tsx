import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import SmoothScrollWrapper from "./SmoothScrollWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: '  Simplify Business Setup in Dubai With INSPO',
  description: '  Simplify Business Setup in Dubai With INSPO',
  keywords: '',
  icons: {
    icon: '/favicon.png',       // path to your favicon file
    shortcut: '/favicon.png',   // for older browsers
    apple: '/favicon.png', // optional Apple touch icon
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr">
      <body className={`${dmSans.className} antialiased`}>
        <SmoothScrollWrapper>
          <Header />
          {children}
          <Footer />
        </SmoothScrollWrapper>
      </body>
    </html>
  );
}
