'use client';

import { useEffect, useRef, useState } from 'react';

type Ingredient = { name: string; amount?: string; role: string; benefit: string };
type Product = { name: string; eyebrow: string; description: string; tone: string; ingredients: Ingredient[]; howTo: string[]; faqs: [string, string][]; image?: string };

const products: Record<string, Product> = {
  'DC ENERGY': { name:'DC ENERGY', eyebrow:'DAILY ENERGY • PERFORMANCE', description:'A plant-based daily blend built around whole-food nutrition and performance ingredients.', tone:'lime', ingredients:[{name:'Oat Powder',role:'Whole-food carbohydrate base',benefit:'Provides carbohydrate and fibre to support everyday fuel.'},{name:'Peanut Powder',role:'Plant protein + healthy fats',benefit:'Adds protein, energy and a rich, satisfying texture.'},{name:'Banana Powder',role:'Natural fruit nutrition',benefit:'Adds carbohydrate, flavour and fruit-derived nutrition.'},{name:'Date Powder',role:'Fruit-based energy source',benefit:'Adds naturally occurring sugars and a caramel-like sweetness.'},{name:'Pea Protein',role:'Plant protein',benefit:'Helps increase the protein contribution of the blend.'},{name:'Rice Protein',role:'Complementary plant protein',benefit:'Adds another plant protein source to the formula.'},{name:'Flaxseed Powder',role:'Seed nutrition',benefit:'Contributes fibre and plant-based omega-3 ALA.'},{name:'Cocoa',role:'Cacao flavour',benefit:'Adds cocoa character and naturally occurring polyphenols.'},{name:'Moringa Powder',role:'Botanical nutrition',benefit:'Adds a leafy botanical to the daily blend.'},{name:'Amla Powder',role:'Fruit botanical',benefit:'Adds amla and naturally occurring vitamin C.'},{name:'Cinnamon',role:'Botanical spice',benefit:'Adds aromatic flavour and plant compounds.'},{name:'Natural Vanilla',role:'Natural flavour',benefit:'Rounds out the flavour profile.'}], howTo:['Mix one serving with water or your preferred milk.','Shake or blend until smooth.','Use as part of your normal daily nutrition routine.'], faqs:[['When should I take it?','Use it at a time that fits your routine, such as breakfast or around an active part of your day.'],['Can I blend it?','Yes. A blender can give the smoothest texture, especially with milk.']] },
  'DC WEIGHT GAIN': { name:'DC WEIGHT GAIN', eyebrow:'DAILY WEIGHT GAINER', description:'A calorie-dense plant-based blend designed to make adding daily nutrition simple and convenient.', tone:'amber', ingredients:[{name:'Oat Powder',role:'Whole-food carbohydrate base',benefit:'Provides carbohydrate, calories and fibre.'},{name:'Peanut Powder',role:'Plant protein + fats',benefit:'Adds protein, energy and richness.'},{name:'Banana Powder',role:'Fruit carbohydrate',benefit:'Adds fruit-derived carbohydrate and flavour.'},{name:'Date Powder',role:'Fruit-based sweetness',benefit:'Adds naturally occurring sugars and sweetness.'},{name:'Pea Protein',role:'Plant protein',benefit:'Raises the protein contribution of the formula.'},{name:'Rice Protein',role:'Plant protein',benefit:'Complements the pea protein source.'},{name:'Coconut Milk Powder',role:'Creamy plant ingredient',benefit:'Adds richness and a creamy mouthfeel.'},{name:'Flaxseed Powder',role:'Seed nutrition',benefit:'Contributes fibre and ALA omega-3.'},{name:'Cocoa',role:'Cacao flavour',benefit:'Adds depth to the flavour profile.'},{name:'Cinnamon',role:'Botanical spice',benefit:'Adds warm aromatic flavour.'},{name:'Salt',role:'Flavour balance',benefit:'Helps balance the overall taste.'}], howTo:['Mix one serving with water or milk.','For a more calorie-dense shake, use milk and blend with your preferred additions.','Use consistently alongside a balanced diet.'], faqs:[['Is this a meal?','It is a nutrition supplement, not a replacement for a varied balanced diet.'],['How do I make it more filling?','Blending with milk or adding food such as banana or nut butter can increase the energy and texture.']] },
  'DC PLANT PROTEIN': { name:'DC PLANT PROTEIN', eyebrow:'PLANT PROTEIN • CREATINE', description:'A plant-protein blend pairing pea and rice proteins with creatine for a straightforward daily performance routine.', tone:'lavender', image:'/plant-protein-banner.PNG', ingredients:[{name:'Pea Protein Isolate',amount:'450 g / kg formula',role:'Primary plant protein',benefit:'A concentrated plant protein source for daily protein intake.'},{name:'Rice Protein Isolate',amount:'300 g / kg formula',role:'Complementary plant protein',benefit:'Complements pea protein to diversify the protein blend.'},{name:'Creatine Monohydrate',amount:'150 g / kg formula',role:'Performance ingredient',benefit:'Creatine supports increases in strength and high-intensity exercise performance when used consistently.'},{name:'Cocoa Powder',role:'Cacao flavour',benefit:'Adds a chocolate flavour profile.'},{name:'Coconut Milk Powder',role:'Creamy plant ingredient',benefit:'Adds body and a smoother mouthfeel.'},{name:'Flaxseed Powder',role:'Seed nutrition',benefit:'Contributes fibre and ALA omega-3.'},{name:'Natural Flavour',role:'Flavour system',benefit:'Helps create the intended taste profile.'},{name:'Salt',role:'Flavour balance',benefit:'Balances the overall flavour.'}], howTo:['Mix one 20 g serving with water or milk.','Shake or blend until smooth.','Use consistently as part of your protein and training routine.'], faqs:[['How much creatine is in a serving?','The DC formulation is designed around 3 g creatine monohydrate per 20 g serving.'],['Do I need to train to use it?','Creatine is primarily useful in the context of regular physical activity and training.']] },
  'DC PRE-WORKOUT': { name:'DC PRE-WORKOUT', eyebrow:'PERFORMANCE FUEL', description:'A focused pre-training formula designed to fit into a simple, repeatable workout ritual.', tone:'coral', ingredients:[{name:'Caffeine',role:'Performance stimulant',benefit:'Can increase alertness and reduce the perception of effort during exercise.'},{name:'Beetroot',role:'Nitrate-rich botanical',benefit:'Provides naturally occurring dietary nitrates.'},{name:'Citrulline',role:'Amino acid',benefit:'Used in sports nutrition formulas to support exercise blood-flow and performance pathways.'},{name:'Beta-Alanine',role:'Performance amino acid',benefit:'Supports muscle carnosine levels with regular use.'},{name:'Electrolytes',role:'Hydration support',benefit:'Provide minerals involved in fluid and electrolyte balance.'}], howTo:['Mix the recommended serving with water.','Take before training according to the product label.','Do not stack with excessive additional caffeine sources.'], faqs:[['Can I take it late at night?','Because it contains caffeine, consider your total caffeine intake and sensitivity before evening use.'],['Should I take more for a stronger effect?','No. Follow the labelled serving size.']] },
  'DC HYDRATION': { name:'DC HYDRATION', eyebrow:'DAILY HYDRATION FORMULA', description:'A simple daily hydration blend designed to make staying hydrated more convenient.', tone:'blue', ingredients:[{name:'Electrolyte Minerals',role:'Hydration support',benefit:'Provide minerals involved in fluid and electrolyte balance.'},{name:'Botanical / flavour components',role:'Taste experience',benefit:'Designed to make regular water intake easier and more enjoyable.'}], howTo:['Mix the recommended serving into water.','Shake or stir until fully dispersed.','Sip throughout your normal day or around activity.'], faqs:[['Can I use it every day?','Use it according to the product label and your individual hydration needs.'],['Is it a replacement for water?','No. It is intended to complement normal water intake.']] }
};

