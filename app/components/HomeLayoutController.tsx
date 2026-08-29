'use client';

import { useEffect } from 'react';

export const DEFAULT_HOME_LAYOUT = ['wellness-strip','ingredients-band','collection','how','life','trust','closing'];
export const STORAGE_KEY = 'dc-home-layout-v1';

export default function HomeLayoutController() {
  useEffect(() => {
    if (window.location.pathname.startsWith('/admin')) return;
    const apply = () => {
      const main = document.querySelector('main');
      const hero = main?.querySelector('.hero');
      if (!main || !hero) return;
      const nodes = new Map<string, Element>();
      DEFAULT_HOME_LAYOUT.forEach((name) => { const node = main.querySelector(`.${name}`); if (node) nodes.set(name, node); });
      let order = DEFAULT_HOME_LAYOUT;
      try {
        const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
        if (Array.isArray(saved)) {
          const valid = saved.filter((x): x is string => typeof x === 'string' && DEFAULT_HOME_LAYOUT.includes(x));
          order = [...valid, ...DEFAULT_HOME_LAYOUT.filter((x) => !valid.includes(x))];
        }
      } catch {}
      const fragment = document.createDocumentFragment();
      order.forEach((name) => { const node = nodes.get(name); if (node) fragment.appendChild(node); });
      hero.parentNode?.insertBefore(fragment, hero.nextSibling);
    };
    const timer = window.setTimeout(apply, 0);
    window.addEventListener('dc-layout-updated', apply);
    return () => { window.clearTimeout(timer); window.removeEventListener('dc-layout-updated', apply); };
  }, []);
  return null;
}
