'use client';
import { useEffect, useState } from 'react';

const slides = [
  {k:'GYM MODE',a:'SHOW UP.',b:'GO HARD.',d:'Built for the days you train, push and keep moving.',cta:'SHOP PERFORMANCE',bg:'#e8ddcf',orb:'#d1e2ae',accent:'#c7e33a',pack:'PLANT PROTEIN',note:'PEA • RICE • CREATINE',image:'https://images.pexels.com/photos/6550840/pexels-photo-6550840.jpeg?auto=compress&cs=tinysrgb&w=1800',pos:'center',proof:'STRENGTH • TRAINING • PERFORMANCE'},
  {k:'EVERYDAY YOU',a:'MAKE IT',b:'DAILY.',d:'Simple nutrition for mornings, work days and everything between.',cta:'EXPLORE DAILY',bg:'#f2dfcf',orb:'#ead0b8',accent:'#8eae1c',pack:'ENERGY',note:'OATS • BANANA • DATES',image:'https://images.pexels.com/photos/8845082/pexels-photo-8845082.jpeg?auto=compress&cs=tinysrgb&w=1800',pos:'center',proof:'MORNING • WORK • EVERYDAY'},
  {k:'ATHLETE MODE',a:'BUILT TO',b:'PERFORM.',d:'For runners, athletes and people who expect more from their day.',cta:'SHOP PERFORMANCE',bg:'#dfe9df',orb:'#c6d9ba',accent:'#b7d82b',pack:'PRE-WORKOUT',note:'BEETROOT • CITRUS • AMINO',image:'https://images.pexels.com/photos/5961848/pexels-photo-5961848.jpeg?auto=compress&cs=tinysrgb&w=1800',pos:'center',proof:'RUN • TRAIN • COMPETE'},
  {k:'THE DC COLLECTION',a:'YOUR DAILY',b:'FLEX.',d:'A complete visual introduction to the DC system — products made for different moments of your day.',cta:'SHOP THE COLLECTION',bg:'#f1e2c8',orb:'#d9c08e',accent:'#d6e34a',pack:'THE COLLECTION',note:'19 PRODUCTS • ONE SYSTEM',image:'https://images.pexels.com/photos/7801530/pexels-photo-7801530.jpeg?auto=compress&cs=tinysrgb&w=1800',pos:'center',proof:'19 PRODUCTS • DAILY WELLNESS • DC'},
  {k:'HYDRATION',a:'HYDRATE',b:'YOUR DAY.',d:'From training sessions to busy afternoons, keep hydration part of the routine.',cta:'SHOP HYDRATION',bg:'#dcecef',orb:'#a9d7d5',accent:'#53b9d7',pack:'HYDRATION',note:'COCONUT WATER • ELECTROLYTES',image:'https://images.pexels.com/photos/4164764/pexels-photo-4164764.jpeg?auto=compress&cs=tinysrgb&w=1800',pos:'center',proof:'HYDRATE • MOVE • RECOVER'},
  {k:'WELLNESS RITUAL',a:'SLOW DOWN.',b:'RESET.',d:'Wellness is also recovery, calm, sleep and making space for yourself.',cta:'EXPLORE WELLNESS',bg:'#e5dff0',orb:'#c9bedf',accent:'#8eae1c',pack:'CALM',note:'HERBAL • DAILY RITUAL',image:'https://images.pexels.com/photos/7520205/pexels-photo-7520205.jpeg?auto=compress&cs=tinysrgb&w=1800',pos:'center',proof:'CALM • RECOVER • RESET'},
  {k:'REAL LIFE. REAL PEOPLE.',a:'WHATEVER',b:'YOUR DAY.',d:'Gym people. Athletes. Busy people. Everyday people. DC fits the whole day.',cta:'FIND MY FLEX',bg:'#ead7ca',orb:'#d4b4a5',accent:'#c7e33a',pack:'DAILY FLEX',note:'PLANT-BASED • HERBAL • VEGAN',image:'https://images.pexels.com/photos/8121667/pexels-photo-8121667.jpeg?auto=compress&cs=tinysrgb&w=1800',pos:'center',proof:'REAL PEOPLE • REAL ROUTINES • DC'},
] as const;

