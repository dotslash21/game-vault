import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Game Vault',
  description: 'A collection of fun browser-based mini-games',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
