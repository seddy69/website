import { useState } from 'react'
import C, { clip7 } from '../colors.js'

// ── Gold ornamental divider ──────────────────────────────────────────────────
export function Ornament() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '8px 0' }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${C.gold}, transparent)` }} />
      <span style={{ color: C.gold, fontSize: 22 }}>✦</span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${C.gold}, transparent)` }} />
    </div>
  )
}

// ── Section title + Arabic subtitle ─────────────────────────────────────────
export function SectionHeading({ en, ar, light = false }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: 20 }}>
      <div style={{
        fontFamily: "'Cinzel', serif", fontSize: 26, fontWeight: 700,
        color: light ? C.cream : C.greenDeep, letterSpacing: '0.06em', marginBottom: 6,
      }}>
        {en}
      </div>
      <span style={{ fontFamily: "'Amiri', serif", fontSize: 20, color: C.gold, display: 'block' }}>
        {ar}
      </span>
    </div>
  )
}

// ── Full-width Quranic verse banner ─────────────────────────────────────────
export function VerseBanner({ arabic, translation, reference }) {
  return (
    <div style={{
      width: '100%', backgroundColor: C.greenDeep,
      backgroundImage: `
        repeating-linear-gradient(45deg, transparent, transparent 25px, rgba(201,168,76,0.04) 25px, rgba(201,168,76,0.04) 26px),
        repeating-linear-gradient(-45deg, transparent, transparent 25px, rgba(201,168,76,0.04) 25px, rgba(201,168,76,0.04) 26px)
      `,
      padding: '60px 40px', textAlign: 'center',
      borderTop: `2px solid ${C.gold}`, borderBottom: `2px solid ${C.gold}`,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', top: -20, left: 20, color: 'rgba(201,168,76,0.18)', fontSize: 120, pointerEvents: 'none', userSelect: 'none' }}>❧</div>
      <div style={{ position: 'absolute', bottom: -20, right: 20, color: 'rgba(201,168,76,0.18)', fontSize: 120, pointerEvents: 'none', userSelect: 'none' }}>❧</div>
      <div style={{ fontFamily: "'Amiri', serif", fontSize: 34, color: C.goldLight, lineHeight: 1.6, marginBottom: 20, direction: 'rtl', position: 'relative' }}>
        {arabic}
      </div>
      <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: 20, color: C.cream, fontStyle: 'italic', maxWidth: 700, margin: '0 auto 14px', lineHeight: 1.65, position: 'relative' }}>
        {translation}
      </p>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: C.gold, letterSpacing: '0.15em', position: 'relative' }}>
        {reference}
      </div>
    </div>
  )
}

// ── CTA button (primary or outline) ─────────────────────────────────────────
export function CTABtn({ label, href, to, primary = false, internal = false }) {
  const [hover, setHover] = useState(false)
  const style = {
    background: primary ? (hover ? C.goldLight : C.gold) : (hover ? 'rgba(201,168,76,0.12)' : 'transparent'),
    color: primary ? C.greenDeep : C.goldLight,
    fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.1em',
    padding: '13px 30px', textDecoration: 'none',
    border: primary ? 'none' : `1px solid ${C.gold}`,
    clipPath: clip7, transition: 'background 0.2s', display: 'inline-block',
  }
  return (
    <a
      href={href || to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={style}
    >
      {label}
    </a>
  )
}

// ── Full-width page hero (used on About & Services) ──────────────────────────
export function PageHero({ arabicTitle, englishTitle, breadcrumb }) {
  return (
    <section style={{
      backgroundColor: C.greenDeep,
      backgroundImage: `
        repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,168,76,0.03) 40px, rgba(201,168,76,0.03) 41px),
        repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(201,168,76,0.03) 40px, rgba(201,168,76,0.03) 41px)
      `,
      borderBottom: `3px solid ${C.gold}`,
      padding: '70px 40px', textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(61,122,90,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: -80, left: '50%', transform: 'translateX(-50%)', width: 340, height: 260, border: '1px solid rgba(201,168,76,0.12)', borderRadius: '50% 50% 0 0 / 60% 60% 0 0', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ fontFamily: "'Amiri', serif", fontSize: 48, color: C.goldLight, lineHeight: 1.4, marginBottom: 16, textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
          {arabicTitle}
        </div>
        <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: 34, color: C.cream, fontWeight: 700, letterSpacing: '0.06em', marginBottom: 16 }}>
          {englishTitle}
        </h1>
        <div style={{ fontFamily: "'Amiri', serif", fontSize: 16, color: 'rgba(253,246,232,0.6)', letterSpacing: '0.06em' }}>
          {breadcrumb}
        </div>
      </div>
    </section>
  )
}

// ── Framed mosque-style image ─────────────────────────────────────────────────
export function FramedImage({ src, alt, caption, bg = C.creamDark }) {
  return (
    <div style={{ border: `3px solid ${C.gold}`, padding: 10, background: bg, position: 'relative' }}>
      <div style={{ position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)', color: C.gold, background: bg, padding: '0 8px', fontSize: 18, zIndex: 1 }}>✦</div>
      <img src={src} alt={alt} style={{ width: '100%', display: 'block', filter: 'sepia(18%) contrast(1.05)' }} />
      {caption && (
        <div style={{ textAlign: 'center', fontFamily: "'Amiri', serif", fontSize: 14, color: C.brown, marginTop: 10, fontStyle: 'italic' }}>
          {caption}
        </div>
      )}
    </div>
  )
}
