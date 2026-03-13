import { useState } from 'react'
import { Link } from 'react-router-dom'
import TopBanner from '../components/TopBanner.jsx'
import Header from '../components/Header.jsx'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { Ornament, SectionHeading, VerseBanner, CTABtn, PageHero, FramedImage } from '../components/shared.jsx'
import C, { clip7, clip5 } from '../colors.js'

// ── MISSION ──────────────────────────────────────────────────────────────────
function MissionSection() {
  const [bh, setBh] = useState(false)
  return (
    <section style={{ padding: '70px 0 50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
      <div>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 30, color: C.greenDeep, fontWeight: 700, letterSpacing: '0.04em', marginBottom: 6 }}>Our Mission</h2>
        <span style={{ fontFamily: "'Amiri', serif", color: C.gold, fontSize: 18, display: 'block', marginBottom: 20 }}>— رسالتنا —</span>
        {[
          'The Tri-State Islamic Center was established in 1993 to serve the growing Muslim community of Dubuque, Iowa and the surrounding tri-state region. We are committed to providing a vibrant center for worship, education, and community service.',
          'Our mission is to establish and maintain a masjid that fulfills the spiritual, educational, and social needs of the Muslim community — while also serving as a bridge of understanding between Muslims and non-Muslims in our city.',
          'We strive to uphold the teachings of the Quran and the Sunnah of Prophet Muhammad ﷺ in all that we do, and to embody the values of mercy, justice, and brotherhood that Islam teaches.',
        ].map((t, i) => (
          <p key={i} style={{ color: C.textMid, marginBottom: 16, fontSize: 17, lineHeight: 1.85 }}>{t}</p>
        ))}
        <Link to="/services"
          onMouseEnter={() => setBh(true)} onMouseLeave={() => setBh(false)}
          style={{ background: bh ? C.goldLight : C.gold, color: C.greenDeep, fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', padding: '13px 32px', textDecoration: 'none', display: 'inline-block', marginTop: 10, clipPath: clip7, transition: 'background 0.2s' }}>
          Our Services
        </Link>
      </div>
      <FramedImage
        src="http://tristateislamic.center/wp-content/uploads/2019/07/IMG_7766-e1563484574532.jpg"
        alt="Tri-State Islamic Center"
        caption="Tri-State Islamic Center, Dubuque, Iowa"
      />
    </section>
  )
}

// ── LEADERSHIP ───────────────────────────────────────────────────────────────

// ── TO UPDATE: Replace `photo: null` with a URL string to show a real photo.
// ── Example:  photo: 'https://yoursite.com/uploads/president.jpg'
// ──           photo: '/photos/president.jpg'  (if stored in /public/photos/)

const EXECUTIVE_BOARD = [
  {
    photo: null,
    name: 'firstname lastname',       // ← REPLACE with President's name
    role: 'President',
    roleAr: 'الرئيس',
    desc: 'Leads the Islamic Center, presides over board meetings, and represents the organization in the community.',
  },
  {
    photo: null,
    name: 'firstname lastname',       // ← REPLACE with Vice-President's name
    role: 'Vice-President',
    roleAr: 'نائب الرئيس',
    desc: 'Supports the President in all duties and assumes presidential responsibilities when needed.',
  },
  {
    photo: null,
    name: 'firstname lastname',       // ← REPLACE with Treasurer's name
    role: 'Treasurer',
    roleAr: 'أمين الصندوق',
    desc: 'Manages the financial affairs of the Islamic Center, including budgeting, accounting, and financial reporting.',
  },
  {
    photo: null,
    name: 'firstname lastname',       // ← REPLACE with Social Secretary's name
    role: 'Social Secretary',
    roleAr: 'السكرتير الاجتماعي',
    desc: 'Organizes community events, manages communications, and fosters relationships within the congregation.',
  },
  {
    photo: null,
    name: 'firstname lastname',       // ← REPLACE with General Secretary's name
    role: 'General Secretary',
    roleAr: 'الأمين العام',
    desc: 'Maintains records, handles correspondence, and ensures smooth day-to-day administration of the center.',
  },
]

const ADVISORY_BOARD = [
  { photo: null, name: 'firstname lastname' },   // ← REPLACE
  { photo: null, name: 'firstname lastname' },   // ← REPLACE
  { photo: null, name: 'firstname lastname' },   // ← REPLACE
  { photo: null, name: 'firstname lastname' },   // ← REPLACE
  { photo: null, name: 'firstname lastname' },   // ← REPLACE
  { photo: null, name: 'firstname lastname' },   // ← REPLACE
]

// Photo placeholder shown when no photo URL is provided yet
function PhotoPlaceholder({ initials }) {
  return (
    <div style={{
      width: '100%', aspectRatio: '1 / 1',
      background: `linear-gradient(135deg, ${C.greenDeep}, ${C.greenMid})`,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderBottom: `3px solid ${C.gold}`,
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: "'Amiri', serif", fontSize: 48, color: C.gold, lineHeight: 1, marginBottom: 8 }}>
          {initials}
        </div>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: 10, color: 'rgba(201,168,76,0.5)', letterSpacing: '0.12em' }}>
          PHOTO PENDING
        </div>
      </div>
    </div>
  )
}

