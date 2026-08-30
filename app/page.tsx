const products = [
  { name: 'DC ENERGY', sub: 'Daily Energy • Performance', price: '₹699', tone: 'lime', note: '150 g' },
  { name: 'DC WEIGHT GAIN', sub: 'Daily Weight Gainer', price: '₹699', tone: 'amber', note: '150 g' },
  { name: 'DC PLANT PROTEIN', sub: 'Plant Protein • Creatine', price: '₹699', tone: 'lavender', note: '150 g' },
  { name: 'DC PRE-WORKOUT', sub: 'Performance Fuel', price: '₹699', tone: 'coral', note: '150 g' },
  { name: 'DC HYDRATION', sub: 'Daily Hydration Formula', price: '₹699', tone: 'blue', note: '150 g' },
];

const ingredients = [
  ['PEA PROTEIN', 'peas', 'green'], ['MORINGA', 'moringa', 'leaf'], ['OATS', 'oats', 'cream'],
  ['AMLA', 'amla', 'lime'], ['FLAXSEED', 'flax', 'brown'], ['BEETROOT', 'beet', 'red'], ['ASHWAGANDHA', 'ash', 'tan'],
];

const wellnessCategories = [
  ['leaf','DAILY','Everyday nutrition','#edf4d8'],
  ['fit','FIT','Strength & performance','#e5edf5'],
  ['ritual','RITUAL','Daily rituals','#f7e7d8'],
  ['body','BODY','Body wellness','#e7efe4'],
  ['brain','BRAIN','Focus & clarity','#e5eef0'],
  ['sleep','SLEEP','Better sleep','#e9e7f3'],
  ['drop','SUGAR','Sugar balance','#f5e4e5'],
  ['heart','LIPID','Heart health','#f5e1df'],
  ['bone','BONE','Bone strength','#eee5d8'],
  ['flower','BEAUTY','Glow from within','#f4e4eb'],
];

