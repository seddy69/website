import { useState } from 'react'
import { Link } from 'react-router-dom'
import TopBanner from '../components/TopBanner.jsx'
import Header from '../components/Header.jsx'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { Ornament, SectionHeading, VerseBanner, FramedImage } from '../components/shared.jsx'
import C, { geoBgHero, clip7, clip8 } from '../colors.js'

// ── HERO ────────────────────────────────────────────────────────────────────
function Hero() {
  const [b1, setB1] = useState(false)
  const [b2, setB2] = useState(false)
  return (
    <section style={{
      ...geoBgHero, minHeight: 420, display: 'flex', alignItems: 'center',
      justifyContent: 'center', textAlign: 'center',
      position: 'relative', overflow: 'hidden', borderBottom: `3px solid ${C.gold}`,
    }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(61,122,90,0.35) 0%, transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: 400, height: 300, border: '1px solid rgba(201,168,76,0.15)', borderRadius: '50% 50% 0 0 / 60% 60% 0 0', pointerEvents: 'none' }} />
      <div style={{ position: 'relative', zIndex: 2, maxWidth: 780, padding: '60px 40px' }}>
        <div style={{ fontFamily: "'Amiri', serif", fontSize: 42, color: C.goldLight, marginBottom: 16, lineHeight: 1.4, textShadow: '0 2px 20px rgba(0,0,0,0.5)' }}>
          السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
        </div>
        <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: 36, color: C.cream, fontWeight: 700, letterSpacing: '0.05em', lineHeight: 1.3, marginBottom: 10 }}>
          Welcome to the Tri-State Islamic Center
        </h1>
        <div style={{ fontFamily: "'Amiri', serif", fontSize: 20, color: C.gold, letterSpacing: '0.08em', marginBottom: 28, fontStyle: 'italic' }}>
          A House of Allah — A Home for the Community
        </div>
        <p style={{ color: 'rgba(253,246,232,0.85)', fontSize: 17, lineHeight: 1.8, marginBottom: 36 }}>
          Serving the Muslim community of Dubuque, Iowa and the tri-state region since 1993.
          Our mosque is a place of worship, learning, and brotherhood for all.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/about"
            onMouseEnter={() => setB1(true)} onMouseLeave={() => setB1(false)}
            style={{ background: b1 ? C.goldLight : C.gold, color: C.greenDeep, fontFamily: "'Cinzel', serif", fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', padding: '14px 36px', textDecoration: 'none', clipPath: clip8, transition: 'background 0.2s' }}>
            Our Community
          </Link>
          <a href="https://tristateislamic.center/learn/"
            onMouseEnter={() => setB2(true)} onMouseLeave={() => setB2(false)}
            style={{ background: b2 ? 'rgba(201,168,76,0.15)' : 'transparent', color: C.goldLight, fontFamily: "'Cinzel', serif", fontSize: 14, fontWeight: 600, letterSpacing: '0.1em', padding: '13px 36px', textDecoration: 'none', border: `1px solid ${C.gold}`, transition: 'background 0.2s' }}>
            Learn About Islam
          </a>
        </div>
      </div>
    </section>
  )
}

// ── PRAYER TIMES BAR ────────────────────────────────────────────────────────
const PRAYERS = [
  { en: 'Fajr',    ar: 'الفجر',  time: '5:45 AM' },
  { en: 'Dhuhr',   ar: 'الظهر',  time: '1:15 PM' },
  { en: 'Asr',     ar: 'العصر',  time: '4:30 PM' },
  { en: 'Maghrib', ar: 'المغرب', time: '6:50 PM' },
  { en: 'Isha',    ar: 'العشاء', time: '8:15 PM' },
  { en: "Jumu'ah", ar: 'الجمعة', time: '1:30 PM', highlight: true },
]

