'use client';

import { useMemo, useState } from 'react';

type Product = {
  name: string;
  sub: string;
  tone: string;
  price: string;
  note: string;
};

const collectionProducts: Product[] = [
  { name:'DC ENERGY', sub:'Daily Energy • Performance', tone:'lime', price:'₹699', note:'150 g' },
  { name:'DC WEIGHT GAIN', sub:'Daily Weight Gainer', tone:'amber', price:'₹699', note:'150 g' },
  { name:'DC PLANT PROTEIN', sub:'Plant Protein • Creatine', tone:'lavender', price:'₹699', note:'150 g' },
  { name:'DC MEAL REPLACEMENT', sub:'Complete Daily Nutrition', tone:'sand', price:'₹699', note:'150 g' },
  { name:'DC PRE-WORKOUT', sub:'Performance Fuel', tone:'coral', price:'₹699', note:'150 g' },
  { name:'DC HYDRATION', sub:'Daily Hydration Formula', tone:'blue', price:'₹699', note:'150 g' },
  { name:'DC METABOLISM / FIBRE', sub:'Metabolism • Daily Fibre', tone:'olive', price:'₹699', note:'150 g' },
  { name:'DC CRAVING KILLER', sub:'Craving Control • Fibre', tone:'rose', price:'₹699', note:'150 g' },
  { name:'DC BRAIN / FOCUS', sub:'Focus • Mental Clarity', tone:'violet', price:'₹699', note:'150 g' },
  { name:'DC CALM', sub:'Calm • Daily Balance', tone:'sage', price:'₹699', note:'150 g' },
  { name:'DC SLEEP / NIGHT', sub:'Night Routine • Rest', tone:'night', price:'₹699', note:'150 g' },
  { name:'DC DIGESTION / DAILY FIBRE', sub:'Digestion • Daily Fibre', tone:'peach', price:'₹699', note:'150 g' },
  { name:'DC IMMUNITY', sub:'Daily Immune Support', tone:'mint', price:'₹699', note:'150 g' },
  { name:'DC BEAUTY', sub:'Beauty • Glow From Within', tone:'pink', price:'₹699', note:'150 g' },
  { name:'DC JOINT', sub:'Joint • Mobility Support', tone:'gold', price:'₹699', note:'150 g' },
  { name:'DC GLYCO', sub:'Sugar Balance Formula', tone:'red', price:'₹699', note:'150 g' },
  { name:'DC LIPID', sub:'Heart • Lipid Support', tone:'sky', price:'₹699', note:'150 g' },
  { name:'DC BONE', sub:'Bone • Calcium Support', tone:'cream', price:'₹699', note:'150 g' },
  { name:'DC BLOOD / DETOX', sub:'Daily Herbal Wellness', tone:'plum', price:'₹699', note:'150 g' },
];

function ProductPouch({ product, large = false }: { product: Product; large?: boolean }) {
  const short = product.name.replace('DC ', '');
  return (
    <div className={`dc-premium-pouch ${product.tone} ${large ? 'large' : ''}`} aria-label={`${product.name} premium pouch`}>
      <div className="pouch-seal" />
      <div className="pouch-brand">DC</div>
      <div className="pouch-brand-sub">DAILY CONSUMABLES</div>
      <div className="pouch-rule" />
      <div className="pouch-product">{short}</div>
      <div className="pouch-benefit">{product.sub}</div>
      <div className="pouch-chip-row"><span>PLANT</span><span>HERBAL</span><span>VEGAN</span></div>
      <div className="pouch-bottom"><b>{product.note}</b><span>DAILY FLEX.</span></div>
    </div>
  );
}

function GalleryVisual({ product, index }: { product: Product; index: number }) {
  if (index === 0) return <ProductPouch product={product} large />;
  if (index === 1) return <div className="gallery-art ingredients-art"><span>✦</span><b>PURE<br/>INGREDIENTS</b><small>Whole-food • herbal • plant-based</small></div>;
  if (index === 2) return <div className="gallery-art benefit-art"><span>✓</span><b>DAILY<br/>BENEFITS</b><small>{product.sub}</small></div>;
  if (index === 3) return <div className="gallery-art lifestyle-art"><div className="art-ring">DC</div><b>MADE FOR<br/>REAL LIFE</b><small>Work • travel • train • chill</small></div>;
  if (index === 4) return <div className="gallery-art detail-art"><span>DC</span><b>PREMIUM<br/>BLACK POUCH</b><small>150 g • Vegan</small></div>;
  return <div className="gallery-art nutrition-art"><span>◈</span><b>CLEAR<br/>NUTRITION</b><small>Simple ingredients. Clear purpose.</small></div>;
}

