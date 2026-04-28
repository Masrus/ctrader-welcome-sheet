// Welcome bottom-sheet wireframes — cTrader DS
// 5 layout variations exploring the same structure:
// illustration → title → description → primary "Далее" button.

const SF = '-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display", "SF Pro", "Inter", system-ui, sans-serif';

// ────────────────────────────────────────────────────────────
// Token resolver — picks light/dark tokens
// ────────────────────────────────────────────────────────────
const TOKENS = {
  light: {
    bg: '#FFFFFF',
    bgPage: '#F2F2F2',
    bgSheet: '#FFFFFF',
    bgIllu: '#F7F7F7',
    bgIlluAlt: '#FEF8E7',
    fg: '#000000',
    fgSec: '#5F5F63',
    fgMuted: '#8A8A8E',
    stroke: 'rgba(0,0,0,0.05)',
    btnBg: '#262627',
    btnFg: '#FFFFFF',
    handle: '#D9D9D9',
    closeBg: '#F2F2F2',
    accent: '#FEF8E7',
    accentInk: '#000000',
    orange: '#F05824',
    green: '#009345',
    blue: '#4681D4'
  },
  dark: {
    bg: '#0E0E0E',
    bgPage: '#000000',
    bgSheet: '#191919',
    bgIllu: '#0E0E0E',
    bgIlluAlt: '#262627',
    fg: '#FFFFFF',
    fgSec: '#A4A4A7',
    fgMuted: '#717175',
    stroke: 'rgba(184,184,184,0.07)',
    btnBg: '#F2F2F2',
    btnFg: '#000000',
    handle: '#3F3F41',
    closeBg: '#262627',
    accent: '#262627',
    accentInk: '#FFFFFF',
    orange: '#F05824',
    green: '#00A64B',
    blue: '#4681D4'
  }
};

