import { useState } from 'react'
import TopBanner from '../components/TopBanner.jsx'
import Header from '../components/Header.jsx'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { Ornament, SectionHeading, PageHero, VerseBanner } from '../components/shared.jsx'
import C, { clip7, clip5 } from '../colors.js'

// ── CONTACT INFO CARDS ────────────────────────────────────────────────────────
const INFO_ITEMS = [
  {
    icon: '📍',
    title: 'Our Location',
    titleAr: 'موقعنا',
    lines: ['Tri-State Islamic Center', 'Dubuque, Iowa'],
  },
  {
    icon: '🕐',
    title: 'Prayer Times',
    titleAr: 'أوقات الصلاة',
    lines: ['Fajr: 5:45 AM', 'Dhuhr: 1:15 PM', 'Asr: 4:30 PM', 'Maghrib: 6:50 PM', 'Isha: 8:15 PM'],
    highlight: 'Friday Jummah: 1:30 PM',
  },
  {
    icon: '📅',
    title: 'Sunday School',
    titleAr: 'المدرسة الإسلامية',
    lines: ['Every Sunday', '10:00 AM – 2:00 PM', 'Open to all children and youth'],
  },
]

function InfoCard({ icon, title, titleAr, lines, highlight }) {
  return (
    <div style={{
      background: C.creamDark, border: '1px solid rgba(201,168,76,0.3)',
      borderTop: `4px solid ${C.gold}`, padding: '32px 28px',
    }}>
      <div style={{ fontSize: 32, marginBottom: 14 }}>{icon}</div>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 15, fontWeight: 700, color: C.greenDeep, letterSpacing: '0.08em', marginBottom: 4 }}>{title}</div>
      <span style={{ fontFamily: "'Amiri', serif", fontSize: 17, color: C.gold, display: 'block', marginBottom: 16 }}>{titleAr}</span>
      <div style={{ borderTop: '1px solid rgba(201,168,76,0.2)', paddingTop: 14 }}>
        {lines.map((l, i) => (
          <p key={i} style={{ fontSize: 15, color: C.textMid, lineHeight: 1.7 }}>{l}</p>
        ))}
        {highlight && (
          <p style={{ fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700, color: C.greenDeep, marginTop: 10, letterSpacing: '0.06em' }}>
            {highlight}
          </p>
        )}
      </div>
    </div>
  )
}

// ── SOCIAL LINKS ──────────────────────────────────────────────────────────────
function SocialLinks() {
  const [fbH, setFbH] = useState(false)
  const [ytH, setYtH] = useState(false)
  return (
    <div style={{ background: C.greenDeep, border: `2px solid ${C.gold}`, padding: '32px 28px' }}>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 15, fontWeight: 700, color: C.cream, letterSpacing: '0.08em', marginBottom: 4 }}>Follow Us</div>
      <span style={{ fontFamily: "'Amiri', serif", fontSize: 17, color: C.gold, display: 'block', marginBottom: 20 }}>تابعونا</span>
      <a
        href="https://www.facebook.com/TriStateIslamicCenter/"
        target="_blank" rel="noreferrer"
        onMouseEnter={() => setFbH(true)} onMouseLeave={() => setFbH(false)}
        style={{
          display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px',
          background: fbH ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.04)',
          border: `1px solid ${fbH ? C.gold : 'rgba(201,168,76,0.2)'}`,
          textDecoration: 'none', marginBottom: 12, transition: 'background 0.2s, border-color 0.2s',
        }}
      >
        <span style={{ fontSize: 22 }}>📘</span>
        <div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 12, fontWeight: 700, color: C.goldLight, letterSpacing: '0.1em' }}>FACEBOOK</div>
          <div style={{ fontSize: 14, color: 'rgba(253,246,232,0.6)' }}>@TriStateIslamicCenter</div>
        </div>
      </a>
      <a
        href="https://www.youtube.com/channel/UCpzSKvn2xHePQqOzfxVMWtA"
        target="_blank" rel="noreferrer"
        onMouseEnter={() => setYtH(true)} onMouseLeave={() => setYtH(false)}
        style={{
          display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px',
          background: ytH ? 'rgba(201,168,76,0.12)' : 'rgba(255,255,255,0.04)',
          border: `1px solid ${ytH ? C.gold : 'rgba(201,168,76,0.2)'}`,
          textDecoration: 'none', transition: 'background 0.2s, border-color 0.2s',
        }}
      >
        <span style={{ fontSize: 22 }}>▶</span>
        <div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 12, fontWeight: 700, color: C.goldLight, letterSpacing: '0.1em' }}>YOUTUBE</div>
          <div style={{ fontSize: 14, color: 'rgba(253,246,232,0.6)' }}>Tri-State Islamic Center</div>
        </div>
      </a>
    </div>
  )
}

// ── CONTACT FORM ──────────────────────────────────────────────────────────────
const SUBJECTS = [
  'General Inquiry',
  'Friday Jummah',
  'Sunday Islamic School',
  'Nikah (Marriage)',
  'Janazah (Funeral Services)',
  'Donation / Zakat',
  'Visiting the Masjid',
  'Other',
]

