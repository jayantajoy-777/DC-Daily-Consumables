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
      /* Restore the original DC visual slideshow between the header and homepage content. */
      body{position:relative}
      body > .dc-showcase{position:absolute!important;top:106px;left:0;right:0;width:min(100%,1400px);margin:0 auto!important;z-index:30}
      body > main > section.hero{display:none!important}
      body > main > section.wellness-strip{margin-top:500px!important}
      @media(max-width:760px){
        body > .dc-showcase{top:106px;width:100%}
        body > main > section.wellness-strip{margin-top:460px!important}
      }
    `}</style>
    {children}
  </body></html>;
}
