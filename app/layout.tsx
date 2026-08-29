import type { Metadata } from 'next';
import './globals.css';
import './dc-theme.css';
import HeroSlideshow from './components/HeroSlideshow';
export const metadata: Metadata = { title: 'DC | Daily Consumables', description: 'YOUR DAILY FLEX.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}<HeroSlideshow /></body></html>; }
