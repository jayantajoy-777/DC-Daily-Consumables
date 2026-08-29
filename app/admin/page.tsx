'use client';

import { DragEvent, useEffect, useState } from 'react';
import './admin.css';

const KEY = 'dc-home-layout-v1';
const DEFAULT = ['wellness-strip','ingredients-band','collection','how','life','trust','closing'];
const META: Record<string,{title:string;desc:string}> = {
  'wellness-strip': { title:'Shop by Need', desc:'Daily, Fit, Ritual, Body and wellness goals' },
  'ingredients-band': { title:'The DC Standard', desc:'Real Ingredients. Real Nutrition.' },
  collection: { title:'DC Collection', desc:'Pick Your Daily Flex — products' },
  how: { title:'How to Use', desc:'Simple, Quick, Effective' },
  life: { title:'Built for Real Life', desc:'Not just the gym — your whole day' },
  trust: { title:'Trust Bar', desc:'Customers, formulas, ingredients and testing' },
  closing: { title:'DC Closing', desc:'Final brand statement and product showcase' },
};

export default function AdminPage(){
  const [order,setOrder] = useState(DEFAULT);
  const [drag,setDrag] = useState<string|null>(null);
  const [saved,setSaved] = useState(false);

  useEffect(()=>{ try { const x=JSON.parse(localStorage.getItem(KEY)||'null'); if(Array.isArray(x)) setOrder([...x.filter((v:string)=>DEFAULT.includes(v)),...DEFAULT.filter(v=>!x.includes(v))]); } catch {} },[]);

  const move=(from:string,to:string)=>{
    if(from===to) return;
    const next=[...order]; const a=next.indexOf(from); const b=next.indexOf(to);
    if(a<0||b<0) return; next.splice(a,1); next.splice(b,0,from); setOrder(next);
  };
  const save=()=>{ localStorage.setItem(KEY,JSON.stringify(order)); window.dispatchEvent(new Event('dc-layout-updated')); setSaved(true); setTimeout(()=>setSaved(false),1800); };
  const reset=()=>{ localStorage.removeItem(KEY); setOrder(DEFAULT); window.dispatchEvent(new Event('dc-layout-updated')); };
  const onDrop=(e:DragEvent<HTMLDivElement>,target:string)=>{ e.preventDefault(); if(drag) move(drag,target); setDrag(null); };

  return <main className="editor-page">
    <div className="editor-top"><div><p className="kicker">DC • DAILY CONSUMABLES</p><h1>Homepage Editor</h1><p className="sub">Drag sections into the order you want. Your homepage layout is saved on this device.</p></div><a href="/" className="preview">VIEW LIVE SITE ↗</a></div>
    <div className="editor-note"><b>Visual layout mode</b><span>Move whole sections — no code required.</span></div>
    <div className="editor-list">
      {order.map((id,i)=><div key={id} className={`editor-row ${drag===id?'dragging':''}`} draggable onDragStart={()=>setDrag(id)} onDragOver={(e)=>e.preventDefault()} onDrop={(e)=>onDrop(e,id)}>
        <span className="grip">⋮⋮</span><span className="num">{String(i+1).padStart(2,'0')}</span><div className="copy"><b>{META[id].title}</b><span>{META[id].desc}</span></div><span className="drag-label">DRAG</span>
      </div>)}
    </div>
    <div className="editor-actions"><button className="save" onClick={save}>SAVE & UPDATE HOMEPAGE →</button><button className="reset" onClick={reset}>RESET DEFAULT</button>{saved&&<span className="saved">✓ Saved</span>}</div>
    <p className="editor-foot">Tip: put <b>The DC Standard</b> directly below <b>Shop by Need</b> to match your current target reference.</p>
  </main>;
}