function getInitials(name) {
  return name
    .split(' ')
    .map(w => w[0]?.toUpperCase() || '')
    .slice(0, 2)
    .join('')
}

function ExecutiveCard({ photo, name, role, roleAr, desc }) {
  const initials = getInitials(name)
  return (
    <div style={{ background: C.creamDark, border: '1px solid rgba(201,168,76,0.3)', overflow: 'hidden' }}>
      {/* Photo area */}
      <div style={{ position: 'relative' }}>
        {photo
          ? <img src={photo} alt={name} style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', display: 'block', borderBottom: `3px solid ${C.gold}` }} />
          : <PhotoPlaceholder initials={initials} />
        }
        {/* Role badge overlay */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          background: 'linear-gradient(to top, rgba(26,60,46,0.95), transparent)',
          padding: '24px 16px 10px',
        }}>
          <span style={{ fontFamily: "'Cinzel', serif", fontSize: 11, fontWeight: 700, color: C.gold, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            {role}
          </span>
        </div>
      </div>
      {/* Text */}
      <div style={{ padding: '18px 22px 20px' }}>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: 15, fontWeight: 700, color: C.greenDeep, marginBottom: 4 }}>{name}</div>
        <span style={{ fontFamily: "'Amiri', serif", fontSize: 16, color: C.gold, display: 'block' }}>{roleAr}</span>
      </div>
    </div>
  )
}

function AdvisoryCard({ photo, name }) {
  const initials = getInitials(name)
  return (
    <div style={{ background: C.creamDark, border: '1px solid rgba(201,168,76,0.3)', overflow: 'hidden', textAlign: 'center' }}>
      {photo
        ? <img src={photo} alt={name} style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover', display: 'block', borderBottom: `3px solid ${C.gold}` }} />
        : <PhotoPlaceholder initials={initials} />
      }
      <div style={{ padding: '16px 16px 20px' }}>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: 14, fontWeight: 700, color: C.greenDeep, marginBottom: 4 }}>{name}</div>
        <span style={{ fontFamily: "'Amiri', serif", fontSize: 15, color: C.gold }}>Advisory Board Member</span>
      </div>
    </div>
  )
}