function WellnessVisual({kind}: {kind:string}) {
  const common={width:34,height:34,viewBox:'0 0 48 48',fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round' as const,strokeLinejoin:'round' as const};
  if(kind==='fit') return <svg {...common}><path d="M14 19v10M10 22v4M38 19v10M42 22v4M14 24h24"/><rect x="7" y="19" width="4" height="10" rx="1"/><rect x="37" y="19" width="4" height="10" rx="1"/></svg>;
  if(kind==='ritual') return <svg {...common}><path d="M13 20h22v6c0 6-4 10-11 10S13 32 13 26v-6Z"/><path d="M35 23h3a5 5 0 0 1 0 10h-3M18 14c-2-3 2-4 0-7M25 14c-2-3 2-4 0-7"/></svg>;
  if(kind==='body') return <svg {...common}><circle cx="24" cy="10" r="4"/><path d="M24 14v13M16 21l8-3 8 3M18 39l6-12 6 12M14 26l4 4M34 26l-4 4"/></svg>;
  if(kind==='brain') return <svg {...common}><path d="M20 37a6 6 0 0 1-5-8 6 6 0 0 1 1-11 7 7 0 0 1 13-3 7 7 0 0 1 13 3 6 6 0 0 1 1 11 6 6 0 0 1-5 8H20Z"/><path d="M24 17v18M18 22h6M24 28h6M30 18v6"/></svg>;
  if(kind==='sleep') return <svg {...common}><path d="M32 10a15 15 0 1 0 6 28 16 16 0 0 1-6-28Z"/><path d="M35 12v6M32 15h6"/></svg>;
  if(kind==='drop') return <svg {...common}><path d="M24 7S12 21 12 29a12 12 0 0 0 24 0C36 21 24 7 24 7Z"/><path d="M18 30a6 6 0 0 0 6 6"/></svg>;
  if(kind==='heart') return <svg {...common}><path d="M24 38S9 29 9 19c0-5 6-8 10-4l5 5 5-5c4-4 10-1 10 4 0 10-15 19-15 19Z"/><path d="M8 24h7l3-6 5 12 4-7h8"/></svg>;
  if(kind==='bone') return <svg {...common}><path d="M14 14a5 5 0 1 0-7 7l20 20a5 5 0 1 0 7-7L14 14Z"/><path d="M12 12l5 5M31 31l5 5"/></svg>;
  if(kind==='flower') return <svg {...common}><circle cx="24" cy="24" r="4"/><path d="M24 20c-7-9-15-2-9 4-6 6 2 13 9 4 7 9 15 2 9-4 6-6-2-13-9-4Z"/><path d="M24 28v10"/></svg>;
  return <svg {...common}><path d="M24 40S10 31 10 20a8 8 0 0 1 14-5 8 8 0 0 1 14 5c0 11-14 20-14 20Z"/><path d="M24 9v8M20 13h8"/></svg>;
}

function Pouch({ product, hero = false }: { product: typeof products[number]; hero?: boolean }) {
  return <div className={`pouch ${product.tone} ${hero ? 'hero-pouch' : ''}`}>
    <div className="pouch-top">DC <span>DAILY CONSUMABLES</span></div>
    <div className="pouch-name">{product.name.replace('DC ', '')}</div>
    <div className="pouch-sub">{product.sub}</div>
    <div className="pouch-icons"><span>◈</span><span>♧</span><span>◌</span></div>
    <div className="pouch-foot">{product.note} • VEGAN</div>
  </div>;
}

export default function Home() {
  return <main>
    <div className="announcement"><span>✦ NO CHEMICALS. NO PRESERVATIVES. PURE HERBAL POWDER.</span><i/> <span>🌿 PURE VEGAN</span><i/> <span>♡ MADE IN INDIA</span><i/> <span>FREE SHIPPING ON ORDERS ABOVE ₹999</span></div>
    <header className="nav wrap">
      <a className="brand" href="#top"><strong>DC</strong><span>DAILY<br/>CONSUMABLES</span></a>
      <nav><a className="active" href="#top">Home</a><a href="#collection">Shop</a><a href="#find">Find My Flex</a><a href="#story">Our Story</a><a href="#ingredients">Ingredients</a><a href="#contact">Contact</a></nav>
      <div className="actions"><button aria-label="Search">⌕</button><button aria-label="Account">♙</button><button aria-label="Cart" className="cart">🛒<b>0</b></button><button className="menu" aria-label="Menu">☰</button></div>
    </header>
    <section className="hero wrap" id="top">
      <div className="hero-copy"><p className="eyebrow">PLANT-BASED • HERBAL • DAILY WELLNESS</p><h1>YOUR DAILY<br/><em>FLEX.</em></h1><p className="lead">Whatever your day needs,<br/>there’s a DC for that.</p><div className="hero-ctas"><a className="btn primary" href="#collection">SHOP THE COLLECTION <span>→</span></a><a className="btn outline" href="#find">FIND MY FLEX <span>✦</span></a></div></div>
      <div className="hero-stage"><div className="blob blob-one"/><div className="blob blob-two"/><div className="ingredient-scene"><span className="bowl pea">●●●</span><span className="bowl greenpow">DC</span><span className="bowl berry">● ●</span><span className="leaf">⌁</span></div><div className="hero-pouches"><Pouch product={products[2]} /><Pouch product={products[0]} hero /><Pouch product={products[3]} /><Pouch product={products[4]} /></div><div className="hero-shaker">DC<span>YOUR<br/>DAILY<br/>FLEX.</span></div></div>
      <div className="hero-proof"><span>♧ <b>PLANT-BASED</b></span><span>◈ <b>PURE INGREDIENTS</b></span><span>♧ <b>NO PRESERVATIVES</b></span><span>⌁ <b>NO CHEMICALS</b></span><span>♡ <b>MADE IN INDIA</b></span></div>
    </section>
    <section className="wellness-strip wrap" id="story" aria-label="Shop by wellness goal" style={{marginTop:'12px',marginBottom:'20px'}}>
      <div style={{display:'flex',alignItems:'end',justifyContent:'space-between',gap:'16px',marginBottom:'10px'}}>
        <div><p className="eyebrow" style={{marginBottom:'2px'}}>SHOP BY NEED</p><h2 style={{margin:0,fontSize:'clamp(22px,3vw,34px)',lineHeight:1}}>YOUR DAILY <em>FLEX.</em></h2></div>
        <a className="text-link" href="#collection" style={{whiteSpace:'nowrap'}}>VIEW ALL →</a>
      </div>
      <div className="wellness-track" style={{display:'flex',gap:'10px',overflowX:'auto',padding:'2px 2px 6px',scrollbarWidth:'none'}}>
        {wellnessCategories.map(([kind,name,sub,bg]) => <a href="#collection" key={name} className="wellness-card" style={{flex:'0 0 auto',width:'82px',textDecoration:'none',color:'inherit',textAlign:'center'}}>
          <div className="wellness-visual" style={{height:'62px',borderRadius:'16px',background:bg,display:'flex',alignItems:'center',justifyContent:'center',color:'#26301d',boxShadow:'inset 0 0 0 1px rgba(30,35,20,.07),0 5px 12px rgba(40,35,20,.05)',transition:'transform .2s ease'}}><WellnessVisual kind={kind}/></div>
          <b style={{display:'block',fontSize:'9px',letterSpacing:'.06em',marginTop:'7px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{name}</b>
          <span style={{display:'block',fontSize:'8px',lineHeight:1.25,opacity:.6,marginTop:'2px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{sub}</span>
        </a>)}
      </div>
    </section>
    <section className="collection wrap" id="collection"><div className="section-head"><div><p className="eyebrow">THE DC COLLECTION</p><h2>PICK YOUR <em>DAILY FLEX.</em></h2><p>19 products. One daily wellness system.</p></div><a className="btn dark" href="#collection">VIEW ALL PRODUCTS →</a></div><div className="product-grid">{products.map(product => <article className={`product-card ${product.tone}`} key={product.name}><div className="product-art">
  {product.name === 'DC PLANT PROTEIN' ? (
    <img
      src="/plant-protein-banner.PNG"
      alt="DC Plant Protein with Creatine"
      className="plant-protein-banner"
    />
  ) : (
    <Pouch product={product}/>
  )}
</div><h3>{product.name}</h3><p>{product.sub}</p><div className="price-row"><strong>{product.note}</strong><b>{product.price}</b></div><button>ADD TO CART <span>🛒</span></button></article>)}</div></section>
    <section className="ingredients-band" id="ingredients"><div className="wrap ingredient-layout"><div className="ingredient-copy"><p className="eyebrow">WHAT GOES IN</p><h2>REAL INGREDIENTS.<br/><em>REAL NUTRITION.</em></h2><p>Whole-food ingredients, purposeful botanicals and plant-based nutrition—presented clearly.</p><a className="btn light" href="#ingredients">SEE ALL INGREDIENTS →</a></div><div className="ingredient-grid">{ingredients.map(([name, cls, tone]) => <div className="ingredient" key={name}><span className={`ingredient-orb ${tone}`}>{cls === 'peas' ? '●●●' : cls === 'moringa' ? '✦' : cls === 'oats' ? '◌' : cls === 'amla' ? '●' : cls === 'flax' ? '•••' : cls === 'beet' ? '◉' : '⌁'}</span><b>{name}</b></div>)}</div></div></section>
    <section className="how wrap"><div className="how-title"><p className="eyebrow">HOW TO USE</p><h2>Simple.<br/><em>Quick.</em><br/>Effective.</h2></div><div className="steps"><div><b>01</b><h3>SCOOP</h3><p>Take 1–2 scoops of your DC powder.</p></div><div><b>02</b><h3>MIX</h3><p>Add 200–300 ml water or milk.</p></div><div><b>03</b><h3>SHAKE</h3><p>Shake well until smooth.</p></div><div><b>04</b><h3>DRINK</h3><p>Fuel your day. Feel the difference.</p></div></div></section>
    <section className="life wrap"><div className="life-copy"><p className="eyebrow">BUILT FOR REAL LIFE</p><h2>Not just the gym.<br/><em>Your whole day.</em></h2><p>Morning routines, work days, workouts, travel and everything between.</p><a className="btn primary" href="#find">FIND MY FLEX →</a></div><div className="life-collage"><div className="life-card work">WORK<span>Clean nutrition<br/>to stay sharp.</span></div><div className="life-card gym">MOVE<span>Fuel performance.<br/>Push limits.</span></div><div className="life-card night">REST<span>Recover. Reset.<br/>Repeat.</span></div></div></section>
    <section className="trust"><div className="wrap trust-grid"><div><b>10,000+</b><span>Happy Customers</span></div><div><b>19</b><span>Targeted Formulas</span></div><div><b>100%</b><span>Clean Ingredients</span></div><div><b>LAB TESTED</b><span>Every Batch</span></div><div><b>🇮🇳 MADE IN INDIA</b><span>With love</span></div></div></section>
    <section className="closing wrap"><div><p className="eyebrow">DC | DAILY CONSUMABLES</p><h2>YOUR DAILY <em>FLEX.</em></h2><p>Plant-based. Herbal. No unnecessary BS.</p></div><div className="closing-products">{products.slice(0,4).map(p => <Pouch key={p.name} product={p}/>)}</div></section>
    <footer id="contact"><div className="wrap footer-grid"><div className="footer-brand"><a className="brand" href="#top"><strong>DC</strong><span>DAILY<br/>CONSUMABLES</span></a><p>YOUR DAILY FLEX.<br/>Plant-based. Herbal.<br/>Made for real life.</p><div className="social">◎ ◉ ◌ ✕</div></div><div><b>SHOP</b><a href="#collection">All Products</a><a href="#collection">The Daily 5</a><a href="#collection">Daily Wellness</a><a href="#collection">Performance</a></div><div><b>SUPPORT</b><a href="#contact">FAQ</a><a href="#contact">Shipping & Delivery</a><a href="#contact">Returns & Refunds</a><a href="#contact">Track Order</a></div><div><b>COMPANY</b><a href="#story">Our Story</a><a href="#ingredients">Ingredients</a><a href="#find">Find My Flex</a><a href="#contact">Contact</a></div><div className="newsletter"><b>STAY UPDATED</b><p>New drops, wellness ideas and DC news.</p><div><input placeholder="Your email address"/><button>→</button></div></div></div><div className="footer-bottom wrap"><span>© 2026 DC Daily Consumables. All rights reserved.</span><span>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</span></div></footer>
  </main>;
}
