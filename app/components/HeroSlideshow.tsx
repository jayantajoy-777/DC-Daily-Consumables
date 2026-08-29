'use client';

import { useEffect, useState } from 'react';

const slides = [
  { kicker: 'DC | DAILY CONSUMABLES', title: 'YOUR DAILY', accent: 'FLEX.', body: 'Whatever your day needs, there’s a DC for that.', cta: 'SHOP DC', tone: '#f4ead9', blob: '#dce8b9', product: 'ENERGY', productTone: '#c7dd63', note: 'DAILY ENERGY • PERFORMANCE' },
  { kicker: 'DC ENERGY', title: 'START', accent: 'STRONG.', body: 'A convenient daily blend for energy and everyday performance.', cta: 'SHOP ENERGY', tone: '#f5e6b9', blob: '#e7c889', product: 'ENERGY', productTone: '#c7dd63', note: 'OATS • BANANA • DATES' },
  { kicker: 'DC PLANT PROTEIN', title: 'FUEL YOUR', accent: 'DAY.', body: 'Plant protein with a simple, everyday approach to performance nutrition.', cta: 'SHOP PROTEIN', tone: '#e6e1ef', blob: '#c8d5ad', product: 'PLANT PROTEIN', productTone: '#d8d1e8', note: 'PEA • RICE • CREATINE' },
  { kicker: 'DC HYDRATION', title: 'HYDRATE', accent: 'YOUR DAY.', body: 'A refreshing daily hydration ritual for work, training and travel.', cta: 'SHOP HYDRATION', tone: '#dcecef', blob: '#a8d8d6', product: 'HYDRATION', productTone: '#75c8d9', note: 'COCONUT WATER • ELECTROLYTES' },
  { kicker: 'DC | DAILY WELLNESS', title: 'MAKE IT', accent: 'DAILY.', body: 'Build a routine around the DC products that fit your day.', cta: 'EXPLORE DC', tone: '#f3ddd4', blob: '#e5b9a9', product: 'DAILY', productTone: '#d6e17a', note: '19 PRODUCTS • ONE SYSTEM' },
];

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const slide = slides[active];

  useEffect(() => {
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="wrap" id="top" style={{ paddingBottom: 0 }}>
      <div style={{ position: 'relative', minHeight: 555, overflow: 'hidden', borderRadius: '0 0 30px 30px', background: slide.tone, transition: 'background .6s ease', display: 'grid', gridTemplateColumns: '42% 58%' }}>
        <div style={{ padding: '72px 30px 72px 55px', position: 'relative', zIndex: 3, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <p className="eyebrow" style={{ marginBottom: 18 }}>{slide.kicker}</p>
          <h1 style={{ fontFamily: 'Space Grotesk', fontSize: 'clamp(56px,6vw,92px)', lineHeight: .84, letterSpacing: '-.075em', margin: 0 }}>{slide.title}<br /><em style={{ fontStyle: 'normal', color: '#8eae1c' }}>{slide.accent}</em></h1>
          <p className="lead" style={{ maxWidth: 390 }}>{slide.body}</p>
          <div className="hero-ctas">
            <a className="btn primary" href="#collection">{slide.cta} <span>→</span></a>
            <a className="btn outline" href="#find">FIND MY FLEX <span>✦</span></a>
          </div>
        </div>

        <div style={{ position: 'relative', overflow: 'hidden', minHeight: 555 }}>
          <div style={{ position: 'absolute', width: 430, height: 430, borderRadius: '50%', background: slide.blob, right: -40, top: 55, transition: 'background .6s ease' }} />
          <div style={{ position: 'absolute', width: 180, height: 180, borderRadius: '50%', background: '#fff8ed', left: 40, bottom: 35, opacity: .7 }} />
          <div style={{ position: 'absolute', left: 30, bottom: 34, width: 100, height: 54, borderRadius: '0 0 55px 55px', background: '#fffdf8', boxShadow: '0 12px 25px #493b2518', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12 }}>● ● ●</div>
          <div style={{ position: 'absolute', left: 95, bottom: 65, fontSize: 54, color: '#78932b', transform: 'rotate(-25deg)' }}>⌁</div>

          <div style={{ position: 'absolute', right: '18%', bottom: 58, width: 170, height: 250, borderRadius: '12px 12px 18px 18px', background: '#191916', color: '#fff', boxShadow: '0 24px 40px #2b291d38', padding: 16, transform: 'rotate(-3deg)', transition: 'all .5s ease' }}>
            <div style={{ fontFamily: 'Space Grotesk', fontSize: 28, fontWeight: 700, letterSpacing: '-.08em' }}>DC</div>
            <div style={{ fontSize: 6, letterSpacing: '.15em', fontWeight: 700 }}>DAILY CONSUMABLES</div>
            <div style={{ marginTop: 92, fontFamily: 'Space Grotesk', fontSize: 23, lineHeight: .9, fontWeight: 700, color: slide.productTone }}>{slide.product}</div>
            <div style={{ fontSize: 7, marginTop: 7, color: '#ddd' }}>{slide.note}</div>
            <div style={{ position: 'absolute', bottom: 14, left: 16, fontSize: 6, color: '#aaa', letterSpacing: '.08em' }}>150 G • VEGAN</div>
          </div>

          <div style={{ position: 'absolute', right: '5%', bottom: 44, width: 82, height: 190, borderRadius: '16px 16px 28px 28px', background: '#252520', color: '#fff', boxShadow: '0 20px 30px #2222', textAlign: 'center', paddingTop: 18, fontFamily: 'Space Grotesk', fontSize: 23 }}>DC<span style={{ display: 'block', fontSize: 8, lineHeight: 1.1, marginTop: 35, color: '#c7e33a' }}>YOUR<br />DAILY<br />FLEX.</span></div>

          <div style={{ position: 'absolute', right: '43%', bottom: 28, display: 'flex', gap: 8, alignItems: 'end' }}>
            {[['#222', 130, -8], ['#222', 155, 4], ['#222', 120, 10]].map(([bg, h, r], i) => <div key={i} style={{ width: 70, height: h as number, borderRadius: 9, background: bg as string, transform: `rotate(${r}deg)`, boxShadow: '0 15px 25px #2222', opacity: .92 }} />)}
          </div>
        </div>

        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 54, background: '#fffdf9d9', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 28px', zIndex: 4 }}>
          <span style={{ fontSize: 10, fontWeight: 800 }}>PLANT-BASED</span><span style={{ fontSize: 10, fontWeight: 800 }}>PURE INGREDIENTS</span><span style={{ fontSize: 10, fontWeight: 800 }}>NO UNNECESSARY ADDITIVES</span><span style={{ fontSize: 10, fontWeight: 800 }}>MADE IN INDIA</span>
        </div>

        <div style={{ position: 'absolute', right: 25, top: 25, zIndex: 5, display: 'flex', gap: 7 }}>
          {slides.map((_, index) => <button key={index} aria-label={`Go to slide ${index + 1}`} onClick={() => setActive(index)} style={{ width: index === active ? 34 : 9, height: 9, borderRadius: 20, border: 0, background: index === active ? '#171714' : '#17171455', cursor: 'pointer', transition: 'all .3s ease' }} />)}
        </div>

        <button aria-label="Previous slide" onClick={() => setActive((active - 1 + slides.length) % slides.length)} style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 5, width: 38, height: 38, borderRadius: '50%', border: '1px solid #17171422', background: '#fffdf8cc', cursor: 'pointer', fontSize: 20 }}>‹</button>
        <button aria-label="Next slide" onClick={() => setActive((active + 1) % slides.length)} style={{ position: 'absolute', right: 20, top: '50%', transform: 'translateY(-50%)', zIndex: 5, width: 38, height: 38, borderRadius: '50%', border: '1px solid #17171422', background: '#fffdf8cc', cursor: 'pointer', fontSize: 20 }}>›</button>
      </div>
    </section>
  );
}