function LeadershipSection() {
  return (
    <section style={{ padding: '70px 0' }}>

      {/* ── Executive Board ── */}
      <SectionHeading en="Our Leadership" ar="قيادتنا" />
      <Ornament />

      <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 16, fontWeight: 700, color: C.greenDeep, letterSpacing: '0.14em', textTransform: 'uppercase', textAlign: 'center', marginTop: 40, marginBottom: 6 }}>
        Executive Board
      </h3>
      <div style={{ fontFamily: "'Amiri', serif", fontSize: 18, color: C.gold, textAlign: 'center', marginBottom: 32 }}>
        مجلس التنفيذي
      </div>

      {/* First row: 3 cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginBottom: 28 }}>
        {EXECUTIVE_BOARD.slice(0, 3).map(m => <ExecutiveCard key={m.role} {...m} />)}
      </div>
      {/* Second row: 2 cards centered */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 28, marginBottom: 60 }}>
        {EXECUTIVE_BOARD.slice(3).map(m => (
          <div key={m.role} style={{ width: 'calc(33.333% - 14px)' }}>
            <ExecutiveCard {...m} />
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ borderTop: `1px solid rgba(201,168,76,0.25)`, marginBottom: 60 }} />

      {/* ── Advisory Board ── */}
      <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 16, fontWeight: 700, color: C.greenDeep, letterSpacing: '0.14em', textTransform: 'uppercase', textAlign: 'center', marginBottom: 6 }}>
        Advisory Board
      </h3>
      <div style={{ fontFamily: "'Amiri', serif", fontSize: 18, color: C.gold, textAlign: 'center', marginBottom: 32 }}>
        المجلس الاستشاري
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginBottom: 40 }}>
        {ADVISORY_BOARD.map((m, i) => <AdvisoryCard key={i} {...m} />)}
      </div>

      <p style={{ textAlign: 'center', fontFamily: "'Amiri', serif", fontSize: 16, color: C.textMid }}>
        To contact our leadership or inquire about the center, please visit our{' '}
        <a href="https://tristateislamic.center/contact/" style={{ color: C.greenMid, fontWeight: 600 }}>Contact page</a>.
      </p>
    </section>
  )
}

// ── DIVERSITY ─────────────────────────────────────────────────────────────────
const ETHNICITIES = ['Arab', 'South Asian', 'African', 'Southeast Asian', 'American', 'Bosnian', 'Somali', 'Afghan', 'Turkish', 'Iranian', 'West African', 'And More']

function DiversitySection() {
  const [bh, setBh] = useState(false)
  return (
    <section style={{ padding: '0 0 70px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
      <div>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 28, color: C.greenDeep, fontWeight: 700, marginBottom: 6 }}>A Diverse Community</h2>
        <span style={{ fontFamily: "'Amiri', serif", color: C.gold, fontSize: 18, display: 'block', marginBottom: 20 }}>— مجتمعنا المتنوع —</span>
        {[
          'One of the greatest blessings of our masjid is the diversity of its congregation. Our community is made up of families and individuals from nearly every part of the Muslim world and beyond, living and worshipping together in Dubuque, Iowa.',
          'This diversity reflects the universal nature of Islam — a faith for all of humanity, regardless of race, language, or origin. In our masjid, Arab and African, South Asian and Southeast Asian, American-born and immigrant, all stand shoulder to shoulder in prayer.',
          '"O mankind, indeed We have created you from male and female and made you peoples and tribes that you may know one another." — Surah Al-Hujurat, 49:13',
        ].map((t, i) => (
          <p key={i} style={{ color: C.textMid, marginBottom: 16, fontSize: 17, lineHeight: 1.8 }}>{t}</p>
        ))}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
          {ETHNICITIES.map(e => (
            <span key={e} style={{ background: C.greenDeep, color: C.goldLight, fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: '0.08em', padding: '5px 14px', border: '1px solid rgba(201,168,76,0.3)' }}>{e}</span>
          ))}
        </div>
      </div>
      <div style={{ background: C.greenDeep, border: `2px solid ${C.gold}`, padding: 32 }}>
        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 18, color: C.cream, fontWeight: 700, letterSpacing: '0.06em', marginBottom: 6 }}>Visit the Center</h3>
        <span style={{ fontFamily: "'Amiri', serif", fontSize: 18, color: C.gold, display: 'block', marginBottom: 24 }}>زيارة المركز</span>
        {[
          ['📍', <span>Tri-State Islamic Center<br />Dubuque, Iowa</span>],
          ['🕐', <span><strong>Friday Jummah:</strong><br />Every Friday at 1:30 PM</span>],
          ['🙏', <span><strong>Daily Prayers:</strong><br />Masjid open for all five prayers</span>],
          ['📘', <a href="https://www.facebook.com/TriStateIslamicCenter/" target="_blank" rel="noreferrer" style={{ color: C.goldLight, textDecoration: 'none' }}>Follow us on Facebook</a>],
          ['▶',  <a href="https://www.youtube.com/channel/UCpzSKvn2xHePQqOzfxVMWtA" target="_blank" rel="noreferrer" style={{ color: C.goldLight, textDecoration: 'none' }}>Watch on YouTube</a>],
        ].map(([icon, content], i) => (
          <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', marginBottom: 16, paddingBottom: 16, borderBottom: i < 4 ? '1px solid rgba(201,168,76,0.15)' : 'none' }}>
            <span style={{ fontSize: 18, color: C.gold, flexShrink: 0 }}>{icon}</span>
            <span style={{ fontSize: 16, color: 'rgba(253,246,232,0.85)', lineHeight: 1.6 }}>{content}</span>
          </div>
        ))}
        <a href="https://tristateislamic.center/contact/"
          onMouseEnter={() => setBh(true)} onMouseLeave={() => setBh(false)}
          style={{ display: 'inline-block', marginTop: 8, background: bh ? C.goldLight : C.gold, color: C.greenDeep, fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', padding: '12px 28px', textDecoration: 'none', clipPath: clip5, transition: 'background 0.2s' }}>
          Get in Touch
        </a>
      </div>
    </section>
  )
}