function PrayerBar() {
  return (
    <div style={{ background: C.greenDeep, borderTop: '1px solid rgba(201,168,76,0.2)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap' }}>
        {PRAYERS.map((p, i) => (
          <div key={p.en} style={{
            flex: 1, minWidth: 100, textAlign: 'center', padding: '16px 20px',
            borderRight: i < PRAYERS.length - 1 ? '1px solid rgba(201,168,76,0.2)' : 'none',
            background: p.highlight ? 'rgba(201,168,76,0.08)' : 'transparent',
          }}>
            <span style={{ fontFamily: "'Amiri', serif", fontSize: 14, color: 'rgba(253,246,232,0.6)', display: 'block', marginBottom: 2 }}>{p.ar}</span>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: '0.15em', color: C.gold, display: 'block', marginBottom: 2 }}>{p.en}</span>
            <span style={{ fontFamily: "'Amiri', serif", fontSize: 18, color: p.highlight ? C.gold : C.cream, fontWeight: 700, display: 'block' }}>{p.time}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// ── WELCOME SECTION ──────────────────────────────────────────────────────────
function WelcomeSection() {
  const [bh, setBh] = useState(false)
  return (
    <section style={{ padding: '70px 0 50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
      <div>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, color: C.greenDeep, fontWeight: 700, letterSpacing: '0.04em', lineHeight: 1.25, marginBottom: 6 }}>
          Welcome to Our Mosque
        </h2>
        <span style={{ fontFamily: "'Amiri', serif", color: C.gold, fontSize: 17, fontStyle: 'italic', marginBottom: 20, display: 'block' }}>
          — Established 1993 · Dubuque, Iowa —
        </span>
        {[
          'The Tri-State Islamic Center is the first landmark and pride for our city and the Muslim community. The mosque occupies about 8,200 square meters of land, has a capacity of 150 worshipers, and a 72-foot high minaret topped with a gold leaf crescent.',
          'This mosque is a strong resource for the Muslim and non-Muslim community to learn about Islam and increase their faith in God. The community can learn ways to implement Islam in our daily lives, from the Quran and the Sunnah of Prophet Muhammad ﷺ.',
          'Our community consists of nearly every kind of ethnic group found in the Muslim world and beyond, which brings a wonderful variety of people to each community activity.',
        ].map((t, i) => (
          <p key={i} style={{ color: C.textMid, marginBottom: 16, fontSize: 17, lineHeight: 1.85 }}>{t}</p>
        ))}
        <Link to="/about"
          onMouseEnter={() => setBh(true)} onMouseLeave={() => setBh(false)}
          style={{ background: bh ? C.goldLight : C.gold, color: C.greenDeep, fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', padding: '13px 32px', textDecoration: 'none', display: 'inline-block', marginTop: 10, clipPath: clip7, transition: 'background 0.2s' }}>
          Learn More About Us
        </Link>
      </div>
      <FramedImage
        src="http://tristateislamic.center/wp-content/uploads/2019/07/IMG_7766-e1563484574532.jpg"
        alt="Tri-State Islamic Center Mosque"
        caption="Tri-State Islamic Center, Dubuque, Iowa"
      />
    </section>
  )
}

// ── QUICK LINKS ──────────────────────────────────────────────────────────────
const QUICK_LINKS = [
  { icon: '🗓', title: 'Events',     desc: 'Stay informed about our ongoing and upcoming community events and programs.',        href: 'https://tristateislamic.center/events/' },
  { icon: '🕌', title: 'Donate',     desc: 'Support the masjid with your generous sadaqah and help it continue to flourish.',    href: 'https://tristateislamic.center/donate/' },
  { icon: '🖼', title: 'Gallery',    desc: 'Browse photos from our community gatherings, events, and mosque activities.',         href: 'https://tristateislamic.center/gallery/' },
  { icon: '📖', title: 'Learn Islam',desc: 'Resources for Muslims and non-Muslims to learn about the faith and its practice.',   href: 'https://tristateislamic.center/learn/' },
]

function QuickCard({ icon, title, desc, href }) {
  const [h, setH] = useState(false)
  return (
    <a href={href}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        background: C.creamDark, border: `1px solid ${h ? C.gold : 'rgba(201,168,76,0.35)'}`,
        borderTop: `3px solid ${h ? C.gold : 'transparent'}`,
        padding: '36px 24px 28px', textAlign: 'center', textDecoration: 'none', color: C.textDark,
        transition: 'transform 0.2s, box-shadow 0.2s, border-color 0.2s', display: 'block',
        transform: h ? 'translateY(-3px)' : 'none',
        boxShadow: h ? '0 8px 28px rgba(26,60,46,0.15)' : 'none',
      }}>
      <span style={{ fontSize: 36, marginBottom: 12, display: 'block', color: C.greenMid }}>{icon}</span>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 14, fontWeight: 700, letterSpacing: '0.1em', color: C.greenDeep, marginBottom: 10, textTransform: 'uppercase' }}>{title}</div>
      <p style={{ fontSize: 15, color: C.textMid, lineHeight: 1.6 }}>{desc}</p>
    </a>
  )
}

function QuickLinks() {
  return (
    <section style={{ padding: '70px 0' }}>
      <SectionHeading en="Community Resources" ar="خدمات المجتمع" />
      <Ornament />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, marginTop: 40 }}>
        {QUICK_LINKS.map(l => <QuickCard key={l.title} {...l} />)}
      </div>
    </section>
  )
}

