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

// ── PILLARS ──────────────────────────────────────────────────────────────────
const PILLARS = [
  { icon: '🤲', ar: 'الإيمان', en: 'Faith (Iman)',            desc: 'We are grounded in the belief in Allah, His angels, His books, His messengers, the Last Day, and divine decree.' },
  { icon: '🕌', ar: 'العبادة', en: 'Worship (Ibadah)',        desc: 'We uphold the five pillars of Islam and strive to make the masjid a living center of sincere devotion to Allah.' },
  { icon: '📖', ar: 'العلم',   en: 'Knowledge (Ilm)',         desc: 'Seeking and sharing knowledge is a sacred duty. We offer classes and resources rooted in the Quran and Sunnah.' },
  { icon: '🤝', ar: 'الأخوة', en: 'Brotherhood (Ukhuwwah)',  desc: 'The bond between believers transcends ethnicity and nationality. All are equal in the eyes of Allah.' },
  { icon: '💛', ar: 'الرحمة', en: 'Mercy (Rahmah)',          desc: 'Following the example of the Prophet ﷺ, we extend compassion and care to all people — Muslim and non-Muslim.' },
  { icon: '🌍', ar: 'الخدمة', en: 'Service (Khidmah)',       desc: 'We are committed to serving our local community, supporting those in need, and contributing to the good of society.' },
]

function PillarCard({ icon, ar, en, desc }) {
  const [h, setH] = useState(false)
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: h ? 'rgba(201,168,76,0.08)' : 'rgba(255,255,255,0.04)', border: `1px solid ${h ? C.gold : 'rgba(201,168,76,0.2)'}`, padding: '36px 28px', textAlign: 'center', transition: 'background 0.2s, border-color 0.2s' }}>
      <span style={{ fontSize: 36, display: 'block', marginBottom: 12 }}>{icon}</span>
      <span style={{ fontFamily: "'Amiri', serif", fontSize: 22, color: C.gold, display: 'block', marginBottom: 6 }}>{ar}</span>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: C.cream, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 12 }}>{en}</div>
      <p style={{ fontSize: 15, color: 'rgba(253,246,232,0.75)', lineHeight: 1.7 }}>{desc}</p>
    </div>
  )
}

function PillarsSection() {
  return (
    <div style={{ width: '100%', backgroundColor: C.greenDeep, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(201,168,76,0.03) 30px, rgba(201,168,76,0.03) 31px)', borderTop: '1px solid rgba(201,168,76,0.2)', borderBottom: '1px solid rgba(201,168,76,0.2)', padding: '70px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading en="Our Core Values" ar="قيمنا الأساسية" light />
        <Ornament />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 40 }}>
          {PILLARS.map(p => <PillarCard key={p.en} {...p} />)}
        </div>
      </div>
    </div>
  )
}

// ── LEADERSHIP ───────────────────────────────────────────────────────────────
const LEADERS = [
  { avatar: 'إ', name: 'Imam / Khateeb',      role: 'إمام المسجد',   desc: 'Leads congregational prayers, delivers the Friday Khutbah, and provides spiritual guidance to the community.' },
  { avatar: 'م', name: 'Board of Directors',   role: 'مجلس الإدارة',  desc: 'Elected community members who oversee the administration, finances, and long-term vision of the Islamic Center.' },
  { avatar: 'ع', name: 'Education Committee',  role: 'لجنة التعليم',  desc: 'Dedicated volunteers who organize classes, lectures, and educational programs for children and adults.' },
]

function LeaderCard({ avatar, name, role, desc }) {
  return (
    <div style={{ background: C.creamDark, border: '1px solid rgba(201,168,76,0.3)', padding: '36px 28px', textAlign: 'center' }}>
      <div style={{ width: 80, height: 80, borderRadius: '50%', background: C.greenDeep, border: `3px solid ${C.gold}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontFamily: "'Amiri', serif", fontSize: 32, color: C.gold }}>
        {avatar}
      </div>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 16, fontWeight: 700, color: C.greenDeep, marginBottom: 6 }}>{name}</div>
      <span style={{ fontFamily: "'Amiri', serif", fontSize: 17, color: C.gold, display: 'block', marginBottom: 14 }}>{role}</span>
      <p style={{ fontSize: 15, color: C.textMid, lineHeight: 1.7 }}>{desc}</p>
    </div>
  )
}

function LeadershipSection() {
  return (
    <section style={{ padding: '70px 0' }}>
      <SectionHeading en="Our Leadership" ar="قيادتنا" />
      <Ornament />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 28, marginTop: 40 }}>
        {LEADERS.map(l => <LeaderCard key={l.name} {...l} />)}
      </div>
      <p style={{ textAlign: 'center', marginTop: 32, fontFamily: "'Amiri', serif", fontSize: 16, color: C.textMid }}>
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

      <PillarsSection />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <LeadershipSection />
        <DiversitySection />
      </div>

      <CTAStrip />
      <Footer />
    </div>
  )
}
