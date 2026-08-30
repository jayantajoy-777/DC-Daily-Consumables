import type { Metadata } from 'next';
import './globals.css';
import './dc-theme.css';
import './dc-hero-compact.css';
import './standard-compact.css';
import './wellness-visual-lock.css';
import './wellness-3d.css';
import './next-portion.css';
import './dc-standard-section.css';
import './force-home-order.css';
import './dc-target-section.css';

export const metadata: Metadata = { title: 'DC | Daily Consumables', description: 'YOUR DAILY FLEX.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