// ── SERVICES SECTION ─────────────────────────────────────────────────────────
const SERVICES = [
  { num: '٠١', title: 'Daily Prayers (Salah)',   desc: 'The masjid is open for all five daily prayers. Come and worship together in congregation.' },
  { num: '٠٢', title: 'Friday Jummah Prayer',    desc: 'Weekly Friday sermon and congregational prayer begins at 1:30 PM. All are welcome.' },
  { num: '٠٣', title: 'Islamic Education',       desc: 'Classes, lectures, and resources for children and adults to deepen their knowledge of Deen.' },
  { num: '٠٤', title: 'Community Outreach',      desc: 'Building bridges with the broader Dubuque community and welcoming those who seek to learn.' },
]

function ServiceCard({ num, title, desc }) {
  const [h, setH] = useState(false)
  return (
    <Link to="/services"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{
        background: C.cream, border: '1px solid rgba(201,168,76,0.3)',
        borderTop: `4px solid ${C.greenMid}`, padding: '32px 26px',
        textDecoration: 'none', color: 'inherit',
        boxShadow: h ? '0 6px 24px rgba(26,60,46,0.12)' : 'none',
        transition: 'box-shadow 0.2s', display: 'block',
      }}>
      <span style={{ fontFamily: "'Amiri', serif", fontSize: 40, color: 'rgba(201,168,76,0.25)', display: 'block', lineHeight: 1, marginBottom: 8, fontWeight: 700 }}>{num}</span>
      <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 16, fontWeight: 700, letterSpacing: '0.07em', color: C.greenDeep, marginBottom: 12 }}>{title}</h3>
      <p style={{ fontSize: 16, color: C.textMid, lineHeight: 1.7 }}>{desc}</p>
    </Link>
  )
}

function ServicesSection() {
  return (
    <div style={{ width: '100%', backgroundColor: C.creamDark, borderTop: '1px solid rgba(201,168,76,0.3)', borderBottom: '1px solid rgba(201,168,76,0.3)', padding: '70px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading en="Our Services" ar="خدماتنا" />
        <Ornament />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 28, marginTop: 40 }}>
          {SERVICES.map(s => <ServiceCard key={s.num} {...s} />)}
        </div>
      </div>
    </div>
  )
}

