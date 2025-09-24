import type { Metadata } from "next";
import "./globals.css";
import SmoothScrollWrapper from "./SmoothScrollWrapper";

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
      <head>
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@200;300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <SmoothScrollWrapper>{children}</SmoothScrollWrapper>
      </body>
    </html>
  );
}
