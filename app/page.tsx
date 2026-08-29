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
  ['☀️', 'DAILY', 'Everyday nutrition', 'linear-gradient(135deg,#fff3c9,#f6d97c)'],
  ['🏋️', 'FIT', 'Strength & performance', 'linear-gradient(135deg,#e1ebff,#a9c4f4)'],
  ['☕', 'RITUAL', 'Daily rituals', 'linear-gradient(135deg,#ffe3d5,#f4b28f)'],
  ['🧘', 'BODY', 'Body wellness', 'linear-gradient(135deg,#e6ddf3,#c4acd9)'],
  ['🧠', 'BRAIN', 'Focus & clarity', 'linear-gradient(135deg,#dceff1,#a7d5da)'],
  ['🌙', 'SLEEP', 'Better sleep', 'linear-gradient(135deg,#e4e1f3,#b8b4dc)'],
  ['💧', 'SUGAR', 'Sugar management', 'linear-gradient(135deg,#f9dfe6,#efacbd)'],
  ['♡', 'CHOLESTEROL', 'Heart health', 'linear-gradient(135deg,#f8dedd,#efaaa5)'],
  ['🦴', 'BONE', 'Bone strength', 'linear-gradient(135deg,#eee2d4,#d2b493)'],
  ['🌸', 'BEAUTY', 'Glow from within', 'linear-gradient(135deg,#f7dce9,#e9b0cc)'],
];

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
      <div style={{display:'flex',gap:'8px',overflowX:'auto',paddingBottom:'4px',scrollbarWidth:'none'}}>
        {wellnessCategories.map(([icon,name,sub,bg]) => <a href="#collection" key={name} style={{flex:'0 0 auto',width:'82px',textDecoration:'none',color:'inherit'}}>
          <div style={{height:'60px',borderRadius:'14px',background:bg,display:'flex',alignItems:'center',justifyContent:'center',fontSize:'24px',fontWeight:700,boxShadow:'inset 0 0 0 1px rgba(0,0,0,.06)'}}>{icon}</div>
          <b style={{display:'block',fontSize:'9px',letterSpacing:'.07em',marginTop:'6px',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}>{name}</b>
          <span style={{display:'block',fontSize:'8px',lineHeight:1.2,opacity:.62,marginTop:'2px'}}>{sub}</span>
        </a>)}
      </div>
    </section>

    <section className="collection wrap" id="collection"><div className="section-head"><div><p className="eyebrow">THE DC COLLECTION</p><h2>PICK YOUR <em>DAILY FLEX.</em></h2><p>19 products. One daily wellness system.</p></div><a className="btn dark" href="#collection">VIEW ALL PRODUCTS →</a></div><div className="product-grid">{products.map(product => <article className={`product-card ${product.tone}`} key={product.name}><div className="product-art"><Pouch product={product}/></div><h3>{product.name}</h3><p>{product.sub}</p><div className="price-row"><strong>{product.note}</strong><b>{product.price}</b></div><button>ADD TO CART <span>🛒</span></button></article>)}</div></section>

    <section className="ingredients-band" id="ingredients"><div className="wrap ingredient-layout"><div className="ingredient-copy"><p className="eyebrow">WHAT GOES IN</p><h2>REAL INGREDIENTS.<br/><em>REAL NUTRITION.</em></h2><p>Whole-food ingredients, purposeful botanicals and plant-based nutrition—presented clearly.</p><a className="btn light" href="#ingredients">SEE ALL INGREDIENTS →</a></div><div className="ingredient-grid">{ingredients.map(([name, cls, tone]) => <div className="ingredient" key={name}><span className={`ingredient-orb ${tone}`}>{cls === 'peas' ? '●●●' : cls === 'moringa' ? '✦' : cls === 'oats' ? '◌' : cls === 'amla' ? '●' : cls === 'flax' ? '•••' : cls === 'beet' ? '◉' : '⌁'}</span><b>{name}</b></div>)}</div></div></section>

    <section className="how wrap"><div className="how-title"><p className="eyebrow">HOW TO USE</p><h2>Simple.<br/><em>Quick.</em><br/>Effective.</h2></div><div className="steps"><div><b>01</b><h3>SCOOP</h3><p>Take 1–2 scoops of your DC powder.</p></div><div><b>02</b><h3>MIX</h3><p>Add 200–300 ml water or milk.</p></div><div><b>03</b><h3>SHAKE</h3><p>Shake well until smooth.</p></div><div><b>04</b><h3>DRINK</h3><p>Fuel your day. Feel the difference.</p></div></div></section>

    <section className="life wrap"><div className="life-copy"><p className="eyebrow">BUILT FOR REAL LIFE</p><h2>Not just the gym.<br/><em>Your whole day.</em></h2><p>Morning routines, work days, workouts, travel and everything between.</p><a className="btn primary" href="#find">FIND MY FLEX →</a></div><div className="life-collage"><div className="life-card work">WORK<span>Clean nutrition<br/>to stay sharp.</span></div><div className="life-card gym">MOVE<span>Fuel performance.<br/>Push limits.</span></div><div className="life-card night">REST<span>Recover. Reset.<br/>Repeat.</span></div></div></section>

    <section className="trust"><div className="wrap trust-grid"><div><b>10,000+</b><span>Happy Customers</span></div><div><b>19</b><span>Targeted Formulas</span></div><div><b>100%</b><span>Clean Ingredients</span></div><div><b>LAB TESTED</b><span>Every Batch</span></div><div><b>🇮🇳 MADE IN INDIA</b><span>With love</span></div></div></section>

    <section className="closing wrap"><div><p className="eyebrow">DC | DAILY CONSUMABLES</p><h2>YOUR DAILY <em>FLEX.</em></h2><p>Plant-based. Herbal. No unnecessary BS.</p></div><div className="closing-products">{products.slice(0,4).map(p => <Pouch key={p.name} product={p}/>)}</div></section>

    <footer id="contact"><div className="wrap footer-grid"><div className="footer-brand"><a className="brand" href="#top"><strong>DC</strong><span>DAILY<br/>CONSUMABLES</span></a><p>YOUR DAILY FLEX.<br/>Plant-based. Herbal.<br/>Made for real life.</p><div className="social">◎ ◉ ◌ ✕</div></div><div><b>SHOP</b><a href="#collection">All Products</a><a href="#collection">The Daily 5</a><a href="#collection">Daily Wellness</a><a href="#collection">Performance</a></div><div><b>SUPPORT</b><a href="#contact">FAQ</a><a href="#contact">Shipping & Delivery</a><a href="#contact">Returns & Refunds</a><a href="#contact">Track Order</a></div><div><b>COMPANY</b><a href="#story">Our Story</a><a href="#ingredients">Ingredients</a><a href="#find">Find My Flex</a><a href="#contact">Contact</a></div><div className="newsletter"><b>STAY UPDATED</b><p>New drops, wellness ideas and DC news.</p><div><input placeholder="Your email address"/><button>→</button></div></div></div><div className="footer-bottom wrap"><span>© 2026 DC Daily Consumables. All rights reserved.</span><span>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</span></div></footer>
  </main>;
}
