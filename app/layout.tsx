import type { Metadata } from 'next';
import './globals.css';
import './dc-theme.css';
import './dc-hero-compact.css';
import './standard-compact.css';
import './fix-hero-flow.css';
import './wellness-visual-lock.css';
import './wellness-3d.css';
import HeroShowcase from './components/HeroShowcase';
export const metadata: Metadata = { title: 'DC | Daily Consumables', description: 'YOUR DAILY FLEX.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><HeroShowcase />{children}</body></html>; }
