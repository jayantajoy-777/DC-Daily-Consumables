import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'DC | Daily Consumables',
  description: 'YOUR DAILY FLEX. Plant-based daily consumables.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
