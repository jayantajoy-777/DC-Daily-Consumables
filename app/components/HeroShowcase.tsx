'use client';

import { useEffect } from 'react';

export default function HeroShowcase() {
  useEffect(() => {
    const placeBanner = () => {
      const banner = document.querySelector<HTMLElement>('#visual-hero');
      const wellness = document.querySelector<HTMLElement>('.wellness-strip');
      if (!banner || !wellness || !wellness.parentNode) return;
      wellness.parentNode.insertBefore(banner, wellness.nextSibling);
    };

    const timer = window.setTimeout(placeBanner, 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="wrap dc-showcase" id="visual-hero" aria-label="DC Plant Protein visual banner">
      <div className="dc-showcase-inner">
        <img
          className="dc-protein-banner-image"
          src="/plant-protein-banner.PNG"
          alt="DC Plant Protein with Creatine — Performance and Recovery"
        />
      </div>
      <style>{`
        .dc-showcase {
          width:100%;
          margin:0 auto 28px;
          position:relative;
          z-index:2;
        }
        .dc-showcase-inner {
          width:100%;
          aspect-ratio:2.45 / 1;
          overflow:hidden;
          border-radius:28px;
          border:1px solid #607b20;
          background:#050805;
          box-shadow:0 12px 30px rgba(35,45,20,.10);
        }
        .dc-protein-banner-image {
          display:block;
          width:100%;
          height:100%;
          object-fit:cover;
          object-position:center center;
        }
        @media(max-width:760px){
          .dc-showcase {
            width:calc(100% - 44px);
            margin:0 auto 28px;
          }
          .dc-showcase-inner {
            aspect-ratio:2.35 / 1;
            border-radius:22px;
          }
        }
      `}</style>
    </section>
  );
}
