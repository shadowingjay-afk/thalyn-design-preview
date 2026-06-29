'use client';
import Image from 'next/image';
import { useState, Fragment } from 'react';
import { Ico } from './Icons';
import { useL, type Lang } from '@/lib/i18n';

// ── Helpers ──
function nl(s: string) {
  return s.split('\n').map((line, i, arr) => (
    <span key={i}>{line}{i < arr.length - 1 && <br/>}</span>
  ));
}

// Render a multi-line heading where the LAST line is emphasised (italic serif via .h2 em)
function headEm(s: string) {
  const lines = s.split('\n');
  const last = lines.length - 1;
  return lines.map((line, i) => (
    <span key={i}>
      {i === last ? <em>{line}</em> : <>{line}<br/></>}
    </span>
  ));
}

// ── StatusBar ──
export function StatusBar({ dark = true }: { dark?: boolean }) {
  const c = dark ? '#fff' : 'var(--ink)';
  return (
    <div className={`statusbar ${dark ? 'statusbar--dark' : 'statusbar--light'}`}>
      <span>9:41</span>
      <span style={{display:'inline-flex',gap:6,alignItems:'center'}}>
        <svg width="17" height="11" viewBox="0 0 17 11">
          <rect x="0" y="7" width="2.8" height="4" rx="0.6" fill={c}/>
          <rect x="4.4" y="4.5" width="2.8" height="6.5" rx="0.6" fill={c}/>
          <rect x="8.8" y="2" width="2.8" height="9" rx="0.6" fill={c}/>
          <rect x="13.2" y="0" width="2.8" height="11" rx="0.6" fill={c}/>
        </svg>
        <svg width="15" height="11" viewBox="0 0 15 11">
          <path d="M7.5 2.5C9.6 2.5 11.5 3.3 12.8 4.5L13.8 3.5C12.2 1.9 9.9 1 7.5 1S2.8 1.9 1.2 3.5L2.2 4.5C3.5 3.3 5.4 2.5 7.5 2.5Z" fill={c}/>
          <path d="M7.5 5.8C8.7 5.8 9.8 6.3 10.6 7L11.6 6C10.5 5 9.1 4.3 7.5 4.3S4.5 5 3.4 6L4.4 7C5.2 6.3 6.3 5.8 7.5 5.8Z" fill={c}/>
          <circle cx="7.5" cy="9.2" r="1.3" fill={c}/>
        </svg>
        <svg width="25" height="12" viewBox="0 0 25 12">
          <rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke={c} strokeOpacity="0.4" fill="none"/>
          <rect x="2" y="2" width="18" height="8" rx="1.5" fill={c}/>
          <rect x="23" y="4" width="1.5" height="4" rx="0.6" fill={c} fillOpacity="0.4"/>
        </svg>
      </span>
    </div>
  );
}

