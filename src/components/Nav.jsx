import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import C, { clip5 } from '../colors.js'

const NAV_LINKS = [
  { label: 'Home',       to: '/',         internal: true },
  { label: 'About Us',   to: '/about',    internal: true },
  { label: 'Learn Islam',to: 'https://tristateislamic.center/learn/' },
  { label: 'Services',   to: '/services', internal: true },
  { label: 'Events',     to: 'https://tristateislamic.center/events/' },
  { label: 'Gallery',    to: 'https://tristateislamic.center/gallery/' },
  { label: 'Documents',  to: 'https://tristateislamic.center/documents/' },
  { label: 'Projects',   to: 'https://tristateislamic.center/projects/' },
  { label: 'Contact',    to: '/contact',  internal: true },
]

function NavItem({ label, to, internal }) {
  const { pathname } = useLocation()
  const active = internal && pathname === to
  const [hover, setHover] = useState(false)
  const lit = hover || active

  const style = {
    fontFamily: "'Cinzel', serif", fontSize: 12.5, fontWeight: 600,
    letterSpacing: '0.1em', color: lit ? C.goldLight : C.cream,
    textDecoration: 'none', padding: '16px 18px', display: 'block',
    whiteSpace: 'nowrap', transition: 'color 0.2s',
    borderBottom: lit ? `2px solid ${C.gold}` : '2px solid transparent',
  }

  return internal ? (
    <Link to={to} style={style} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {label}
    </Link>
  ) : (
    <a href={to} style={style} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {label}
    </a>
  )
}

export default function Nav() {
  const [donateHover, setDonateHover] = useState(false)
  return (
    <nav style={{
      background: C.greenMid, borderBottom: `2px solid rgba(201,168,76,0.4)`,
      position: 'sticky', top: 0, zIndex: 100,
      boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
    }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap',
      }}>
        {NAV_LINKS.map(l => <NavItem key={l.label} {...l} />)}
        <a
          href="https://tristateislamic.center/donate/"
          onMouseEnter={() => setDonateHover(true)}
          onMouseLeave={() => setDonateHover(false)}
          style={{
            background: donateHover ? C.goldLight : C.gold, color: C.greenDeep,
            fontFamily: "'Cinzel', serif", fontSize: 12.5, fontWeight: 700,
            letterSpacing: '0.1em', padding: '10px 22px', margin: '8px 12px',
            textDecoration: 'none', clipPath: clip5, transition: 'background 0.2s',
          }}
        >
          Donate
        </a>
      </div>
    </nav>
  )
}
