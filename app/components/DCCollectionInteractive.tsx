'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const products = [
  { name: 'DC ENERGY', sub: 'Daily Energy • Performance', tone: 'lime', note: '150 g', price: '₹699' },
  { name: 'DC WEIGHT GAIN', sub: 'Daily Weight Gainer', tone: 'amber', note: '150 g', price: '₹699' },
  { name: 'DC PLANT PROTEIN', sub: 'Plant Protein • Creatine', tone: 'lavender', note: '150 g', price: '₹699' },
  { name: 'DC PRE-WORKOUT', sub: 'Performance Fuel', tone: 'coral', note: '150 g', price: '₹699' },
  { name: 'DC HYDRATION', sub: 'Daily Hydration Formula', tone: 'blue', note: '150 g', price: '₹699' },
];

function Pouch({ product }: { product: typeof products[number] }) {
  return <div className={`dc-live-pouch ${product.tone}`}>
    <div><b>DC</b><span>DAILY CONSUMABLES</span></div><strong>{product.name.replace('DC ', '')}</strong><small>{product.sub}</small><i>✦</i><em>{product.note} • VEGAN</em>
  </div>;
}

export default function DCCollectionInteractive() {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  useEffect(() => {
    const grid = document.querySelector<HTMLElement>('#collection .product-grid');
    if (!grid) return;
    grid.classList.add('dc-live-grid'); setTarget(grid);
    return () => grid.classList.remove('dc-live-grid');
  }, []);
  if (!target) return null;
  const open = (name: string) => window.dispatchEvent(new CustomEvent('dc:open-product', { detail: name }));
  return createPortal(<>{products.map(product => <article key={product.name} className={`product-card dc-live-card ${product.tone}`} data-dc-product={product.name} tabIndex={0} role="button" onClick={() => open(product.name)} onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(product.name); } }}>
    <div className="product-art"><Pouch product={product} /></div><h3>{product.name}</h3><p>{product.sub}</p>
    <div className="price-row"><strong>{product.note}</strong><b>{product.price}</b></div>
    <button type="button" onClick={e => e.stopPropagation()}>ADD TO CART <span>🛒</span></button>
  </article>)}</>, target);
}
