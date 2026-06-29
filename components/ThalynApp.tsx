'use client';
import { useState, useEffect, useRef } from 'react';
import { TopBar } from './TopBar';
import {
  StatusBar, Hero, Ribbon, Values, Story,
  Products, Collections, Craft, LabGrown,
  How, Service, Reviews, Locations, Contact,
  Footer, Drawer, Dock,
} from './Sections';
import type { Lang } from '@/lib/i18n';

const HERO_IMGS: Record<string, string> = {
  bride:   '/images/boutiqueHero.jpeg',
  ring:    '/images/heroRing.jpeg',
  couple:  '/images/reviewCouple.jpeg',
  atelier: '/images/brand2.jpeg',
};

function shade(hex: string, percent: number): string {
  const n = parseInt(hex.replace('#', ''), 16);
  let r = (n >> 16) & 0xff, g = (n >> 8) & 0xff, b = n & 0xff;
  const adj = (c: number) => {
    const v = percent >= 0 ? c + (255 - c) * (percent / 100) : c + c * (percent / 100);
    return Math.max(0, Math.min(255, Math.round(v)));
  };
  r = adj(r); g = adj(g); b = adj(b);
  return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
}

export default function ThalynApp() {
  const [lang, setLang] = useState<Lang>('en');
  const [accent, setAccent] = useState('#5A1F21');
  const [showPrice] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);

  // Apply CSS token
  useEffect(() => {
    document.documentElement.style.setProperty('--oxblood', accent);
    document.documentElement.style.setProperty('--oxblood-d', shade(accent, -45));
  }, [accent]);

  // Set lang attribute
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  // Scroll listener
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const onScroll = () => setScrolled(el.scrollTop > 100);
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="stage">
      <div className="phone">
        <StatusBar dark={!scrolled}/>
        <div className="phone__scroll" ref={scrollerRef}>
          <TopBar
            lang={lang}
            setLang={setLang}
            onMenu={() => setMenuOpen(true)}
            scrolled={scrolled}
          />
          <Hero lang={lang} heroImg={HERO_IMGS.bride}/>
          <Ribbon lang={lang}/>
          <Values lang={lang}/>
          <Story lang={lang}/>
          <Products lang={lang} showPrice={showPrice}/>
          <Collections lang={lang}/>
          <Craft lang={lang}/>
          <LabGrown lang={lang}/>
          <How lang={lang}/>
          <Service lang={lang}/>
          <Reviews lang={lang}/>
          <Locations lang={lang}/>
          <Contact lang={lang}/>
          <Footer lang={lang}/>
        </div>
        <Dock lang={lang}/>
        <Drawer
          open={menuOpen}
          onClose={() => setMenuOpen(false)}
          lang={lang}
          setLang={setLang}
        />
      </div>
    </div>
  );
}