export default function HeroShowcase(){
 const [active,setActive]=useState(0); const s=slides[active];
 useEffect(()=>{const t=window.setInterval(()=>setActive(v=>(v+1)%slides.length),6000);return()=>window.clearInterval(t)},[]);
 return <>
  <style>{`
  /* DC HERO v3 — compact, image-led, no wasted black space */
  .announcement{background:#eee4d5!important;color:#20211c!important;border-bottom:1px solid #ded3c2;height:32px!important;gap:18px!important;white-space:nowrap;overflow:hidden}
  .nav{height:74px!important;background:rgba(251,247,239,.97)!important}
  .dc-showcase{position:absolute;top:106px;left:50%;transform:translateX(-50%);z-index:20}
  .dc-showcase-inner{position:relative;min-height:560px;overflow:hidden;border-radius:0 0 28px 28px;display:grid;grid-template-columns:42% 58%;transition:background .6s ease;box-shadow:0 18px 45px rgba(55,46,31,.10)}
  .dc-showcase-copy{padding:56px 32px 72px 54px;display:flex;flex-direction:column;justify-content:center;z-index:6}
  .dc-showcase h1{font-family:'Space Grotesk',sans-serif;font-size:clamp(52px,5.6vw,84px);line-height:.84;letter-spacing:-.075em;margin:0}
  .dc-showcase h1 em{font-style:normal;color:#8eae1c}
  .dc-showcase-lead{font-size:18px;line-height:1.42;max-width:360px;margin:23px 0}
  .hero-ctas{display:flex;gap:10px;flex-wrap:wrap}
  .btn{padding:13px 18px!important;border-radius:11px!important}
  .dc-showcase-art{position:relative;overflow:hidden;isolation:isolate}
  .dc-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:var(--photo-pos);filter:saturate(.94) contrast(.99)}
  .dc-photo-overlay{position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(25,26,21,.02),rgba(25,26,21,.03) 48%,rgba(25,26,21,.28));}
  .dc-orb{position:absolute;width:410px;height:410px;border-radius:50%;right:-60px;top:45px;opacity:.5;mix-blend-mode:screen;z-index:2}
  .dc-pack{position:absolute;right:18%;bottom:58px;width:164px;height:240px;border-radius:12px 12px 18px 18px;background:#191916;color:#fff;box-shadow:0 24px 40px #2b291d65;padding:16px;transform:rotate(-3deg);z-index:4}
  .dc-pack-logo{font-family:'Space Grotesk';font-size:27px;font-weight:700;letter-spacing:-.08em}.dc-pack-small{font-size:6px;letter-spacing:.15em;font-weight:700}.dc-pack-name{margin-top:86px;font-family:'Space Grotesk';font-size:22px;line-height:.9;font-weight:700}.dc-pack-note{font-size:7px;margin-top:7px;color:#ddd}
  .dc-shaker{position:absolute;right:5%;bottom:42px;width:78px;height:178px;border-radius:16px 16px 28px 28px;background:#252520;color:#fff;box-shadow:0 20px 30px #2226;text-align:center;padding-top:17px;font-family:'Space Grotesk';font-size:22px;z-index:5}.dc-shaker span{display:block;font-size:8px;line-height:1.1;margin-top:32px;color:#c7e33a}
  .dc-scene{position:absolute;left:28px;bottom:32px;width:96px;height:52px;border-radius:0 0 52px 52px;background:#fffdf8cc;box-shadow:0 12px 25px #493b2530;display:flex;align-items:center;justify-content:center;font-size:12px;z-index:4}.dc-leaf{position:absolute;left:92px;bottom:62px;font-size:50px;color:#78932b;transform:rotate(-25deg);z-index:4}
  .dc-strip{position:absolute;bottom:0;left:0;right:0;height:52px;background:#fffdf9e8;backdrop-filter:blur(10px);display:flex;align-items:center;justify-content:space-around;z-index:7;font-size:9px;font-weight:800}
  .dc-dots{position:absolute;right:24px;top:23px;z-index:8;display:flex;gap:6px}.dc-dots button{height:8px;border:0;border-radius:20px;cursor:pointer}
  .dc-arrow{position:absolute;top:50%;transform:translateY(-50%);z-index:8;width:38px;height:38px;border-radius:50%;border:1px solid #17171455;background:#fffdf8dd;cursor:pointer;font-size:21px}.dc-prev{left:18px}.dc-next{right:18px}
  .dc-slide-label{position:absolute;left:22px;top:22px;z-index:8;color:#fff;background:#17171499;backdrop-filter:blur(8px);border:1px solid #ffffff55;border-radius:999px;padding:8px 12px;font-size:8px;font-weight:800;letter-spacing:.12em}
  @media(max-width:760px){
    main > section.hero{display:none}.dc-showcase{top:106px;width:calc(100% - 20px)}
    .dc-showcase-inner{min-height:570px;height:570px;display:block;border-radius:0 0 22px 22px}
    .dc-showcase-art{position:absolute;inset:0;height:100%;z-index:1}
    .dc-photo{object-position:center}.dc-photo-overlay{background:linear-gradient(180deg,rgba(19,20,16,.08) 0%,rgba(19,20,16,.04) 35%,rgba(19,20,16,.60) 100%)}
    .dc-showcase-copy{position:absolute;left:0;right:0;top:0;padding:58px 22px 0;z-index:6;color:#fff;display:block}
    .dc-showcase-copy .eyebrow{color:#dce98c;text-shadow:0 1px 8px #0005}.dc-showcase h1{font-size:55px;line-height:.86;text-shadow:0 2px 15px #0007}.dc-showcase h1 em{color:#c9e43a}.dc-showcase-lead{font-size:16px;line-height:1.35;max-width:330px;margin:17px 0 14px;text-shadow:0 1px 8px #0007}
    .dc-showcase-copy .btn.primary{background:#1b1b17;color:#fff}.dc-showcase-copy .btn.outline{border-color:#fff;background:#fff;color:#1b1b17}.dc-showcase-copy .btn{padding:11px 14px!important;font-size:10px}
    .dc-pack{right:20%;bottom:60px;width:132px;height:194px;padding:13px}.dc-pack-logo{font-size:23px}.dc-pack-name{margin-top:67px;font-size:17px}.dc-shaker{right:5%;bottom:43px;width:65px;height:145px;font-size:19px}.dc-shaker span{font-size:7px;margin-top:27px}.dc-scene{left:8px;bottom:43px;width:75px;height:42px}.dc-leaf{left:48px;bottom:65px;font-size:38px}
    .dc-strip{height:43px;font-size:7.5px}.dc-strip span:nth-child(3){display:none}.dc-dots{right:20px;top:20px}.dc-slide-label{top:18px;left:16px;font-size:7px}.dc-arrow{top:50%;width:34px;height:34px;font-size:18px}.dc-prev{left:10px}.dc-next{right:10px}
  }
  @media(min-width:761px) and (max-width:1100px){.dc-showcase-copy{padding-left:35px}.dc-showcase h1{font-size:58px}.dc-showcase-lead{font-size:16px}.dc-pack{right:16%}}
  `}</style>
  <section className="wrap dc-showcase" id="top"><div className="dc-showcase-inner" style={{background:s.bg}}>
   <div className="dc-showcase-copy"><p className="eyebrow">{s.k}</p><h1>{s.a}<br/><em>{s.b}</em></h1><p className="dc-showcase-lead">{s.d}</p><div className="hero-ctas"><a className="btn primary" href="#collection">{s.cta} <span>→</span></a><a className="btn outline" href="#find">FIND MY FLEX <span>✦</span></a></div></div>
   <div className="dc-showcase-art"><img className="dc-photo" src={s.image} alt={s.k} style={{'--photo-pos':s.pos} as React.CSSProperties}/><div className="dc-photo-overlay"/><div className="dc-orb" style={{background:s.orb}}/><div className="dc-slide-label">DC VISUAL CAMPAIGN • {String(active+1).padStart(2,'0')} / 07</div><div className="dc-scene">● ● ●</div><div className="dc-leaf">⌁</div><div className="dc-pack"><div className="dc-pack-logo">DC</div><div className="dc-pack-small">DAILY CONSUMABLES</div><div className="dc-pack-name" style={{color:s.accent}}>{s.pack}</div><div className="dc-pack-note">{s.note}</div><div style={{position:'absolute',bottom:14,left:16,fontSize:6,color:'#aaa'}}>150 G • VEGAN</div></div><div className="dc-shaker">DC<span>YOUR<br/>DAILY<br/>FLEX.</span></div></div>
   <div className="dc-strip"><span>PLANT-BASED</span><span>PURE INGREDIENTS</span><span>{s.proof}</span><span>MADE IN INDIA</span></div>
   <div className="dc-dots">{slides.map((_,i)=><button key={i} aria-label={`Slide ${i+1}`} onClick={()=>setActive(i)} style={{width:i===active?30:8,background:i===active?'#171714':'#17171455'}}/>)}</div>
   <button className="dc-arrow dc-prev" aria-label="Previous slide" onClick={()=>setActive((active-1+slides.length)%slides.length)}>‹</button><button className="dc-arrow dc-next" aria-label="Next slide" onClick={()=>setActive((active+1)%slides.length)}>›</button>
  </div></section>
 </>;
}