// ── JUMMAH SECTION ───────────────────────────────────────────────────────────
function JummahSection() {
  const [bh, setBh] = useState(false)
  return (
    <section style={{ padding: '70px 0', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'start' }}>
      <div>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 28, color: C.greenDeep, fontWeight: 700, letterSpacing: '0.04em', marginBottom: 6 }}>
          Live: Friday Sermon & Prayer
        </h2>
        <span style={{ fontFamily: "'Amiri', serif", fontSize: 22, color: C.gold, display: 'block', marginBottom: 16 }}>صلاة الجمعة</span>
        <p style={{ color: C.textMid, fontSize: 17, marginBottom: 14, lineHeight: 1.8 }}>
          Watch the Dubuque Tri-State Islamic Center Friday sermon and prayer live here every week starting at <strong>1:30 PM</strong>. The Khutbah and Salat al-Jummah are open to all Muslims.
        </p>
        <p style={{ color: C.textMid, fontSize: 17, marginBottom: 20, lineHeight: 1.8 }}>
          To view past Jummah sermons and prayers, subscribe to our YouTube channel and receive notifications when new content is added.
        </p>
        <div style={{ background: C.greenDeep, color: C.cream, padding: '24px 28px', borderLeft: `4px solid ${C.gold}`, marginBottom: 20 }}>
          <p style={{ marginBottom: 6, fontSize: 16 }}>📍 <strong style={{ color: C.goldLight }}>Location:</strong> Tri-State Islamic Center, Dubuque, Iowa</p>
          <p style={{ marginBottom: 6, fontSize: 16 }}>🕐 <strong style={{ color: C.goldLight }}>Every Friday</strong> starting at <strong style={{ color: C.goldLight }}>1:30 PM</strong></p>
          <p style={{ fontSize: 16 }}>📺 Also livestreamed on <strong style={{ color: C.goldLight }}>YouTube</strong></p>
        </div>
        <a href="https://www.youtube.com/channel/UCpzSKvn2xHePQqOzfxVMWtA" target="_blank" rel="noreferrer"
          onMouseEnter={() => setBh(true)} onMouseLeave={() => setBh(false)}
          style={{ background: bh ? C.goldLight : C.gold, color: C.greenDeep, fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', padding: '13px 32px', textDecoration: 'none', display: 'inline-block', clipPath: clip7, transition: 'background 0.2s' }}>
          ▶ YouTube Channel
        </a>
      </div>
      <div>
        <div style={{ border: `3px solid ${C.gold}`, padding: 10, background: '#000' }}>
          <iframe
            src="https://www.youtube.com/embed/live_stream?channel=UCpzSKvn2xHePQqOzfxVMWtA"
            allowFullScreen title="Live Friday Sermon"
            style={{ width: '100%', aspectRatio: '16/9', display: 'block', border: 'none' }}
          />
        </div>
        <div style={{ background: C.greenDeep, color: C.gold, fontFamily: "'Amiri', serif", fontSize: 14, padding: '10px 14px', textAlign: 'center' }}>
          🔴 Live every Friday at 1:30 PM — Subscribe for notifications
        </div>
      </div>
    </section>
  )
}

// ── AFGHAN SECTION ───────────────────────────────────────────────────────────
function AfghanSection() {
  const [bh, setBh] = useState(false)
  return (
    <div style={{ background: C.greenDeep, border: `2px solid ${C.gold}`, padding: '48px', marginBottom: 70, display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'center' }}>
      <div>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 22, color: C.goldLight, fontWeight: 700, letterSpacing: '0.04em', marginBottom: 14 }}>Help Afghan Evacuees Resettle</h2>
        <p style={{ color: 'rgba(253,246,232,0.88)', fontSize: 16, marginBottom: 8, fontStyle: 'italic' }}>As-salamu alaykum brothers and sisters —</p>
        <p style={{ color: 'rgba(253,246,232,0.88)', fontSize: 16, lineHeight: 1.8 }}>
          You can make a difference by welcoming Afghan evacuees arriving in the US seeking stability and safety. Your donation supports emergency relocation costs, legal fees, food and shelter, and more. Your support means everything.
        </p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <a href="https://www.gofundme.com/f/lets-get-together-and-help-our-afghan-neighbors" target="_blank" rel="noreferrer"
          onMouseEnter={() => setBh(true)} onMouseLeave={() => setBh(false)}
          style={{ display: 'inline-block', background: bh ? C.goldLight : C.gold, color: C.greenDeep, fontFamily: "'Cinzel', serif", fontSize: 14, fontWeight: 700, padding: '14px 32px', textDecoration: 'none', letterSpacing: '0.08em', clipPath: clip8, transition: 'background 0.2s', marginBottom: 16 }}>
          Donate via GoFundMe
        </a>
        <p style={{ color: 'rgba(253,246,232,0.6)', fontSize: 14, marginTop: 8, fontFamily: "'Amiri', serif" }}>
          جَزَاكُمُ اللهُ خَيْرًا<br />May Allah reward you with good
        </p>
      </div>
    </div>
  )
}