function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [btnH, setBtnH] = useState(false)

  const update = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const inputStyle = {
    width: '100%', padding: '13px 16px',
    border: `1px solid rgba(201,168,76,0.4)`,
    background: C.cream, fontFamily: "'Crimson Pro', serif",
    fontSize: 16, color: C.textDark, outline: 'none',
    marginBottom: 18, display: 'block',
  }

  const labelStyle = {
    fontFamily: "'Cinzel', serif", fontSize: 11, fontWeight: 700,
    color: C.greenDeep, letterSpacing: '0.12em', textTransform: 'uppercase',
    display: 'block', marginBottom: 6,
  }

  if (submitted) {
    return (
      <div style={{ background: C.creamDark, border: `2px solid ${C.gold}`, padding: '60px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>🤲</div>
        <div style={{ fontFamily: "'Amiri', serif", fontSize: 32, color: C.gold, marginBottom: 8 }}>
          جَزَاكَ اللهُ خَيْرًا
        </div>
        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 20, color: C.greenDeep, fontWeight: 700, marginBottom: 12 }}>
          Thank You for Reaching Out
        </h3>
        <p style={{ fontSize: 16, color: C.textMid, lineHeight: 1.8, maxWidth: 480, margin: '0 auto' }}>
          We have received your message and will get back to you as soon as possible, insha'Allah. May Allah bless you and your family.
        </p>
      </div>
    )
  }

  return (
    <div style={{ background: C.creamDark, border: '1px solid rgba(201,168,76,0.3)', padding: '40px 36px' }}>
      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 22, color: C.greenDeep, fontWeight: 700, letterSpacing: '0.05em', marginBottom: 6 }}>
        Send Us a Message
      </h2>
      <span style={{ fontFamily: "'Amiri', serif", fontSize: 18, color: C.gold, display: 'block', marginBottom: 28 }}>
        أرسل لنا رسالة
      </span>

      <form onSubmit={(e) => { e.preventDefault(); if (form.name && form.email && form.message) setSubmitted(true) }}>

        {/* Name + Email row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div>
            <label style={labelStyle}>Full Name *</label>
            <input type="text" placeholder="Your full name" value={form.name} onChange={update('name')} required style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Email Address *</label>
            <input type="email" placeholder="your@email.com" value={form.email} onChange={update('email')} required style={inputStyle} />
          </div>
        </div>

        {/* Phone + Subject row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <div>
            <label style={labelStyle}>Phone Number</label>
            <input type="tel" placeholder="(optional)" value={form.phone} onChange={update('phone')} style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Subject</label>
            <select value={form.subject} onChange={update('subject')} style={{ ...inputStyle, cursor: 'pointer' }}>
              <option value="">Select a subject...</option>
              {SUBJECTS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label style={labelStyle}>Message *</label>
          <textarea
            placeholder="Write your message here..."
            value={form.message} onChange={update('message')} required
            rows={6}
            style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.7 }}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          onMouseEnter={() => setBtnH(true)} onMouseLeave={() => setBtnH(false)}
          style={{
            background: btnH ? C.goldLight : C.gold, color: C.greenDeep,
            fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700,
            letterSpacing: '0.12em', padding: '14px 40px', border: 'none',
            cursor: 'pointer', clipPath: clip7, transition: 'background 0.2s',
          }}
        >
          Send Message
        </button>

        <p style={{ marginTop: 16, fontSize: 14, color: 'rgba(61,46,30,0.55)', fontStyle: 'italic' }}>
          * Required fields. We typically respond within 1–2 business days.
        </p>
      </form>
    </div>
  )
}

// ── MAP EMBED ─────────────────────────────────────────────────────────────────
function MapSection() {
  return (
    <div style={{ width: '100%', borderTop: '1px solid rgba(201,168,76,0.25)', borderBottom: '1px solid rgba(201,168,76,0.25)' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '60px 40px' }}>
        <SectionHeading en="Find Us" ar="موقعنا" />
        <Ornament />
        <div style={{ marginTop: 36, border: `3px solid ${C.gold}`, overflow: 'hidden', position: 'relative' }}>
          <iframe
            title="Tri-State Islamic Center Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2952.0!2d-90.7!3d42.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e2195b2e5e7b5b%3A0x1234567890abcdef!2sTriState+Islamic+Center%2C+Dubuque%2C+IA!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="420"
            style={{ display: 'block', border: 'none', filter: 'sepia(20%) contrast(1.1)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          {/* Gold overlay bar */}
          <div style={{ background: C.greenDeep, borderTop: `3px solid ${C.gold}`, padding: '14px 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <span style={{ fontFamily: "'Amiri', serif", fontSize: 16, color: C.goldLight }}>
              📍 Tri-State Islamic Center · Dubuque, Iowa
            </span>
            <a
              href="https://maps.google.com/?q=Tri-State+Islamic+Center+Dubuque+Iowa"
              target="_blank" rel="noreferrer"
              style={{ fontFamily: "'Cinzel', serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: C.gold, textDecoration: 'none', border: `1px solid ${C.gold}`, padding: '6px 16px' }}
            >
              OPEN IN MAPS ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function ContactPage() {
  return (
    <div style={{ fontFamily: "'Crimson Pro', Georgia, serif", background: C.cream, color: C.textDark, overflowX: 'hidden' }}>
      <TopBanner />
      <Header />
      <Nav />

      <PageHero
        arabicTitle="تواصل معنا"
        englishTitle="Contact Us"
        breadcrumb={
          <>
            <a href="/" style={{ color: C.gold, textDecoration: 'none' }}>Home</a>
            <span style={{ margin: '0 10px', color: 'rgba(201,168,76,0.4)' }}>›</span>
            Contact
          </>
        }
      />

      {/* Info cards + form */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '70px 40px' }}>

        {/* Top info row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 60 }}>
          {INFO_ITEMS.map(item => <InfoCard key={item.title} {...item} />)}
        </div>

        {/* Form + social side by side */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32, alignItems: 'start' }}>
          <ContactForm />
          <SocialLinks />
        </div>
      </div>

      {/* Verse */}
      <VerseBanner
        arabic="وَقُل رَّبِّ زِدْنِي عِلْمًا"
        translation='"And say: My Lord, increase me in knowledge."'
        reference="Surah Ta-Ha, 20:114"
      />

      {/* Map */}
      <MapSection />

      <Footer />
    </div>
  )
}