function Pouch({ product }: { product: Product }) {
  return <div className={`dc-gallery-pouch ${product.tone}`}><span>DC</span><small>DAILY CONSUMABLES</small><strong>{product.name.replace('DC ','')}</strong><em>{product.eyebrow}</em><b>150 g • VEGAN</b></div>;
}

export default function DCProductDetails() {
  const [product, setProduct] = useState<Product | null>(null);
  const [slide, setSlide] = useState(0);
  const touchStart = useRef<number | null>(null);

  useEffect(() => {
    const open = (event: Event) => { const selected = products[(event as CustomEvent<string>).detail]; if (!selected) return; setProduct(selected); setSlide(0); document.body.classList.add('dc-detail-open'); };
    window.addEventListener('dc:open-product', open as EventListener);
    return () => window.removeEventListener('dc:open-product', open as EventListener);
  }, []);

  useEffect(() => {
    if (!product) return;
    const key = (event: KeyboardEvent) => { if (event.key === 'Escape') close(); };
    window.addEventListener('keydown', key);
    return () => window.removeEventListener('keydown', key);
  }, [product]);

  if (!product) return null;
  const close = () => { setProduct(null); document.body.classList.remove('dc-detail-open'); };
  const media = [0,1,2,3,4,5];
  const next = () => setSlide(current => (current + 1) % media.length);
  const prev = () => setSlide(current => (current - 1 + media.length) % media.length);
  const related = Object.values(products).filter(item => item.name !== product.name).slice(0,3);

  return <div className={`dc-product-detail ${product.tone}`} role="dialog" aria-modal="true" aria-label={`${product.name} product details`}>
    <div className="dc-detail-shell">
      <button className="dc-detail-close" onClick={close} aria-label="Close product details">×</button>
      <section className="dc-detail-hero">
        <div className="dc-gallery-wrap">
          <div className="dc-gallery-viewport" onTouchStart={e => { touchStart.current = e.changedTouches[0]?.clientX ?? null; }} onTouchEnd={e => { if (touchStart.current === null) return; const delta = e.changedTouches[0]?.clientX - touchStart.current; if (Math.abs(delta) > 45) delta < 0 ? next() : prev(); touchStart.current = null; }}>
            <div className="dc-gallery-track" style={{ transform:`translateX(-${slide * 100}%)` }}>
              {media.map((_, index) => <div className="dc-gallery-slide" key={index}>{product.image && index === 0 ? <img src={product.image} alt={`${product.name} product visual`} /> : <Pouch product={product} />}<span className="dc-gallery-count">{index + 1} / {media.length}</span></div>)}
            </div>
            <button type="button" className="dc-gallery-arrow prev" onClick={prev} aria-label="Previous product image">‹</button>
            <button type="button" className="dc-gallery-arrow next" onClick={next} aria-label="Next product image">›</button>
          </div>
          <div className="dc-gallery-dots" aria-label="Product images">{media.map((_, index) => <button key={index} type="button" className={index === slide ? 'active' : ''} onClick={() => setSlide(index)} aria-label={`View product image ${index + 1}`} />)}</div>
        </div>

        <div className="dc-detail-intro">
          <p className="dc-detail-kicker">{product.eyebrow}</p>
          <h1>{product.name}</h1>
          <p className="dc-detail-description">{product.description}</p>
          <div className="dc-detail-buy"><div><small>PACK</small><span>150 g</span></div><div><small>PRICE</small><strong>₹699</strong></div><button onClick={e=>e.stopPropagation()}>ADD TO CART <span>→</span></button></div>
          <div className="dc-detail-trust"><span>PLANT-BASED</span><span>FORMULA TRANSPARENT</span><span>MADE FOR ROUTINE</span></div>
        </div>
      </section>

      <section className="dc-compact-info">
        <details open><summary>INGREDIENTS <span>+</span></summary><div className="dc-ingredient-list">{product.ingredients.map(ingredient=><article key={ingredient.name}><div><h3>{ingredient.name}</h3>{ingredient.amount && <b>{ingredient.amount}</b>}<small>{ingredient.role}</small></div><p>{ingredient.benefit}</p></article>)}</div></details>
        <details><summary>HOW TO USE <span>+</span></summary><ol>{product.howTo.map(step=><li key={step}>{step}</li>)}</ol></details>
        <details><summary>FAQ <span>+</span></summary>{product.faqs.map(([q,a])=><div className="dc-faq-row" key={q}><strong>{q}</strong><p>{a}</p></div>)}</details>
      </section>

      <section className="dc-related"><div><p className="dc-detail-kicker">MORE FROM DC</p><h2>Find your next <i>Daily Flex.</i></h2></div><div className="dc-related-grid">{related.map(item=><button type="button" key={item.name} onClick={()=>{setProduct(item);setSlide(0);}} className={`dc-related-card ${item.tone}`}><span>{item.eyebrow}</span><strong>{item.name}</strong><small>{item.description}</small><b>VIEW PRODUCT →</b></button>)}</div></section>
    </div>
  </div>;
}