// ── MAILING LIST ─────────────────────────────────────────────────────────────
function MailingList() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)
  const [bh, setBh] = useState(false)

  return (
    <div style={{ width: '100%', background: C.creamDark, borderTop: '2px solid rgba(201,168,76,0.3)', borderBottom: '2px solid rgba(201,168,76,0.3)', padding: '60px 40px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 24, color: C.greenDeep, fontWeight: 700, letterSpacing: '0.06em', marginBottom: 8 }}>Subscribe to Our Mailing List</h2>
      <span style={{ fontFamily: "'Amiri', serif", fontSize: 18, color: C.gold, display: 'block', marginBottom: 8 }}>اشترك في قائمتنا البريدية</span>
      <p style={{ color: C.textMid, fontSize: 16, marginBottom: 28 }}>Receive updates on events, news, and lectures related to the Dubuque Tri-State Islamic Center.</p>
      {done ? (
        <p style={{ fontFamily: "'Amiri', serif", fontSize: 20, color: C.greenDeep }}>جَزَاكَ اللهُ خَيْرًا — Thank you for subscribing!</p>
      ) : (
        <form onSubmit={e => { e.preventDefault(); if (name && email) setDone(true) }}
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', maxWidth: 560, margin: '0 auto' }}>
          <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)}
            style={{ flex: 1, minWidth: 160, padding: '13px 18px', border: '1px solid rgba(201,168,76,0.5)', background: C.cream, fontFamily: "'Crimson Pro', serif", fontSize: 16, color: C.textDark, outline: 'none' }} />
          <input type="email" placeholder="Your Email Address" value={email} onChange={e => setEmail(e.target.value)}
            style={{ flex: 1, minWidth: 200, padding: '13px 18px', border: '1px solid rgba(201,168,76,0.5)', background: C.cream, fontFamily: "'Crimson Pro', serif", fontSize: 16, color: C.textDark, outline: 'none' }} />
          <button type="submit" onMouseEnter={() => setBh(true)} onMouseLeave={() => setBh(false)}
            style={{ background: bh ? C.greenMid : C.greenDeep, color: C.goldLight, fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', padding: '13px 28px', border: `2px solid ${C.gold}`, cursor: 'pointer', clipPath: clip7, transition: 'background 0.2s' }}>
            Subscribe
          </button>
        </form>
      )}
    </div>
  )
}

// ── PAGE ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <div style={{ fontFamily: "'Crimson Pro', Georgia, serif", background: C.cream, color: C.textDark, overflowX: 'hidden' }}>
      <TopBanner />
      <Header />
      <Nav />
      <Hero />
      <PrayerBar />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <WelcomeSection />
      </div>

      <VerseBanner
        arabic="وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ"
        translation='"And establish prayer and give zakah and bow with those who bow [in worship and obedience]."'
        reference="Surah Al-Baqarah, 2:43"
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <QuickLinks />
      </div>

      <ServicesSection />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <JummahSection />
        <AfghanSection />
      </div>

      <MailingList />
      <Footer />
    </div>
  )
}
