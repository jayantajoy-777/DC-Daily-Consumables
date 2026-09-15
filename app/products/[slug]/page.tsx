'use client';

import { useEffect } from 'react';
import { useParams } from 'next/navigation';

const productNames: Record<string, string> = {
  'dc-energy': 'DC ENERGY',
  'dc-weight-gain': 'DC WEIGHT GAIN',
  'dc-plant-protein': 'DC PLANT PROTEIN',
  'dc-pre-workout': 'DC PRE-WORKOUT',
  'dc-hydration': 'DC HYDRATION',
};

export default function ProductPage() {
  const params = useParams<{ slug: string }>();

  useEffect(() => {
    const name = productNames[params.slug];
    if (!name) return;
    const timer = window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent('dc:open-product', { detail: name }));
    }, 60);
    return () => window.clearTimeout(timer);
  }, [params.slug]);

  return <div aria-hidden="true" />;
}