// ────────────────────────────────────────────────────────────
// Background phone "context" — faded watchlist behind sheet
// ────────────────────────────────────────────────────────────
function BackdropApp({ t, dark }) {
  const rows = [
  ['EURUSD', '1.0824', '1.0825', '+0.12%', true],
  ['GBPUSD', '1.2647', '1.2648', '−0.08%', false],
  ['USDJPY', '149.82', '149.83', '+0.34%', true],
  ['XAUUSD', '2384.5', '2384.7', '+0.21%', true],
  ['BTCUSD', '68 412', '68 425', '−1.42%', false]];

  return (
    <div style={{ padding: '8px 16px 0', color: t.fg, fontFamily: SF, opacity: 0.55 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0 14px' }}>
        <div style={{ fontSize: 28, fontWeight: 700, letterSpacing: '-0.01em' }}>Watchlist</div>
        <div style={{ width: 36, height: 36, borderRadius: 999, background: t.closeBg }} />
      </div>
      {rows.map(([sym, bid, ask, chg, up], i) =>
      <div key={i} style={{
        display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 12, alignItems: 'center',
        padding: '14px 0', borderBottom: `1px solid ${t.stroke}`
      }}>
          <div>
            <div style={{ fontSize: 16, fontWeight: 600 }}>{sym}</div>
            <div style={{ fontSize: 12, color: t.fgMuted, marginTop: 2 }}>Forex</div>
          </div>
          <div style={{ fontFamily: 'Geist, Inter, system-ui', fontVariantNumeric: 'tabular-nums', fontSize: 15, color: t.fgSec }}>{bid}</div>
          <div style={{
          fontSize: 13, fontWeight: 600, padding: '4px 8px', borderRadius: 8,
          color: up ? t.green : t.orange,
          background: 'transparent',
          minWidth: 64, textAlign: 'right'
        }}>{chg}</div>
        </div>
      )}
    </div>);

}

// ────────────────────────────────────────────────────────────
// Illustrations — placeholder SVG concepts (low-fi, geometric)
// Several styles so designers can compare.
// ────────────────────────────────────────────────────────────
function IlluCandles({ t, size = 'lg' }) {
  // Candle chart — most relevant for trading product
  const w = size === 'lg' ? 220 : size === 'md' ? 160 : 120;
  const h = size === 'lg' ? 180 : size === 'md' ? 130 : 100;
  return (
    <svg viewBox="0 0 220 180" width={w} height={h}>
      <rect x="0" y="0" width="220" height="180" rx="20" fill={t.accent} style={{ fill: "rgb(250, 250, 250)" }} />
      {/* baseline */}
      <line x1="20" y1="140" x2="200" y2="140" stroke={t.fgMuted} strokeWidth="1" strokeDasharray="3 4" opacity="0.5" />
      {/* candles */}
      {[
      [30, 60, 130, t.green],
      [55, 75, 120, t.green],
      [80, 50, 110, t.orange],
      [105, 40, 95, t.green],
      [130, 65, 100, t.orange],
      [155, 30, 80, t.green],
      [180, 45, 70, t.green]].
      map(([x, top, bot, c], i) =>
      <g key={i}>
          <line x1={x + 7} y1={top - 10} x2={x + 7} y2={bot + 10} stroke={c} strokeWidth="2" />
          <rect x={x} y={top} width="14" height={bot - top} rx="2" fill={c} />
        </g>
      )}
      {/* trend arrow */}
      <path d="M 25 130 Q 110 110 195 50" stroke={t.fg} strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="195" cy="50" r="6" fill={t.fg} />
    </svg>);

}

function IlluRocket({ t, size = 'lg' }) {
  const w = size === 'lg' ? 200 : 140;
  const h = size === 'lg' ? 200 : 140;
  return (
    <svg viewBox="0 0 200 200" width={w} height={h}>
      <circle cx="100" cy="100" r="92" fill={t.accent} style={{ fill: "rgb(250, 250, 250)" }} />
      {/* axis ticks */}
      {[20, 50, 80, 110, 140, 170].map((y, i) =>
      <line key={i} x1="20" y1={y} x2="35" y2={y} stroke={t.fgMuted} strokeWidth="1" opacity="0.4" />
      )}
      {/* line chart */}
      <polyline points="35,150 60,135 80,140 105,110 130,100 160,55" fill="none" stroke={t.fg} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {/* dots */}
      <circle cx="160" cy="55" r="7" fill={t.orange} />
      <circle cx="160" cy="55" r="14" fill={t.orange} opacity="0.18" />
      {/* label badge */}
      <rect x="125" y="25" width="60" height="22" rx="11" fill={t.fg} />
      <text x="155" y="40" fontSize="12" fontWeight="600" fill={t.bg} textAnchor="middle" fontFamily={SF}>+12.4%</text>
    </svg>);

}

function IlluLayers({ t, size = 'lg' }) {
  const w = size === 'lg' ? 220 : 160;
  const h = size === 'lg' ? 170 : 120;
  return (
    <svg viewBox="0 0 220 170" width={w} height={h}>
      <rect x="0" y="0" width="220" height="170" rx="20" fill={t.accent} style={{ fill: "rgb(250, 250, 250)" }} />
      {/* stacked cards */}
      <rect x="40" y="30" width="140" height="36" rx="10" fill={t.bgSheet} stroke={t.stroke} />
      <rect x="30" y="70" width="160" height="36" rx="10" fill={t.bgSheet} stroke={t.stroke} />
      <rect x="50" y="110" width="120" height="36" rx="10" fill={t.fg} />
      {/* dots inside top card */}
      <circle cx="58" cy="48" r="4" fill={t.orange} />
      <rect x="68" y="44" width="60" height="8" rx="4" fill={t.fgMuted} opacity="0.4" />
      <rect x="135" y="42" width="35" height="12" rx="6" fill={t.green} opacity="0.18" />
      {/* middle */}
      <circle cx="48" cy="88" r="4" fill={t.green} />
      <rect x="58" y="84" width="80" height="8" rx="4" fill={t.fgMuted} opacity="0.4" />
      <rect x="148" y="82" width="32" height="12" rx="6" fill={t.orange} opacity="0.18" />
      {/* highlighted */}
      <rect x="60" y="124" width="60" height="8" rx="4" fill={t.bg} opacity="0.6" />
      <rect x="130" y="122" width="32" height="12" rx="6" fill={t.bg} opacity="0.25" />
    </svg>);

}

function IlluShield({ t, size = 'lg' }) {
  const w = size === 'lg' ? 180 : 130;
  const h = size === 'lg' ? 200 : 145;
  return (
    <svg viewBox="0 0 180 200" width={w} height={h}>
      <circle cx="90" cy="100" r="85" fill={t.accent} />
      <path d="M 90 30 L 145 50 L 145 105 Q 145 150 90 175 Q 35 150 35 105 L 35 50 Z"
      fill={t.fg} />
      <path d="M 65 105 L 85 125 L 125 80" stroke={t.bg} strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>);

}

function IlluPlaceholder({ t, size = 'lg' }) {
  // generic dashed-frame placeholder for blank states
  const w = size === 'lg' ? 220 : 160;
  const h = size === 'lg' ? 160 : 120;
  return (
    <svg viewBox="0 0 220 160" width={w} height={h}>
      <rect x="2" y="2" width="216" height="156" rx="20" fill={t.bgIllu} stroke={t.fgMuted} strokeWidth="1.5" strokeDasharray="6 6" opacity="0.6" />
      <line x1="40" y1="40" x2="180" y2="120" stroke={t.fgMuted} strokeWidth="1" opacity="0.4" />
      <line x1="180" y1="40" x2="40" y2="120" stroke={t.fgMuted} strokeWidth="1" opacity="0.4" />
      <text x="110" y="86" fontSize="11" fontWeight="500" fill={t.fgMuted} textAnchor="middle" fontFamily={SF}>illustration</text>
    </svg>);

}

const ILLUS = {
  candles: IlluCandles,
  rocket: IlluRocket,
  layers: IlluLayers,
  shield: IlluShield,
  placeholder: IlluPlaceholder
};

// ────────────────────────────────────────────────────────────
// Shared building blocks
// ────────────────────────────────────────────────────────────
function SheetHandle({ t }) {
  return <div style={{ width: 36, height: 4, borderRadius: 2, background: t.handle, margin: '8px auto 0' }} />;
}

function PrimaryButton({ t, label = 'Далее', density = 'default' }) {
  const padY = density === 'spacious' ? 22 : density === 'compact' ? 14 : 18;
  return (
    <button style={{
      width: '100%', padding: `${padY}px 24px`, borderRadius: 20,
      background: t.btnBg, color: t.btnFg, border: 0,
      fontFamily: SF, fontSize: 16, fontWeight: 500, letterSpacing: '-0.2px',
      cursor: 'pointer'
    }}>{label}</button>);

}

function CloseChip({ t }) {
  return (
    <div style={{
      width: 32, height: 32, borderRadius: 999, background: t.closeBg,
      display: 'grid', placeItems: 'center', color: t.fg, fontSize: 14, fontWeight: 500,
      cursor: 'pointer'
    }}>
      <svg width="12" height="12" viewBox="0 0 12 12">
        <path d="M2 2 L10 10 M10 2 L2 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    </div>);

}

function PageDots({ t, count = 3, active = 0 }) {
  return (
    <div style={{ display: 'flex', gap: 6, justifyContent: 'center' }}>
      {[...Array(count)].map((_, i) =>
      <div key={i} style={{
        width: i === active ? 20 : 6, height: 6, borderRadius: 999,
        background: i === active ? t.fg : t.fgMuted, opacity: i === active ? 1 : 0.4,
        transition: 'all 200ms ease'
      }} />
      )}
    </div>);

}

// ────────────────────────────────────────────────────────────
// VARIATION 1 — Classic / Centered
// Hero illustration on tinted bg, centered title + body, full-width button
// ────────────────────────────────────────────────────────────
function V1Classic({ t, content, density }) {
  const Illu = ILLUS[content.illu] || IlluPlaceholder;
  const padX = 24;
  return (
    <>
      <SheetHandle t={t} />
      <div style={{ padding: '20px 20px 0', display: 'flex', justifyContent: 'flex-end' }}>
        <CloseChip t={t} />
      </div>
      <div style={{ padding: `8px ${padX}px 0`, display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{
          width: '100%', aspectRatio: '4/3', borderRadius: 20,
          background: t.accent, display: 'grid', placeItems: 'center',
          marginBottom: 24
        }}>
          <Illu t={t} size="lg" />
        </div>
        <h2 style={{
          margin: 0, fontFamily: SF, fontSize: 24, lineHeight: '30px',
          fontWeight: 700, letterSpacing: '-0.01em', color: t.fg
        }}>{content.title}</h2>
        <p style={{
          margin: '12px 0 0', fontFamily: SF, fontSize: 15, lineHeight: '22px',
          color: t.fgSec, maxWidth: 320, textWrap: 'pretty'
        }}>{content.body}</p>
      </div>
      <div style={{ padding: '28px 20px 20px' }}>
        <PrimaryButton t={t} density={density} label={content.buttonLabel} />
      </div>
    </>);

}

// ────────────────────────────────────────────────────────────
// VARIATION 2 — Full-bleed illustration
// Illustration fills sheet edge-to-edge, content sits below
// ────────────────────────────────────────────────────────────
function V2FullBleed({ t, content, density }) {
  const Illu = ILLUS[content.illu] || IlluPlaceholder;
  const total = content.total ?? 3;
  const step = content.step ?? 0;
  const isLast = step === total - 1;
  const label = isLast ? content.finalLabel ?? 'Get started' : content.buttonLabel ?? 'Next';
  return (
    <>
      <div style={{
        position: 'relative',
        background: '#FAFAFA',
        borderRadius: '24px 24px 0 0',
        padding: '8px 0 24px',
        display: 'flex', flexDirection: 'column', alignItems: 'center'
      }}>
        <div style={{ width: 36, height: 4, borderRadius: 2, background: 'rgba(0,0,0,0.15)', marginTop: 8 }} />
        <div style={{ marginTop: 28, padding: '0 20px' }}>
          <Illu t={t} size="lg" />
        </div>
      </div>
      <div style={{ padding: '24px 24px 0', textAlign: 'left' }}>
        <h2 style={{
          margin: 0, fontFamily: SF, fontSize: 26, lineHeight: '32px',
          fontWeight: 700, letterSpacing: '-0.01em', color: t.fg
        }}>{content.title}</h2>
        <p style={{
          margin: '10px 0 0', fontFamily: SF, fontSize: 15, lineHeight: '22px',
          color: t.fgSec, textWrap: 'pretty'
        }}>{content.body}</p>
      </div>
      <div style={{ padding: '24px 20px 0' }}>
        <PageDots t={t} count={total} active={step} />
      </div>
      <div style={{ padding: '20px 20px 20px' }}>
        <PrimaryButton t={t} density={density} label={label} />
      </div>
    </>);

}

// ────────────────────────────────────────────────────────────
// VARIATION 3 — Compact / left-aligned with pill eyebrow
// Smaller illustration in card, eyebrow chip, left-aligned text
// ────────────────────────────────────────────────────────────
function V3Compact({ t, content, density }) {
  const Illu = ILLUS[content.illu] || IlluPlaceholder;
  return (
    <>
      <SheetHandle t={t} />
      <div style={{ padding: '20px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{
          padding: '6px 12px', borderRadius: 999, background: t.accent,
          fontFamily: SF, fontSize: 12, fontWeight: 600, color: t.accentInk,
          letterSpacing: '-0.1px'
        }}>Новое</div>
        <CloseChip t={t} />
      </div>
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{
          background: t.accent, borderRadius: 20, padding: 24,
          display: 'grid', placeItems: 'center', height: 200
        }}>
          <Illu t={t} size="md" />
        </div>
        <h2 style={{
          margin: '24px 0 0', fontFamily: SF, fontSize: 22, lineHeight: '28px',
          fontWeight: 700, letterSpacing: '-0.01em', color: t.fg
        }}>{content.title}</h2>
        <p style={{
          margin: '8px 0 0', fontFamily: SF, fontSize: 14, lineHeight: '20px',
          color: t.fgSec, textWrap: 'pretty'
        }}>{content.body}</p>
      </div>
      <div style={{ padding: '24px 20px 20px' }}>
        <PrimaryButton t={t} density={density} label={content.buttonLabel} />
      </div>
    </>);

}

// ────────────────────────────────────────────────────────────
// VARIATION 4 — Carousel (multi-step)
// Pagination dots above button — implies series of features
// ────────────────────────────────────────────────────────────
function V4Carousel({ t, content, density }) {
  const Illu = ILLUS[content.illu] || IlluPlaceholder;
  return (
    <>
      <SheetHandle t={t} />
      <div style={{ padding: '20px 20px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ width: 32 }} />
        <div style={{ fontFamily: SF, fontSize: 13, color: t.fgMuted, fontWeight: 500 }}>1 of 3</div>
        <div style={{
          fontFamily: SF, fontSize: 14, color: t.fgSec, fontWeight: 500,
          padding: '6px 4px', cursor: 'pointer'
        }}>Skip</div>
      </div>
      <div style={{ padding: '12px 20px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
        <div style={{
          width: '100%', aspectRatio: '5/4', borderRadius: 20,
          background: t.accent, display: 'grid', placeItems: 'center'
        }}>
          <Illu t={t} size="lg" />
        </div>
        <h2 style={{
          margin: '24px 0 0', fontFamily: SF, fontSize: 24, lineHeight: '30px',
          fontWeight: 700, letterSpacing: '-0.01em', color: t.fg
        }}>{content.title}</h2>
        <p style={{
          margin: '10px 0 0', fontFamily: SF, fontSize: 15, lineHeight: '22px',
          color: t.fgSec, maxWidth: 320, textWrap: 'pretty'
        }}>{content.body}</p>
      </div>
      <div style={{ padding: '24px 20px 0' }}>
        <PageDots t={t} count={3} active={0} />
      </div>
      <div style={{ padding: '20px 20px 20px' }}>
        <PrimaryButton t={t} density={density} label={content.buttonLabel} />
      </div>
    </>);

}

// ────────────────────────────────────────────────────────────
// VARIATION 5 — Editorial / overlap
// Illustration breaks out of its frame, large editorial title
// ────────────────────────────────────────────────────────────
function V5Editorial({ t, content, density }) {
  const Illu = ILLUS[content.illu] || IlluPlaceholder;
  return (
    <>
      <SheetHandle t={t} />
      <div style={{ padding: '12px 20px 0', display: 'flex', justifyContent: 'flex-end' }}>
        <CloseChip t={t} />
      </div>
      <div style={{ padding: '0 20px', position: 'relative' }}>
        <div style={{
          background: t.accent, borderRadius: 20, height: 180, marginTop: 16,
          position: 'relative', overflow: 'visible'
        }}>
          <div style={{ position: 'absolute', left: '50%', top: -14, transform: 'translateX(-50%)' }}>
            <Illu t={t} size="lg" />
          </div>
        </div>
        <div style={{ marginTop: 32 }}>
          <div style={{
            fontFamily: SF, fontSize: 12, fontWeight: 600, letterSpacing: '0.04em',
            color: t.orange, textTransform: 'uppercase'
          }}>Релиз 2.4</div>
          <h2 style={{
            margin: '8px 0 0', fontFamily: SF, fontSize: 30, lineHeight: '34px',
            fontWeight: 700, letterSpacing: '-0.02em', color: t.fg, textWrap: 'balance'
          }}>{content.title}</h2>
          <p style={{
            margin: '14px 0 0', fontFamily: SF, fontSize: 15, lineHeight: '22px',
            color: t.fgSec, textWrap: 'pretty'
          }}>{content.body}</p>
        </div>
      </div>
      <div style={{ padding: '28px 20px 20px' }}>
        <PrimaryButton t={t} density={density} label={content.buttonLabel} />
      </div>
    </>);

}

const VARIANTS = [
{ id: 'v2', label: '02 — Full-bleed', Component: V2FullBleed, note: 'Иллюстрация на всю ширину + stepper, без крестика' }];


Object.assign(window, {
  TOKENS, VARIANTS, ILLUS, BackdropApp,
  SheetHandle, PrimaryButton, CloseChip, PageDots
});