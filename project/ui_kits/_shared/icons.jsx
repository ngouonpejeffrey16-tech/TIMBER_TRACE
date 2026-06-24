// Lightweight Lucide-style stroke icons (1.75px, round caps) for Timber Trace UI kits.
// Substitution note: these mirror the Lucide icon set (https://lucide.dev) — the brand's
// chosen icon style — drawn inline so kits render offline without a CDN dependency.
const React = window.React;
function I({ children, size = 20, stroke = 'currentColor', sw = 1.75, fill = 'none', style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke}
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>{children}</svg>
  );
}
const Icon = {
  search: (p) => <I {...p}><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></I>,
  pin: (p) => <I {...p}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></I>,
  heart: (p) => <I {...p}><path d="M19 14c1.5-1.5 3-3.3 3-5.5A4.5 4.5 0 0 0 12 5 4.5 4.5 0 0 0 2 8.5c0 2.2 1.5 4 3 5.5l7 7Z"/></I>,
  menu: (p) => <I {...p}><path d="M4 6h16M4 12h16M4 18h16"/></I>,
  chevronDown: (p) => <I {...p}><path d="m6 9 6 6 6-6"/></I>,
  chevronRight: (p) => <I {...p}><path d="m9 6 6 6-6 6"/></I>,
  check: (p) => <I {...p}><path d="M20 6 9 17l-5-5"/></I>,
  shield: (p) => <I {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></I>,
  filter: (p) => <I {...p}><path d="M3 5h18l-7 8v6l-4-2v-4Z"/></I>,
  grid: (p) => <I {...p}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></I>,
  ruler: (p) => <I {...p}><path d="M3 9 9 3l12 12-6 6Z"/><path d="m7 7 2 2M11 5l2 2M9 13l2 2M13 11l2 2"/></I>,
  trees: (p) => <I {...p}><path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6M13 19v3M16 8h.01"/><path d="M19 13a3 3 0 0 0 1-5.8V7a3 3 0 0 0-6 0v.2A3 3 0 0 0 15 13Z"/></I>,
  drop: (p) => <I {...p}><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5S12.5 4 12 2C11.5 4 9 7 7 9.5S5 13 5 15a7 7 0 0 0 7 7Z"/></I>,
  road: (p) => <I {...p}><path d="M4 19 8 5M20 19 16 5M12 6v2M12 11v2M12 16v2"/></I>,
  user: (p) => <I {...p}><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></I>,
  bell: (p) => <I {...p}><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></I>,
  plus: (p) => <I {...p}><path d="M12 5v14M5 12h14"/></I>,
  arrowRight: (p) => <I {...p}><path d="M5 12h14M13 6l6 6-6 6"/></I>,
  star: (p) => <I {...p}><path d="m12 3 2.6 5.3 5.9.9-4.3 4.1 1 5.8L12 16.8 6.8 19.1l1-5.8L3.5 9.2l5.9-.9Z"/></I>,
  eye: (p) => <I {...p}><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></I>,
  layers: (p) => <I {...p}><path d="m12 2 9 5-9 5-9-5Z"/><path d="m3 12 9 5 9-5M3 17l9 5 9-5"/></I>,
};
window.TTIcon = Icon;
