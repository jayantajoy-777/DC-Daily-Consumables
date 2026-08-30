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
import HeroShowcase from './components/HeroShowcase';

export const metadata: Metadata = { title: 'DC | Daily Consumables', description: 'YOUR DAILY FLEX.' };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>
    <HeroShowcase />
    <style>{`
      /* Keep the legacy CSS hero hidden. The uploaded visual banner is positioned
         by HeroShowcase immediately after the Shop By Need section. */
      body{position:relative}
      body > main > section.hero{display:none!important}
      body > .dc-showcase{position:relative!important;top:auto!important;left:auto!important;right:auto!important}
      body > main > section.wellness-strip{margin-top:12px!important;margin-bottom:20px!important}
    `}</style>
    {children}
  </body></html>;
}
