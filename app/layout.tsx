import './globals.css';
import type { Metadata } from 'next';
import { inter, roboto_mono } from './font.ts'

export const metadata: Metadata = {
  title: "[Thomas Hand] - Optimising the web to the nth degree",
  description: "I've never been great at writing meta descriptions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}