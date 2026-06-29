'use client';
import { Ico } from './Icons';
import type { Lang } from '@/lib/i18n';

interface TopBarProps {
  lang: Lang;
  setLang: (l: Lang) => void;
  onMenu: () => void;
  scrolled: boolean;
}

const LANG_OPTS: [Lang, string][] = [['en','EN'],['th','TH'],['zh','中']];

export function TopBar({ lang, setLang, onMenu, scrolled }: TopBarProps) {
  return (
    <div className={`topbar${scrolled ? ' is-scrolled' : ''}`}>
      <button className="iconbtn iconbtn--ghost" onClick={onMenu} aria-label="Menu">
        <Ico n="menu" s={20}/>
      </button>
      <div className="topbar__brand">
        <b>THALYN</b>
        <small>Diamond</small>
      </div>
      <div className="topbar__right">
        <div className="langpill">
          {LANG_OPTS.map(([c, l]) => (
            <button key={c} className={lang === c ? 'is-active' : ''} onClick={() => setLang(c)}>{l}</button>
          ))}
        </div>
      </div>
    </div>
  );
}