// ── CTA STRIP ─────────────────────────────────────────────────────────────────
function CTAStrip() {
  return (
    <div style={{ width: '100%', background: C.greenDeep, borderTop: `3px solid ${C.gold}`, borderBottom: `3px solid ${C.gold}`, padding: '70px 40px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 28, color: C.cream, fontWeight: 700, letterSpacing: '0.06em', marginBottom: 8 }}>Come Join Our Community</h2>
      <span style={{ fontFamily: "'Amiri', serif", fontSize: 20, color: C.gold, display: 'block', marginBottom: 16 }}>أهلاً وسهلاً بكم</span>
      <p style={{ color: 'rgba(253,246,232,0.8)', fontSize: 17, maxWidth: 640, margin: '0 auto 36px', lineHeight: 1.8 }}>
        Whether you are a Muslim looking for a place to pray and connect, or a non-Muslim curious about Islam, the doors of our masjid are open to all.
      </p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        <CTABtn label="Contact Us"          href="https://tristateislamic.center/contact/" primary />
        <CTABtn label="Our Services"        href="/services" />
        <CTABtn label="Donate to the Masjid" href="https://tristateislamic.center/donate/" />
      </div>
    </div>
  )
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <div style={{ fontFamily: "'Crimson Pro', Georgia, serif", background: C.cream, color: C.textDark, overflowX: 'hidden' }}>
      <TopBanner />
      <Header />
      <Nav />
      <PageHero arabicTitle="من نحن" englishTitle="About Us" breadcrumb={<><a href="/" style={{ color: C.gold, textDecoration: 'none' }}>Home</a> <span style={{ margin: '0 10px', color: 'rgba(201,168,76,0.4)' }}>›</span> About Us</>} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <MissionSection />
      </div>

      <VerseBanner
        arabic="إِنَّمَا يَعْمُرُ مَسَاجِدَ اللهِ مَنْ آمَنَ بِاللهِ وَالْيَوْمِ الْآخِرِ"
        translation='"The mosques of Allah are only to be maintained by those who believe in Allah and the Last Day."'
        reference="Surah At-Tawbah, 9:18"
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <LeadershipSection />
        <DiversitySection />
      </div>

      <CTAStrip />
      <Footer />
    </div>
  )
}
