import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollWrapper from "./SmoothScrollWrapper";
import { DM_Sans } from 'next/font/google';
const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['200', '300', '400', '500', '700'], // Include only the weights you need
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
    <html lang="en" dir="ltr" className={dmSans.className}>
      <body className="antialiased">
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
      </body>
    </html>
  );
}
