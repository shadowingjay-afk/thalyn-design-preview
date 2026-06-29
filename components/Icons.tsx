'use client';

interface IcoProps {
  n: string;
  s?: number;
}

export function Ico({ n, s = 18 }: IcoProps) {
  const a = { width: s, height: s, fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (n) {
    case "menu":    return <svg viewBox="0 0 24 24" {...a}><path d="M3 7h18M3 12h18M3 17h12"/></svg>;
    case "close":   return <svg viewBox="0 0 24 24" {...a}><path d="M6 6l12 12M18 6L6 18"/></svg>;
    case "search":  return <svg viewBox="0 0 24 24" {...a}><circle cx="11" cy="11" r="7"/><path d="m21 21-5-5"/></svg>;
    case "arr":     return <svg viewBox="0 0 24 24" {...a}><path d="M5 12h14M13 6l6 6-6 6"/></svg>;
    case "arrD":    return <svg viewBox="0 0 24 24" {...a}><path d="M6 9l6 6 6-6"/></svg>;
    case "arrU":    return <svg viewBox="0 0 24 24" {...a}><path d="M6 15l6-6 6 6"/></svg>;
    case "heart":   return <svg viewBox="0 0 24 24" {...a}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
    case "diamond": return <svg viewBox="0 0 24 24" {...a}><path d="M6 3h12l4 6-10 12L2 9z"/><path d="M2 9h20"/></svg>;
    case "shield":  return <svg viewBox="0 0 24 24" {...a}><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z"/><path d="m9 12 2 2 4-4"/></svg>;
    case "hammer":  return <svg viewBox="0 0 24 24" {...a}><path d="m15 4 5 5-3 3-5-5z"/><path d="M12 7 3 16v3l3 3 11-11"/></svg>;
    case "care":    return <svg viewBox="0 0 24 24" {...a}><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>;
    case "wa":      return <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" width={s} height={s}><path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.86 9.86 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91a9.82 9.82 0 0 0-2.91-7.02zm-3.49 9.08c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.79.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.38-1.72c-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.55-1.34-.76-1.84-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.06s.88 2.4 1 2.56c.12.16 1.74 2.66 4.22 3.72.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.16-.47-.28z"/></svg>;
    case "line":    return <svg viewBox="0 0 24 24" {...a}><path d="M19 4H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h4l3 3 3-3h4a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z"/></svg>;
    case "wechat":  return <svg viewBox="0 0 24 24" {...a}><path d="M9 4C4.6 4 1 7 1 10.7c0 2.1 1.2 4 3.2 5.2l-.7 2.4 2.6-1.4c.9.2 1.8.4 2.7.4M14 8c-3.9 0-7 2.7-7 6.1 0 3.4 3.1 6.1 7 6.1.8 0 1.6-.1 2.3-.3l2.3 1.3-.6-2.1c1.6-1.1 2.7-2.8 2.7-4.8C20.7 10.7 17.6 8 14 8z"/></svg>;
    case "mail":    return <svg viewBox="0 0 24 24" {...a}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>;
    case "ig":      return <svg viewBox="0 0 24 24" {...a}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".5" fill="currentColor"/></svg>;
    case "fb":      return <svg viewBox="0 0 24 24" {...a}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
    case "pin":     return <svg viewBox="0 0 24 24" {...a}><path d="M12 22s8-7 8-13a8 8 0 1 0-16 0c0 6 8 13 8 13z"/><circle cx="12" cy="9" r="3"/></svg>;
    case "phone":   return <svg viewBox="0 0 24 24" {...a}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>;
    case "cal":     return <svg viewBox="0 0 24 24" {...a}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/></svg>;
    case "check":   return <svg viewBox="0 0 24 24" {...a}><path d="m5 12 4 4L20 5"/></svg>;
    case "sparkle": return <svg viewBox="0 0 24 24" {...a}><path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z"/></svg>;
    case "ring":    return <svg viewBox="0 0 24 24" {...a}><circle cx="12" cy="14" r="6"/><path d="m9 8 1-4h4l1 4"/></svg>;
    case "tools":   return <svg viewBox="0 0 24 24" {...a}><path d="M6 2v8m0 4v8M2 6h8m4 0h8M4 4l4 4m12 12-4-4M4 20l4-4m12-12-4 4"/></svg>;
    case "globe":   return <svg viewBox="0 0 24 24" {...a}><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>;
    case "swap":    return <svg viewBox="0 0 24 24" {...a}><path d="M17 3 22 8l-5 5M22 8H7M7 21 2 16l5-5M2 16h15"/></svg>;
    default: return null;
  }
}