// ── Hero ──
export function Hero({ lang, heroImg }: { lang: Lang; heroImg: string }) {
  const L = useL(lang);
  return (
    <section className="hero" id="top">
      <div className="hero__bg">
        <Image src={heroImg} alt="" fill style={{objectFit:'cover'}} priority/>
      </div>
      <div className="hero__pill">{L.heroPill}</div>
      <div className="hero__inner">
        <span className="hero__kicker">{L.heroKicker}</span>
        <h1 className="hero__title">
          {L.heroTitle}
          <em>{nl(L.heroTitleEm)}</em>
        </h1>
        <p className="hero__sub">{L.heroSub}</p>
        <div className="hero__cta">
          <a href="#contact" className="btn btn--solid">{L.heroCta1} <Ico n="arr" s={14}/></a>
          <a href="#products" className="btn btn--ghost">{L.heroCta2}</a>
        </div>
        <div className="hero__meta">
          {L.heroMeta.map(([v, l]: string[], i: number) => (
            <div key={i}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Ribbon ──
export function Ribbon({ lang }: { lang: Lang }) {
  const L = useL(lang);
  return (
    <div className="ribbon">
      <div className="ribbon__track">
        {[0, 1].map(i => (
          <span key={i}>{L.ribbon.map((m: string, j: number) => <span key={j}>{m}</span>)}</span>
        ))}
      </div>
    </div>
  );
}

// ── Values ──
export function Values({ lang }: { lang: Lang }) {
  const L = useL(lang);
  const icons = ['diamond','shield','hammer','care'];
  return (
    <div className="values">
      {L.values.map(([t, d]: string[], i: number) => (
        <div className="value" key={i}>
          <span className="value__icon"><Ico n={icons[i]} s={26}/></span>
          <h3 className="value__t">{t}</h3>
          <p className="value__d">{d}</p>
        </div>
      ))}
    </div>
  );
}

// ── Story ──
export function Story({ lang }: { lang: Lang }) {
  const L = useL(lang);
  return (
    <section className="section section--cream story">
      <span className="kicker">{L.storyK}</span>
      <div className="story__num">40</div>
      <span className="story__numLbl">{L.storyNumLbl}</span>
      <h2 className="h2">{nl(L.storyH)}</h2>
      <p className="lede">{L.storyP}</p>
    </section>
  );
}

// ── Products ──
const PRODUCTS = [
  { name: 'Solène',       cut: 'Round · 1.20 ct',   img: '/images/product1.jpeg', price: '฿185,000', tag: 'Best' },
  { name: 'Émeraude',     cut: 'Emerald · 1.50 ct',  img: '/images/product2.jpeg', price: '฿224,000', tag: 'New' },
  { name: 'Halo Lumière', cut: 'Cushion · 1.05 ct',  img: '/images/product3.jpeg', price: '฿168,000', tag: null },
  { name: 'Trio Pavé',    cut: 'Band · 0.45 ct tw',  img: '/images/product4.jpeg', price: '฿78,000',  tag: null },
  { name: 'Étoile',       cut: 'Pendant · 0.50 ct',  img: '/images/product5.jpeg', price: '฿94,000',  tag: null },
];

export function Products({ lang, showPrice = true }: { lang: Lang; showPrice?: boolean }) {
  const L = useL(lang);
  const [f, setF] = useState(0);
  return (
    <section className="section" id="products">
      <span className="kicker">{L.prodK}</span>
      <h2 className="h2">{nl(L.prodH)}</h2>
      <div className="prod__filters">
        {L.prodFilters.map((x: string, i: number) => (
          <button key={i} className={`prod__filter${f === i ? ' is-active' : ''}`} onClick={() => setF(i)}>{x}</button>
        ))}
      </div>
      <div className="prod__rail">
        {PRODUCTS.map((p, i) => (
          <article className="card" key={i}>
            <div className="card__shot">
              <Image src={p.img} alt={p.name} fill style={{objectFit:'cover'}}/>
              {p.tag && <span className="card__tag">{p.tag}</span>}
              <button className="card__fav" aria-label="Save"><Ico n="heart" s={14}/></button>
            </div>
            <div className="card__meta">
              <span className="card__cut">{p.cut}</span>
              <h3 className="card__name">{p.name}</h3>
              <div className="card__price">
                {showPrice
                  ? <span>{p.price}<small> {L.prodFrom}</small></span>
                  : <span style={{color:'var(--taupe)',fontSize:11,letterSpacing:'0.18em',textTransform:'uppercase'}}>Inquire</span>
                }
                <em>›</em>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="prod__seeall">
        <a href="#">{L.prodSee} <Ico n="arr" s={12}/></a>
      </div>
    </section>
  );
}

// ── Collections ──
const COLL_IMGS = [
  '/images/collEngagement.jpeg',
  '/images/collWeddingBand.jpeg',
  '/images/brand2.jpeg',
  '/images/collNecklace.jpeg',
  '/images/collEarrings.jpeg',
];

export function Collections({ lang }: { lang: Lang }) {
  const L = useL(lang);
  return (
    <section className="section section--paper">
      <span className="kicker">{L.collK}</span>
      <h2 className="h2">{nl(L.collH)}</h2>
      <div className="coll">
        <a className="coll__cell coll__cell--wide" href="#">
          <Image src={COLL_IMGS[0]} alt="" fill style={{objectFit:'cover'}}/>
          <div><h4>{L.coll[0]}</h4></div>
        </a>
        {(L.coll as string[]).slice(1).map((t: string, i: number) => (
          <a className="coll__cell" href="#" key={i}>
            <Image src={COLL_IMGS[i + 1]} alt="" fill style={{objectFit:'cover'}}/>
            <div><h4>{t}</h4></div>
          </a>
        ))}
      </div>
    </section>
  );
}

// ── Craft ──
export function Craft({ lang }: { lang: Lang }) {
  const L = useL(lang);
  return (
    <section className="craft" id="brand">
      <Image src="/images/brandCraft.jpeg" alt="" fill style={{objectFit:'cover'}}/>
      <div className="craft__inner">
        <span className="craft__kicker">{L.craftK}</span>
        <h2 className="craft__head">{L.craftHead}</h2>
        <p className="craft__sub">{L.craftSub}</p>
        <div className="craft__stats">
          {L.craftStats.map(([v, l]: string[], i: number) => (
            <div className="craft__stat" key={i}><b>{v}</b><span>{l}</span></div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── Lab-Grown ──
export function LabGrown({ lang }: { lang: Lang }) {
  const L = useL(lang);
  return (
    <section className="section section--cream" id="diamond">
      <span className="kicker">{L.diaK}</span>
      <h2 className="h2">{nl(L.diaH)}</h2>
      <div className="lab__card">
        <div className="lab__media">
          <Image src="/images/brand3.jpeg" alt="" fill style={{objectFit:'cover'}}/>
        </div>
        <div className="lab__body">
          <p className="lede" style={{margin:0}}>{L.diaP}</p>
          <div className="cert">
            {L.diaCerts.map(([v, l]: string[], i: number) => (
              <div className="cert__item" key={i}><b>{v}</b><span>{l}</span></div>
            ))}
          </div>
          <a className="btn btn--ox" href="#products" style={{marginTop:18,width:'100%'}}>
            {L.diaCta} <Ico n="arr" s={14}/>
          </a>
        </div>
      </div>
    </section>
  );
}

// ── How ──
export function How({ lang }: { lang: Lang }) {
  const L = useL(lang);
  return (
    <section className="section" id="how">
      <span className="kicker">{L.howK}</span>
      <h2 className="h2">{nl(L.howH)}</h2>
      <p className="lede">{L.howSub}</p>
      <ol className="steps">
        {L.steps.map(([t, d]: string[], i: number) => (
          <li className="step" key={i}>
            <span className="step__bullet">{i + 1}</span>
            <div>
              <h4 className="step__t">{t}</h4>
              <p className="step__d">{d}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

// ── Service ──
export function Service({ lang }: { lang: Lang }) {
  const L = useL(lang);
  const icons = ['care','tools','ring','shield','globe','swap'];
  return (
    <section className="section section--paper" id="service">
      <span className="kicker">{L.svcK}</span>
      <h2 className="h2">{nl(L.svcH)}</h2>
      <p className="lede">{L.svcSub}</p>
      <div className="svc">
        {L.svc.map(([t, d, badge]: string[], i: number) => (
          <div className="svc__item" key={i}>
            <span className="svc__icon"><Ico n={icons[i]} s={20}/></span>
            <div className="svc__txt">
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
            <span className="svc__badge">{badge}</span>
          </div>
        ))}
      </div>
      <div className="svc__promise">
        <span className="kicker">{L.promiseK}</span>
        <h3>{L.promiseH}</h3>
        <p>{L.promiseP}</p>
        <ul>
          {L.promise.map((p: string, i: number) => (
            <li key={i}><Ico n="check" s={14}/> {p}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ── Reviews ──
const REV_IMGS = ['/images/reviewCouple.jpeg', '/images/brandCraft.jpeg', '/images/brand2.jpeg'];

export function Reviews({ lang }: { lang: Lang }) {
  const L = useL(lang);
  return (
    <section className="section" id="reviews">
      <div className="rev__head">
        <div>
          <span className="kicker">{L.revK}</span>
          <h2 className="h-script">{L.revHead}</h2>
        </div>
      </div>
      <div className="rev__rail">
        {L.revs.map(([n, w, q]: string[], i: number) => (
          <div className="rev__card" key={i}>
            <div className="rev__photo">
              <Image src={REV_IMGS[i]} alt="" fill style={{objectFit:'cover'}}/>
            </div>
            <span className="rev__stars">★★★★★</span>
            <p className="rev__quote">"{q}"</p>
            <div className="rev__who"><b>{n}</b><span>{w}</span></div>
          </div>
        ))}
      </div>
      <div className="prod__seeall">
        <a href="#">{L.revAll} <Ico n="arr" s={12}/></a>
      </div>
    </section>
  );
}

// ── Locations ──
export function Locations({ lang }: { lang: Lang }) {
  const L = useL(lang);
  // Accordion: Bangkok (index 0) open by default; others collapsed.
  const [open, setOpen] = useState(0);
  return (
    <section className="section section--cream" id="locations">
      <span className="kicker">{L.locK}</span>
      <h2 className="h2">{headEm(L.locH)}</h2>
      <p className="lede">{L.locSub}</p>
      <div className="loc">
        {L.locCities.map(([city, type, addr, tel]: string[], i: number) => {
          const isOpen = open === i;
          return (
            <div className={`store ${isOpen ? 'is-open' : ''}`} key={i}>
              <button
                type="button"
                className="store__head"
                aria-expanded={isOpen}
                onClick={() => setOpen(isOpen ? -1 : i)}
              >
                <span className="store__city">
                  <h4>{city}</h4>
                  <span>{type}</span>
                </span>
                <span className="store__chev"><Ico n="arrD" s={16}/></span>
              </button>
              <div className="store__body">
                <p className="store__addr">{addr}</p>
                <dl className="store__hours">
                  {L.locHours.map(([d, h]: string[], j: number) => (
                    <Fragment key={j}>
                      <dt>{d}</dt><dd>{h}</dd>
                    </Fragment>
                  ))}
                </dl>
                <div className="store__cta">
                  <a href="#" className="store__btn">{L.locDirections}</a>
                  <a href={`tel:${tel}`} className="store__btn">{L.locCall}</a>
                  <a href="#contact" className="store__btn store__btn--primary">{L.locBook}</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// ── Contact ──
const CONTACT_CARDS = [
  { k: 'wa',     i: 'wa',     cls: 'cont__card--wa',     href: 'https://wa.me/66996396445' },
  { k: 'line',   i: 'line',   cls: 'cont__card--line',   href: '#' },
  { k: 'wechat', i: 'wechat', cls: 'cont__card--wechat', href: '#' },
  { k: 'email',  i: 'mail',   cls: '',                   href: 'mailto:hello@thalyn.co' },
];

export function Contact({ lang }: { lang: Lang }) {
  const L = useL(lang);
  return (
    <section className="section section--ox" id="contact">
      <span className="kicker">{L.contK}</span>
      <h2 className="h2">{headEm(L.contH)}</h2>
      <p className="lede">{L.contSub}</p>
      <div className="cont__cards">
        {CONTACT_CARDS.map(c => {
          const cards = L.cards as Record<string, {h:string;b:string;s:string}>;
          const d = cards[c.k];
          return (
            <a key={c.k} href={c.href} className={`cont__card ${c.cls}`}
               target={c.href.startsWith('#') ? undefined : '_blank'} rel="noopener">
              <span className="cont__icon"><Ico n={c.i} s={18}/></span>
              <div className="cont__txt">
                <h4>{d.h}</h4>
                <b>{d.b}</b>
                <span>{d.s}</span>
              </div>
              <span className="cont__chev"><Ico n="arr" s={14}/></span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

// ── Footer ──
export function Footer({ lang }: { lang: Lang }) {
  const L = useL(lang);
  const foot = L.foot as {tagline:string;shop:string;about:string;shopItems:string[];aboutItems:string[];bottom:string;legal:string};
  return (
    <footer className="foot">
      <div className="foot__logo">THALYN<small>Diamond · Est. 1985</small></div>
      <p className="foot__about">{foot.tagline}</p>
      <div className="foot__socials">
        <a aria-label="Instagram" href="#"><Ico n="ig" s={16}/></a>
        <a aria-label="Facebook" href="#"><Ico n="fb" s={16}/></a>
        <a aria-label="Line" href="#"><Ico n="line" s={16}/></a>
        <a aria-label="WhatsApp" href="https://wa.me/66996396445"><Ico n="wa" s={16}/></a>
        <a aria-label="WeChat" href="#"><Ico n="wechat" s={16}/></a>
      </div>
      <div className="foot__cols">
        <div>
          <h5>{foot.shop}</h5>
          <ul>{foot.shopItems.map((item: string) => <li key={item}><a href="#">{item}</a></li>)}</ul>
        </div>
        <div>
          <h5>{foot.about}</h5>
          <ul>{foot.aboutItems.map((item: string) => <li key={item}><a href="#">{item}</a></li>)}</ul>
        </div>
      </div>
      <div className="foot__bottom">
        <span>{foot.bottom}</span>
        <span>{foot.legal}</span>
      </div>
    </footer>
  );
}

// ── Drawer ──
interface DrawerProps {
  open: boolean;
  onClose: () => void;
  lang: Lang;
  setLang: (l: Lang) => void;
}

export function Drawer({ open, onClose, lang, setLang }: DrawerProps) {
  const L = useL(lang);
  const items = [
    { href: '#products',  label: L.nav.product  },
    { href: '#brand',     label: L.nav.brand    },
    { href: '#diamond',   label: L.nav.diamond  },
    { href: '#service',   label: L.nav.service  },
    { href: '#reviews',   label: L.nav.reviews  },
    { href: '#locations', label: L.nav.locations },
    { href: '#contact',   label: L.nav.contact  },
  ];
  return (
    <>
      <div className={`drawer-overlay${open ? ' is-open' : ''}`} onClick={onClose}/>
      <aside className={`drawer${open ? ' is-open' : ''}`}>
        <button className="drawer__close" onClick={onClose} aria-label="Close"><Ico n="close" s={18}/></button>
        <h3 className="drawer__title">{L.menuTitle as string}</h3>
        <nav className="drawer__menu">
          {items.map(item => (
            <a href={item.href} key={item.href} onClick={onClose}><span>{item.label as string}</span></a>
          ))}
        </nav>
        <div className="drawer__lang">
          <h5>Language · ภาษา · 语言</h5>
          <div className="langpill">
            {(['en', 'th', 'zh'] as Lang[]).map((c, i) => {
              const labels = ['English','ไทย','中文'];
              return (
                <button key={c} className={lang === c ? 'is-active' : ''} onClick={() => setLang(c)}>
                  {labels[i]}
                </button>
              );
            })}
          </div>
        </div>
      </aside>
    </>
  );
}

// ── Dock ──
export function Dock({ lang }: { lang: Lang }) {
  const L = useL(lang);
  return (
    <div className="dock">
      <a className="dock__primary" href="#contact"><Ico n="cal" s={14}/> {L.bookAppt as string}</a>
      <a className="dock__wa" href="https://wa.me/66996396445" target="_blank" rel="noopener" aria-label="WhatsApp">
        <Ico n="wa" s={22}/>
      </a>
    </div>
  );
}