function VideoSlot({ product }: { product: Product }) {
  return <div className="dc-video-slot">
    <div className="video-play">▶</div>
    <div><b>{product.name}</b><span>PRODUCT VIDEO</span></div>
    <small>Video space ready — add the final product video when available.</small>
  </div>;
}

export default function DCCollection() {
  const [selected, setSelected] = useState(0);
  const product = collectionProducts[selected];
  const gallery = useMemo(() => Array.from({ length: 6 }, (_, i) => i), []);

  return (
    <section className="dc-collection-system" id="dc-products">
      <div className="wrap">
        <div className="dc-collection-titlebar">
          <div>
            <p className="eyebrow">THE DC COLLECTION</p>
            <h2>PICK YOUR <em>DAILY FLEX.</em></h2>
            <p>19 products. One daily wellness system.</p>
          </div>
          <a className="dc-view-all" href="#dc-product-detail">VIEW ALL PRODUCTS <span>→</span></a>
        </div>

        <div className="dc-product-rail" aria-label="DC product collection">
          {collectionProducts.map((item, index) => (
            <button key={item.name} className={`dc-product-tile ${item.tone} ${selected === index ? 'selected' : ''}`} onClick={() => setSelected(index)} aria-pressed={selected === index}>
              <div className="dc-tile-art"><ProductPouch product={item} /></div>
              <strong>{item.name}</strong>
              <span>{item.sub}</span>
              <small>{item.note} &nbsp;|&nbsp; {item.price}</small>
              <i>VIEW PRODUCT →</i>
            </button>
          ))}
        </div>

        <div className="dc-product-detail" id="dc-product-detail">
          <div className="dc-detail-heading">
            <div><p className="eyebrow">PRODUCT DETAIL</p><h3>{product.name}</h3><p>{product.sub}</p></div>
            <div className="dc-detail-counter">{String(selected + 1).padStart(2, '0')} / 19</div>
          </div>

          <div className="dc-detail-layout">
            <div className="dc-gallery-column">
              <div className="dc-gallery-main"><GalleryVisual product={product} index={0} /></div>
              <div className="dc-gallery-thumbs">
                {gallery.map(index => <button key={index} className={`dc-gallery-thumb ${index === 0 ? 'active' : ''}`} aria-label={`Product image ${index + 1}`}>
                  <GalleryVisual product={product} index={index} />
                </button>)}
              </div>
              <VideoSlot product={product} />
            </div>

            <div className="dc-detail-info">
              <div className="dc-benefit-grid">
                <div><b>✦</b><strong>Purposeful</strong><span>Daily formula</span></div>
                <div><b>♧</b><strong>Plant-Based</strong><span>Vegan friendly</span></div>
                <div><b>◈</b><strong>Clean</strong><span>No unnecessary BS</span></div>
                <div><b>✓</b><strong>Made in India</strong><span>DC standard</span></div>
              </div>
              <div className="dc-detail-copy"><p>A premium DC daily formula designed to fit naturally into real routines. Product information, ingredients, usage and nutrition can be expanded here as each final formulation is approved.</p><ul><li>Premium black DC pouch presentation</li><li>Clear product purpose and daily-use guidance</li><li>Dedicated media gallery for every product</li><li>Six image slots + one video slot per product</li></ul></div>
              <div className="dc-buy-card"><div><span>{product.note}</span><b>{product.price}</b></div><button>ADD TO CART <span>→</span></button></div>
              <div className="dc-accordions">
                <details><summary>Ingredients <span>⌄</span></summary><p>Final approved ingredient list will be displayed here.</p></details>
                <details><summary>How To Use <span>⌄</span></summary><p>Serving and preparation instructions will be displayed here.</p></details>
                <details><summary>Nutritional Information <span>⌄</span></summary><p>Final lab-verified nutrition panel will be displayed here.</p></details>
                <details><summary>FAQs <span>⌄</span></summary><p>Product-specific frequently asked questions will be displayed here.</p></details>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
