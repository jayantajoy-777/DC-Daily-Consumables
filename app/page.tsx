'use client'

import { useState, type CSSProperties } from 'react'

const slides = [
  { eyebrow: '01 / PERFORMANCE', title: <>PURE VEGAN<br />PROTEIN<br /><em>WITH CREATINE</em></>, text: <>Build lean muscle. Get stronger.<br />Every. Single. Day.</>, bg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=85' },
  { eyebrow: '02 / ENERGY', title: <>NATURAL<br />ENERGY<br /><em>THAT LASTS</em></>, text: <>Plant-powered fuel for busy days.<br />Keep moving. Keep going.</>, bg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2200&q=85' },
  { eyebrow: '03 / FOCUS', title: <>BRAIN BOOSTER<br /><em>FOR KIDS &amp;<br />ADULTS</em></>, text: <>Clean everyday nutrition for<br />a sharper daily routine.</>, bg: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=2200&q=85' },
  { eyebrow: '04 / HYDRATION', title: <>STAY HYDRATED<br /><em>PERFORM<br />BETTER</em></>, text: <>Simple hydration designed<br />for your everyday movement.</>, bg: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=2200&q=85' },
  { eyebrow: '05 / BALANCE', title: <>SUGAR CONTROL<br /><em>NATURALLY</em></>, text: <>Everyday plant-powered support<br />without unnecessary extras.</>, bg: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=2200&q=85' },
  { eyebrow: '06 / WELLNESS', title: <>WHOLE BODY<br /><em>WELLNESS<br />EVERY DAY</em></>, text: <>Clean nutrition made for<br />your complete daily routine.</>, bg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2200&q=85' },
  { eyebrow: '07 / PERFORMANCE', title: <>THE COMPLETE<br />DC RANGE<br /><em>FOR YOU</em></>, text: <>Build lean muscle. Get stronger.<br />Every. Single. Day.</>, bg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2200&q=85' },
]

const rail = [
  ['PURE VEGAN', 'PROTEIN', 'WITH CREATINE', 'photo-1534438327276-14e5300c3a48'], ['NATURAL', 'ENERGY', 'THAT LASTS', 'photo-1571019613454-1cb2f99b2d8b'], ['BRAIN BOOSTER', 'FOR KIDS &', 'ADULTS', 'photo-1505751172876-fa1923c5c528'], ['STAY HYDRATED', 'PERFORM', 'BETTER', 'photo-1523362628745-0c100150b504'], ['SUGAR CONTROL', 'NATURALLY', '', 'photo-1547592180-85f173990554'], ['WHOLE BODY', 'WELLNESS', 'EVERY DAY', 'photo-1518611012118-696072aa579a'], ['THE COMPLETE', 'DC RANGE', 'FOR YOU', 'photo-1583454110551-21f2fa2afe61'],
]
const products = ['DC PLANT PROTEIN', 'DC ENERGY', 'DC PRE-WORKOUT', 'DC HYDRATION', 'DC BRAIN BOOSTER', 'DC SUGAR CONTROL']
const productColors = ['#c8ef00', '#c8ef00', '#c8ef00', '#27a7e7', '#c8ef00', '#c8ef00']
const categories = [
  ['🏋', 'FITNESS', 'Build. Perform. Push limits.'], ['✦', 'DAILY USE', 'Everyday nutrition made simple.'], ['▣', 'WEIGHT MANAGEMENT', 'Your goals. Our support.'], ['☾', 'NIGHT RITUAL', 'Recover. Relax. Recharge.'], ['✧', 'BEAUTY', 'Glow inside. Shine outside.'], ['♢', 'IMMUNITY', 'Stronger you. Every day.'], ['♡', 'HEART HEALTH', 'Care today. Live tomorrow.'], ['⌁', 'DIGESTION', 'Happy gut. Better you.'], ['⚡', 'ACTIVE LIFESTYLE', 'On the go. Always ready.'],
]
const ingredients = ['PEA PROTEIN', 'MORINGA', 'MACA ROOT', 'FLAXSEED', 'OATS', 'AMLA', 'BEETROOT', 'ASHWAGANDHA']

function Logo() { return <div className="logo"><strong>DC</strong><span>DAILY<br />CONSUMABLES</span></div> }

function Pouch({ accent = '#c8ef00', label = 'PLANT PROTEIN' }: { accent?: string; label?: string }) {
  return <div className="pouch" style={{ '--accent': accent } as CSSProperties}><div className="pouch-logo">DC</div><small>DAILY CONSUMABLES</small><div className="pouch-name">{label}</div><div className="pouch-line" /><b>25g &nbsp; 3g &nbsp; 0g<br /><span style={{ fontSize: '5px' }}>PROTEIN &nbsp; CREATINE &nbsp; SUGAR</span></b><div className="pouch-bottom">CHOCOLATE FLAVOUR</div></div>
}

export default function Home() {
  const [active, setActive] = useState(0)
  const slide = slides[active]
  const next = () => setActive((active + 1) % slides.length)
  const prev = () => setActive((active - 1 + slides.length) % slides.length)

  return <main>
    <div className="top"><span>FREE SHIPPING ON ORDERS ABOVE ₹999</span><span>🌿 100% PLANT-BASED</span><span>NO CHEMICALS</span><span>NO PRESERVATIVES</span><span>NO COLOURS</span><span>PURE VEGAN</span></div>
    <header><Logo /><nav><a>SHOP⌄</a><a>THE DAILY 5</a><a>FIND YOUR FLEX <i>AI</i></a><a>ABOUT DC</a><a>BLOGS</a><a>REWARDS</a></nav><div className="actions">⌕　♙　🛒</div></header>

    <section className="hero">
      <div className="hero-bg" style={{ transform: `translateX(-${active * 14.2857}%)` }}>{slides.map((s) => <div className="hero-photo" key={s.eyebrow} style={{ backgroundImage: `url(${s.bg})` }}><div className="overlay" /></div>)}</div>
      <button className="arrow l" onClick={prev} aria-label="Previous slide">‹</button><button className="arrow r" onClick={next} aria-label="Next slide">›</button>
      <div className="hero-copy"><small>{slide.eyebrow}</small><h1>{slide.title}</h1><p>{slide.text}</p><button>SHOP NOW →</button><button className="ghost">VIEW PRODUCT</button></div>
      <div className="dots">{slides.map((_, i) => <button key={i} className={i === active ? 'on' : ''} onClick={() => setActive(i)} aria-label={`Go to slide ${i + 1}`} />)}</div>
    </section>

    <section className="hero-rail">{rail.map((r, i) => <button key={i} className={i === active ? 'sel' : ''} onClick={() => setActive(i)}><div className="mini" style={{ backgroundImage: `url(https://images.unsplash.com/${r[3]}?auto=format&fit=crop&w=500&q=80)` }}><span>0{i + 1}</span><b>{r[0]}</b></div><small><em>{r[1]}</em><br />{r[2]}</small></button>)}</section>

    <section className="standard"><div><small>OUR STANDARD</small><h2>NO BS.<br /><em>JUST REAL STUFF.</em></h2><p>At DC, we believe your body deserves clean, honest nutrition. No chemicals. No preservatives. No unnecessary fillers. Just purposeful plant-powered formulas made from real ingredients. Nothing more.</p></div><div className="standards">{[['◈','NO SUGAR'],['⚗','NO CHEMICALS'],['◌','NO COLOURS'],['♧','NO PRESERVATIVES'],['♧','PURE VEGAN']].map(x => <div key={x[1]}><span>{x[0]}</span><b>{x[1]}</b></div>)}</div></section>

    <div className="black-strip">{[['♧','PLANT-BASED','Nature is our only source'],['♨','PURE SUPERFOOD','Real ingredients. Real results.'],['♙','LAB TESTED','Every batch. Every time.'],['▣','FAST & SAFE DELIVERY','Pan India. On time, every time.']].map(x => <div key={x[1]}><span>{x[0]}</span><b>{x[1]}</b><small>{x[2]}</small></div>)}</div>

    <section className="products"><div className="section-head"><div><small>OUR PRODUCTS</small><h2>19 Powerful Products For Every Need.</h2></div><button>VIEW ALL PRODUCTS →</button></div><div className="product-grid">{products.map((p, i) => <article className="product" key={p}><Pouch accent={productColors[i]} label={p.replace('DC ', '')} /><b>{p}</b><small>{['Muscle Building','Natural Energy','Performance','Hydration','Focus & Memory','Sugar Balance'][i]}</small><strong>₹699 <i>🛒</i></strong></article>)}</div></section>

    <section className="use"><div className="use-grid">{categories.map(c => <div key={c[1]}><span>{c[0]}</span><b>{c[1]}</b><small>{c[2]}</small></div>)}</div></section>

    <section className="products ingredients"><div className="section-head"><div><small>REAL INGREDIENTS.</small><h2><em>REAL NUTRITION.</em></h2><p>We use real, whole-food ingredients packed with natural goodness. No shortcuts. Just nature.</p></div><button>SEE OUR INGREDIENTS →</button></div><div className="ingredient-grid">{ingredients.map((x, i) => <div key={x}><span>{['🌱','🍃','🥜','◉','🌾','🟢','🫜','🌿'][i]}</span><b>{x}</b></div>)}</div></section>

    <section className="how"><small>HOW TO USE</small><p>Simple. Quick. Effective.</p><div className="how-grid">{[['1','SCOOP','Take 1–2 scoops of DC powder.'],['2','MIX','Add 250–300ml water or milk.'],['3','SHAKE','Shake well until smooth.'],['4','DRINK','Fuel your day. Feel the difference.']].map(x => <div key={x[0]}><strong>{x[0]}</strong><span>{['🥄','🥤','🧴','⚡'][Number(x[0])-1]}</span><b>{x[1]}</b><small>{x[2]}</small></div>)}</div></section>

    <section className="products people"><div><small>FUELING REAL PEOPLE.</small><h2><em>REAL RESULTS.</em></h2><p>@daily.flex</p><button>JOIN THE COMMUNITY →</button></div><div className="people-grid">{['photo-1534438327276-14e5300c3a48','photo-1517836357463-d25dfeac3438','photo-1571019614242-c5c5dee9f50b','photo-1518611012118-696072aa579a','photo-1583454110551-21f2fa2afe61'].map(id => <img key={id} src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=500&q=80`} alt="DC community" />)}</div></section>

    <section className="final"><div><small>CLEAN NUTRITION.</small><h2>REAL PERFORMANCE.<br /><em>THIS IS YOUR DAILY FLEX.</em></h2><p>NO SUGAR　 NO CHEMICALS　 NO COLOURS　 NO PRESERVATIVES　 PURE VEGAN</p><button>SHOP THE DC RANGE →</button></div><div className="final-products">{products.map((p, i) => <Pouch key={p} accent={productColors[i]} label={p.replace('DC ', '')} />)}</div></section>

    <footer><div><Logo /><b>YOUR DAILY FLEX.</b><small>Plant-based. Herbal.<br />No unnecessary BS.</small><p>© 2026 DC DAILY CONSUMABLES. ALL RIGHTS RESERVED.</p></div><div><b>SHOP</b><small>All Products<br />The Daily 5<br />Shop by Goal<br />New Arrivals<br />Best Sellers</small></div><div><b>SUPPORT</b><small>FAQ<br />Shipping & Delivery<br />Returns & Refunds<br />Track Your Order<br />Contact Us</small></div><div><b>ABOUT DC</b><small>Our Story<br />Ingredient Philosophy<br />Blogs<br />DC Community<br />Rewards</small></div><div><b>STAY UPDATED</b><small>Get exclusive offers,<br />new launches and DC tips.</small><input placeholder="Enter your email" /></div></footer>
  </main>
}
