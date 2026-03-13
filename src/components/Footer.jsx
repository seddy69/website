import { Link } from 'react-router-dom'
import C from '../colors.js'

const QUICK_LINKS = [
  { label: 'About Us',   to: '/about',    internal: true },
  { label: 'Learn Islam',to: 'https://tristateislamic.center/learn/' },
  { label: 'Services',   to: '/services', internal: true },
  { label: 'Events',     to: 'https://tristateislamic.center/events/' },
  { label: 'Gallery',    to: 'https://tristateislamic.center/gallery/' },
  { label: 'Projects',   to: 'https://tristateislamic.center/projects/' },
  { label: 'Cemetery',   to: 'https://tristateislamic.center/cemetery/' },
  { label: 'Documents',  to: 'https://tristateislamic.center/documents/' },
  { label: 'Donate',     to: 'https://tristateislamic.center/donate/' },
  { label: 'Contact',    to: '/contact',  internal: true },
]

function FooterLink({ label, to, internal }) {
  const style = { color: 'rgba(253,246,232,0.75)', textDecoration: 'none', fontSize: 15, display: 'flex', alignItems: 'center', gap: 8 }
  return (
    <li style={{ padding: '5px 0', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
      {internal
        ? <Link to={to} style={style}><span style={{ fontSize: 7, color: C.gold }}>◆</span> {label}</Link>
        : <a href={to} style={style}><span style={{ fontSize: 7, color: C.gold }}>◆</span> {label}</a>}
    </li>
  )
}

export default function Footer() {
  return (
    <footer style={{
      background: C.greenDeep,
      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(201,168,76,0.03) 20px, rgba(201,168,76,0.03) 21px)',
      borderTop: `3px solid ${C.gold}`, padding: '60px 40px 30px',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr',
        gap: 48, paddingBottom: 40, borderBottom: '1px solid rgba(201,168,76,0.25)',
      }}>

        {/* Brand */}
        <div>
          <img
            src="https://tristateislamic.center/wp-content/uploads/2019/07/logo2.jpg"
            alt="Logo"
            style={{ height: 70, borderRadius: '50%', border: `2px solid ${C.gold}`, marginBottom: 16 }}
          />
          <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 16, color: C.cream, letterSpacing: '0.06em', marginBottom: 8 }}>
            Dubuque Tri-State Islamic Center
          </h3>
          <p style={{ fontSize: 15, color: 'rgba(253,246,232,0.65)', lineHeight: 1.7, marginBottom: 12 }}>
            Serving the Muslim community of the tri-state region since 1993. A place of worship, learning, and unity for all.
          </p>
          <p style={{ fontFamily: "'Amiri', serif", fontSize: 18, color: C.gold, fontStyle: 'italic' }}>
            "وَاعْتَصِمُوا بِحَبْلِ اللهِ جَمِيعًا وَلَا تَفَرَّقُوا"
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: '0.15em', color: C.gold, marginBottom: 18, paddingBottom: 10, borderBottom: '1px solid rgba(201,168,76,0.2)', textTransform: 'uppercase' }}>
            Quick Links
          </h4>
          <ul style={{ listStyle: 'none' }}>
            {QUICK_LINKS.map(l => <FooterLink key={l.label} {...l} />)}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: '0.15em', color: C.gold, marginBottom: 18, paddingBottom: 10, borderBottom: '1px solid rgba(201,168,76,0.2)', textTransform: 'uppercase' }}>
            Contact & Visit
          </h4>
          <p style={{ fontSize: 15, color: 'rgba(253,246,232,0.75)', marginBottom: 10 }}>
            📍 Tri-State Islamic Center, Dubuque, Iowa
          </p>
          <p style={{ fontSize: 15, color: 'rgba(253,246,232,0.75)', marginBottom: 10 }}>
            🕐 Friday Jummah: <strong style={{ color: C.goldLight }}>1:30 PM</strong>
          </p>
          <p style={{ fontSize: 15, color: 'rgba(253,246,232,0.75)', marginBottom: 10 }}>
            📘{' '}
            <a href="https://www.facebook.com/TriStateIslamicCenter/" target="_blank" rel="noreferrer"
              style={{ color: 'rgba(253,246,232,0.75)', textDecoration: 'none' }}>
              Facebook Page
            </a>
          </p>
          <p style={{ fontSize: 15, color: 'rgba(253,246,232,0.75)' }}>
            ▶{' '}
            <a href="https://www.youtube.com/channel/UCpzSKvn2xHePQqOzfxVMWtA" target="_blank" rel="noreferrer"
              style={{ color: 'rgba(253,246,232,0.75)', textDecoration: 'none' }}>
              YouTube Channel
            </a>
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        maxWidth: 1200, margin: '24px auto 0',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12,
      }}>
        <p style={{ fontSize: 14, color: 'rgba(253,246,232,0.45)', fontFamily: "'Amiri', serif" }}>
          © 2026 Dubuque Tri-State Islamic Center · All Rights Reserved · Established 1993
        </p>
        <div style={{ display: 'flex', gap: 14 }}>
          {[
            ['f', 'https://www.facebook.com/TriStateIslamicCenter/'],
            ['▶', 'https://www.youtube.com/channel/UCpzSKvn2xHePQqOzfxVMWtA'],
          ].map(([icon, href]) => (
            <a key={icon} href={href} target="_blank" rel="noreferrer" style={{
              width: 36, height: 36, border: '1px solid rgba(201,168,76,0.35)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: C.gold, textDecoration: 'none', fontSize: 16,
            }}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
