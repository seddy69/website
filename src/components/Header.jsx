import { useState } from 'react'
import C, { geoBgHeader, clip6 } from '../colors.js'

export default function Header() {
  const [hover, setHover] = useState(false)
  return (
    <header style={{ ...geoBgHeader, borderBottom: `3px solid ${C.gold}` }}>
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '28px 40px',
        display: 'flex', alignItems: 'center', gap: 32, flexWrap: 'wrap',
      }}>
        <img
          src="https://tristateislamic.center/wp-content/uploads/2019/07/logo2.jpg"
          alt="Tri-State Islamic Center Logo"
          style={{
            height: 90, borderRadius: '50%',
            border: `3px solid ${C.gold}`,
            boxShadow: '0 0 0 6px rgba(201,168,76,0.15)',
          }}
        />
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Amiri', serif", fontSize: 26, color: C.goldLight, marginBottom: 2 }}>
            مركز الدراسات الإسلامية
          </div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 22, color: C.cream, fontWeight: 700, letterSpacing: '0.08em' }}>
            Dubuque Tri-State Islamic Center
          </div>
          <div style={{ fontFamily: "'Amiri', serif", fontSize: 15, color: C.gold, letterSpacing: '0.12em', marginTop: 4 }}>
            Dubuque, Iowa · Established Since 1993
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10 }}>
          <span style={{ fontFamily: "'Amiri', serif", fontSize: 13, color: C.goldLight, opacity: 0.8 }}>
            Friday Jummah: 1:30 PM
          </span>
          <a
            href="https://tristateislamic.center/donate/"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              background: hover ? C.goldLight : C.gold, color: C.greenDeep,
              fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700,
              letterSpacing: '0.1em', padding: '9px 24px', textDecoration: 'none',
              display: 'inline-block', transition: 'background 0.2s',
              clipPath: clip6,
            }}
          >
            ♡ Donate to the Masjid
          </a>
        </div>
      </div>
    </header>
  )
}
