'use client'

import { useEffect, useState } from 'react'

const lime = '#b8ef00'

const slides = [
  { kicker: 'PLANT-BASED • HERBAL • THE DC COLLECTION', title: ['PURE VEGAN', 'PROTEIN', 'WITH CREATINE'], copy: 'Build lean muscle. Get stronger. Every. Single. Day.', bg: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=2200&q=88', product: 'PLANT PROTEIN' },
  { kicker: 'NATURAL • DAILY ENERGY', title: ['NATURAL', 'ENERGY', 'THAT LASTS'], copy: 'Plant-powered fuel for your everyday movement.', bg: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=2200&q=88', product: 'ENERGY' },
  { kicker: 'MENTAL CLARITY • DAILY NUTRITION', title: ['BRAIN BOOSTER', 'FOR KIDS &', 'ADULTS'], copy: 'Purposeful nutrition for a sharper daily routine.', bg: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=2200&q=88', product: 'BRAIN / FOCUS' },
  { kicker: 'HYDRATION • PERFORMANCE', title: ['STAY HYDRATED.', 'PERFORM', 'BETTER.'], copy: 'Simple hydration designed for active everyday life.', bg: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=2200&q=88', product: 'HYDRATION' },
  { kicker: 'BALANCE • PLANT NUTRITION', title: ['SUGAR SUPPORT', 'NATURALLY'], copy: 'Everyday plant-powered nutrition without unnecessary extras.', bg: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=2200&q=88', product: 'GLYCO' },
  { kicker: 'WHOLE BODY • EVERY DAY', title: ['WHOLE BODY', 'WELLNESS', 'EVERY DAY'], copy: 'Build a simple daily wellness ritual around real ingredients.', bg: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=2200&q=88', product: 'WELLNESS' },
  { kicker: 'THE COMPLETE DC RANGE', title: ['THE COMPLETE', 'DC RANGE', 'FOR YOU'], copy: '19 products. One daily wellness system.', bg: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=2200&q=88', product: 'THE DC COLLECTION' },
]

const featureCards = [
  ['01','PURE VEGAN','PROTEIN','WITH CREATINE','photo-1534438327276-14e5300c3a48'],
  ['02','NATURAL','ENERGY','THAT LASTS','photo-1571019613454-1cb2f99b2d8b'],
  ['03','BRAIN BOOSTER','FOR KIDS &','ADULTS','photo-1505751172876-fa1923c5c528'],
  ['04','STAY HYDRATED','PERFORM','BETTER','photo-1523362628745-0c100150b504'],
  ['05','SUGAR SUPPORT','NATURALLY','','photo-1547592180-85f173990554'],
  ['06','WHOLE BODY','WELLNESS','EVERY DAY','photo-1518611012118-696072aa579a'],
  ['07','THE COMPLETE','DC RANGE','FOR YOU','photo-1583454110551-21f2fa2afe61'],
]

const products = [
  ['DC ENERGY','Natural Energy','₹699','ENERGY','#f0a000'],
  ['DC WEIGHT GAIN','Weight Support','₹699','WEIGHT GAIN','#e3bd00'],
  ['DC PLANT PROTEIN','Muscle Building','₹699','PLANT PROTEIN','#b8ef00'],
  ['DC PRE-WORKOUT','Performance','₹699','PRE-WORKOUT','#ef3e43'],
  ['DC HYDRATION','Hydration','₹699','HYDRATION','#2b9ee8'],
  ['DC BRAIN / FOCUS','Focus & Memory','₹699','BRAIN / FOCUS','#7d6de8'],
  ['DC GLYCO','Sugar Support','₹699','GLYCO','#c7e700'],
  ['DC CALM','Daily Calm','₹699','CALM','#8d7bdc'],
  ['DC SLEEP / NIGHT','Night Ritual','₹699','SLEEP / NIGHT','#304d9a'],
  ['DC DIGESTION','Daily Fibre','₹699','DIGESTION','#55a83d'],
  ['DC IMMUNITY','Everyday Immunity','₹699','IMMUNITY','#d9a900'],
  ['DC BEAUTY','Beauty From Within','₹699','BEAUTY','#d56a9c'],
  ['DC JOINT','Mobility Support','₹699','JOINT','#d18b24'],
  ['DC LIPID','Lipid Support','₹699','LIPID','#38a7c7'],
  ['DC BONE','Bone Nutrition','₹699','BONE','#e7d6b1'],
  ['DC METABOLISM / FIBRE','Daily Fibre','₹699','METABOLISM','#71b84a'],
  ['DC CRAVING KILLER','Satiety Support','₹699','CRAVING KILLER','#b75c45'],
  ['DC MEAL REPLACEMENT','Convenient Nutrition','₹699','MEAL REPLACEMENT','#d0a94e'],
  ['DC DAILY PURIFICATION','Plant Nutrition','₹699','DAILY PURIFICATION','#5f9c54'],
]

const categories = [
  ['☼','DAILY','Everyday nutrition','#8ab52d'],['⚡','FIT','Strength & performance','#3977db'],['☕','RITUAL','Daily rituals','#ef6b20'],['♟','BODY','Body wellness','#7046b5'],['✺','MIND','Mental clarity','#267e8d'],['☾','SLEEP','Better sleep','#273a83'],['◉','SUGAR','Sugar support','#dc2b64'],['♡','CHOLESTEROL','Heart health','#a6412d'],['♧','BONE','Bone strength','#925746'],['✧','BEAUTY','Glow from within','#d82a7d']
]

const ingredients = ['PEA PROTEIN','MORINGA','MACA ROOT','FLAXSEED','OATS','AMLA','BEETROOT','ASHWAGANDHA']
const ingredientImages = ['🥣','🌿','🥜','🟤','🌾','🟢','🔴','🌿']

function Logo(){return <div className="brand-logo"><strong>DC</strong><span>DAILY<br/>CONSUMABLES</span></div>}
function Pouch({name,accent}:{name:string;accent:string}){return <div className="pouch" style={{'--accent':accent} as React.CSSProperties}><div className="pouch-dc">DC</div><div className="pouch-brand">DAILY CONSUMABLES</div><div className="pouch-name">{name}</div><div className="pouch-rule"/><div className="pouch-stats">25g&nbsp;&nbsp; 3g&nbsp;&nbsp; 0g</div><div className="pouch-label">PROTEIN&nbsp;&nbsp;&nbsp; CREATINE&nbsp;&nbsp;&nbsp; SUGAR</div></div>}

export default function Home(){
  const [active,setActive]=useState(0)
  useEffect(()=>{const id=window.setInterval(()=>setActive(v=>(v+1)%slides.length),6500);return()=>window.clearInterval(id)},[])
  const slide=slides[active]
  return <main>
    <div className="announcement"><span>NO CHEMICALS. NO PRESERVATIVES. PURE HERBAL POWDER.</span><b>|</b><span>PURE VEGAN 🌿</span></div>
    <header className="site-header"><Logo/><nav><a className="active">Home</a><a>Shop</a><a>Find My Flex</a><a>Our Story</a><a>Blog</a><a>Contact</a></nav><div className="header-actions"><span>⌕</span><span>♙</span><span>🛒<i>0</i></span><span className="hamb">☰</span></div></header>

    <section className="hero-new">
      <div className="hero-image" style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.52) 45%,rgba(0,0,0,.18)),url(${slide.bg})`}}/>
      <button className="hero-arrow left" onClick={()=>setActive((active+slides.length-1)%slides.length)}>‹</button><button className="hero-arrow right" onClick={()=>setActive((active+1)%slides.length)}>›</button>
      <div className="hero-content"><small>{slide.kicker}</small><h1>{slide.title.map((x,i)=><span key={x} className={i===slide.title.length-1?'lime':''}>{x}</span>)}</h1><p>{slide.copy}</p><div><button className="lime-btn">SHOP THE COLLECTION →</button><button className="outline-btn">✦ FIND MY FLEX • DC AI</button><button className="pill-btn">64 INGREDIENTS</button></div></div>
      <div className="hero-product"><div className="product-badge">19 PRODUCTS</div><div className="collection-card"><span>DC</span><b>THE DC<br/>COLLECTION</b><small>YOUR DAILY FLEX</small></div></div>
      <div className="hero-dots">{slides.map((_,i)=><button className={i===active?'on':''} key={i} onClick={()=>setActive(i)}/>)}</div>
    </section>

    <section className="standard-grid">
      <div className="standard-card"><small>THE DC STANDARD</small><h2>NO<br/><em>BS.</em></h2><p>Real nutrition.<br/>Real results.<br/>No unnecessary clutter.</p><div className="standard-icons"><span>♧<b>NO CHEMICALS</b></span><span>♢<b>NO PRESERVATIVES</b></span><span>✧<b>NO FILLERS</b></span><span>♻<b>NO ADDITIVES</b></span></div></div>
      <div className="principles">{[['01','PLANT-BASED','Formulas built around plant-based ingredients and everyday nutrition.','🌿'],['02','NO COMPROMISE','No preservatives, no chemicals, no sugar and no colour.','🥑'],['03','REAL SUPERFOOD','The real superfood for your daily need.','🫐'],['04','MADE FOR REAL LIFE','Simple formats that fit real routines and real people.','🧴']].map(x=><article key={x[0]}><small>{x[0]}</small><h3>{x[1]}</h3><p>{x[2]}</p><span>{x[3]}</span></article>)}</div>
    </section>

    <section className="category-rail">{categories.map(c=><button key={c[1]}><span style={{background:c[3]}}>{c[0]}</span><b>{c[1]}</b><small>{c[2]}</small></button>)}</section>

    <section className="stats-bar">{[['♟','10,000+','Happy Customers'],['♨','19','Targeted Formulas'],['♧','100%','Clean Ingredients'],['✓','Made in India','With ❤️']].map(x=><div key={x[1]}><span>{x[0]}</span><b>{x[1]}</b><small>{x[2]}</small></div>)}</section>

    <section className="collection"><div className="collection-head"><div><small>THE DC COLLECTION</small><h2>PICK YOUR <em>DAILY FLEX.</em></h2><p>19 products. One daily wellness system.</p></div><div><button>VIEW ALL →</button><button className="round">‹</button><button className="round">›</button></div></div><div className="product-grid">{products.slice(0,5).map(([name,desc,price,label,accent])=><article key={name}><Pouch name={label} accent={accent}/><h3>{name}</h3><p>{desc}</p><strong>150g <i>|</i> {price}</strong><button>🛒 ADD TO CART</button></article>)}</div></section>

    <section className="feature-rail">{featureCards.map((c,i)=><button className={i===active?'selected':''} key={c[0]} onClick={()=>setActive(i)}><div style={{backgroundImage:`linear-gradient(90deg,rgba(0,0,0,.25),rgba(0,0,0,.1)),url(https://images.unsplash.com/${c[4]}?auto=format&fit=crop&w=700&q=82)`}}><small>{c[0]}</small><b>{c[1]}<br/>{c[2]}<br/>{c[3]}</b></div></button>)}</section>

    <section className="ingredients-section"><div className="ingredient-copy"><small>REAL INGREDIENTS.</small><h2>REAL <em>NUTRITION.</em></h2><p>We use real, whole-food ingredients packed with natural goodness. No shortcuts. Just nature.</p><button>SEE OUR INGREDIENTS →</button></div><div className="ingredient-list">{ingredients.map((x,i)=><div key={x}><span>{ingredientImages[i]}</span><b>{x}</b></div>)}</div></section>

    <section className="how-section"><small>HOW TO USE</small><h2>Simple. Quick. Effective.</h2><div>{[['1','SCOOP','Take 1–2 scoops of DC powder.','🥄'],['2','MIX','Add 250–300ml water or milk.','🥤'],['3','SHAKE','Shake well until smooth.','🧴'],['4','DRINK','Fuel your day. Feel the difference.','⚡']].map(x=><article key={x[0]}><strong>{x[0]}</strong><span>{x[3]}</span><b>{x[1]}</b><p>{x[2]}</p></article>)}</div></section>

    <section className="community"><div><small>FUELING REAL PEOPLE.</small><h2>REAL <em>RESULTS.</em></h2><p>@dcdailyflex</p><button>JOIN THE COMMUNITY →</button></div><div className="people-grid">{['photo-1534438327276-14e5300c3a48','photo-1517836357463-d25dfeac3438','photo-1571019614242-c5c5dee9f50b','photo-1518611012118-696072aa579a','photo-1583454110551-21f2fa2afe61'].map(x=><img key={x} src={`https://images.unsplash.com/${x}?auto=format&fit=crop&w=700&q=82`} alt="DC community"/>)}</div></section>

    <section className="final-cta"><div><small>CLEAN NUTRITION.</small><h2>REAL PERFORMANCE.<br/><em>THIS IS YOUR DAILY FLEX.</em></h2><p>NO SUGAR &nbsp; NO CHEMICALS &nbsp; NO COLOURS &nbsp; NO PRESERVATIVES &nbsp; PURE VEGAN</p><button>SHOP THE DC RANGE →</button></div><div className="final-pouches">{products.slice(0,6).map(([name,, ,label,accent])=><Pouch key={name} name={label} accent={accent}/>)}</div></section>

    <footer><div><Logo/><b>YOUR DAILY FLEX.</b><p>Plant-based. Herbal.<br/>No unnecessary BS.</p><small>© 2026 DC DAILY CONSUMABLES. ALL RIGHTS RESERVED.</small></div><div><b>SHOP</b><p>All Products<br/>The Daily 5<br/>Shop by Goal<br/>New Arrivals<br/>Best Sellers</p></div><div><b>SUPPORT</b><p>FAQs<br/>Shipping & Delivery<br/>Returns & Refunds<br/>Track Your Order<br/>Contact Us</p></div><div><b>ABOUT DC</b><p>Our Story<br/>Ingredient Philosophy<br/>Blog<br/>DC Community<br/>Rewards</p></div><div><b>STAY UPDATED</b><p>Get exclusive offers, new launches and DC tips.</p><input placeholder="Enter your email"/></div></footer>
  </main>
}
