import { useState } from 'react'
import TopBanner from '../components/TopBanner.jsx'
import Header from '../components/Header.jsx'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import { Ornament, SectionHeading, VerseBanner, CTABtn, PageHero, FramedImage } from '../components/shared.jsx'
import C, { clip7 } from '../colors.js'

// ── INTRO ─────────────────────────────────────────────────────────────────────
function IntroSection() {
  const [bh, setBh] = useState(false)
  return (
    <section style={{ padding: '70px 0 50px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
      <div>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 30, color: C.greenDeep, fontWeight: 700, letterSpacing: '0.04em', marginBottom: 6 }}>Serving the Community</h2>
        <span style={{ fontFamily: "'Amiri', serif", color: C.gold, fontSize: 18, display: 'block', marginBottom: 20 }}>— خدمة المجتمع —</span>
        {[
          'The Tri-State Islamic Center offers a wide range of services to meet the spiritual, educational, and social needs of the Muslim community in Dubuque, Iowa and the surrounding tri-state region.',
          'From the five daily prayers and Friday Jummah, to Islamic education for children and adults, community outreach, pastoral care, and life ceremonies — we are here to serve our community in every stage of life.',
          'Our doors are open to all. Whether you are a practicing Muslim, a new Muslim, or a non-Muslim curious about Islam, you are welcome to visit, participate, and ask questions.',
        ].map((t, i) => (
          <p key={i} style={{ color: C.textMid, marginBottom: 16, fontSize: 17, lineHeight: 1.85 }}>{t}</p>
        ))}
        <a href="https://tristateislamic.center/contact/"
          onMouseEnter={() => setBh(true)} onMouseLeave={() => setBh(false)}
          style={{ background: bh ? C.goldLight : C.gold, color: C.greenDeep, fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', padding: '13px 32px', textDecoration: 'none', display: 'inline-block', marginTop: 10, clipPath: clip7, transition: 'background 0.2s' }}>
          Contact Us
        </a>
      </div>
      <FramedImage
        src="http://tristateislamic.center/wp-content/uploads/2019/07/5ae668f613b7f.image_.jpg"
        alt="Islamic Center Services"
        caption="Tri-State Islamic Center — A Place for All"
      />
    </section>
  )
}

// ── LECTURES ──────────────────────────────────────────────────────────────────
const LECTURES = [
  { icon: '🕌', title: "Jumu'ah Khutbah",          ar: 'خطبة الجمعة',          desc: 'The weekly Friday sermon delivered to the congregation, covering topics of faith, community, and current affairs in the light of Islam.',                                          time: 'Every Friday · 1:15 PM' },
  { icon: '🌙', title: 'Eid Khutbah',               ar: 'خطبة العيد',           desc: 'Special sermon delivered on the mornings of Eid al-Fitr and Eid al-Adha, celebrating the blessings of Allah with the whole community.',                                            time: 'Eid Morning · 8:30 AM' },
  { icon: '📖', title: 'Sunday Islamic School',     ar: 'المدرسة الإسلامية',    desc: 'Weekly Islamic education classes for children and youth covering Quran recitation, Arabic, Islamic studies, and character development.',                                             time: 'Every Sunday · 10AM – 2PM' },
  { icon: '🎙️', title: 'Halaqah Lecture Series',   ar: 'سلسلة الحلقات',        desc: 'Regular gatherings featuring guest scholars and speakers who deliver educational talks on Islamic topics for adults and youth alike.' },
  { icon: '🤲', title: 'Daily Salah (Prayer)',      ar: 'الصلوات الخمس',        desc: 'The masjid is open for all five daily congregational prayers. Come join your brothers and sisters in worship throughout the day.' },
  { icon: '🎉', title: 'Eid & Community Gatherings',ar: 'الاحتفالات المجتمعية', desc: 'Annual Eid celebrations with community dinners, as well as Family Day potluck gatherings that bring the whole community together in joy.' },
]

function LectureCard({ icon, title, ar, desc, time }) {
  const [h, setH] = useState(false)
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: h ? 'rgba(201,168,76,0.07)' : 'rgba(255,255,255,0.04)', border: `1px solid ${h ? C.gold : 'rgba(201,168,76,0.2)'}`, padding: '32px 26px', transition: 'background 0.2s, border-color 0.2s' }}>
      <span style={{ fontSize: 34, display: 'block', marginBottom: 12 }}>{icon}</span>
      <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 15, fontWeight: 700, color: C.cream, letterSpacing: '0.08em', marginBottom: 6 }}>{title}</h3>
      <span style={{ fontFamily: "'Amiri', serif", fontSize: 17, color: C.gold, display: 'block', marginBottom: 12 }}>{ar}</span>
      <p style={{ fontSize: 15, color: 'rgba(253,246,232,0.75)', lineHeight: 1.7, marginBottom: time ? 14 : 0 }}>{desc}</p>
      {time && (
        <span style={{ display: 'inline-block', background: 'rgba(201,168,76,0.15)', color: C.goldLight, fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: '0.1em', padding: '5px 14px', border: '1px solid rgba(201,168,76,0.3)' }}>{time}</span>
      )}
    </div>
  )
}

function LecturesSection() {
  return (
    <div style={{ width: '100%', backgroundColor: C.greenDeep, backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(201,168,76,0.03) 30px, rgba(201,168,76,0.03) 31px)', borderTop: '1px solid rgba(201,168,76,0.2)', borderBottom: '1px solid rgba(201,168,76,0.2)', padding: '70px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <SectionHeading en="Lectures & Classes" ar="المحاضرات والدروس" light />
        <Ornament />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 40 }}>
          {LECTURES.map(l => <LectureCard key={l.title} {...l} />)}
        </div>
      </div>
    </div>
  )
}

// ── PASTORAL SERVICES ────────────────────────────────────────────────────────
const PASTORAL = [
  { icon: '🍽️', title: 'Feed the Needy',            ar: 'إطعام المحتاجين',         desc: 'Our community outreach program dedicated to feeding those in need in Dubuque. Rooted in the Islamic duty of charity and care for the less fortunate.' },
  { icon: '💍', title: 'Nikah (Islamic Marriage)',   ar: 'عقد الزواج الإسلامي',     desc: 'The Islamic Center facilitates the Nikah ceremony in accordance with Islamic law, solemnizing marriages for Muslim couples in the community.' },
  { icon: '👶', title: 'Aqiqah (Child Ceremony)',    ar: 'العقيقة',                 desc: 'Celebrating the birth of a new child with the traditional Islamic Aqiqah ceremony — a blessed occasion of gratitude and naming for the family.' },
  { icon: '🕊️', title: 'Janazah (Funeral Services)',ar: 'صلاة الجنازة',            desc: 'We provide full Islamic funeral rites — Ghusl, Kafan, Salat al-Janazah, and burial — with dignity and care in accordance with the Sunnah.' },
  { icon: '🤝', title: 'Counseling',                ar: 'الإرشاد والتوجيه',        desc: 'Pastoral counseling and guidance is available for community members facing personal, family, or spiritual challenges, grounded in Islamic values.' },
  { icon: '⚰️', title: 'Islamic Cemetery',          ar: 'المقبرة الإسلامية',        desc: 'The center maintains an Islamic cemetery providing dignified burial plots for Muslims in the Dubuque region, in accordance with Islamic requirements.' },
]

function ServiceCard({ icon, title, ar, desc }) {
  const [h, setH] = useState(false)
  return (
    <div onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ background: h ? C.creamDark : C.cream, border: `1px solid ${h ? C.gold : 'rgba(201,168,76,0.3)'}`, borderLeft: `4px solid ${C.greenMid}`, padding: '28px 24px', display: 'flex', gap: 20, alignItems: 'flex-start', transition: 'background 0.2s, border-color 0.2s' }}>
      <span style={{ fontSize: 32, flexShrink: 0, lineHeight: 1 }}>{icon}</span>
      <div>
        <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 15, fontWeight: 700, color: C.greenDeep, letterSpacing: '0.07em', marginBottom: 4 }}>{title}</h3>
        <span style={{ fontFamily: "'Amiri', serif", fontSize: 17, color: C.gold, display: 'block', marginBottom: 10 }}>{ar}</span>
        <p style={{ fontSize: 15, color: C.textMid, lineHeight: 1.7 }}>{desc}</p>
      </div>
    </div>
  )
}

function PastoralSection() {
  return (
    <section style={{ padding: '70px 0' }}>
      <SectionHeading en="Pastoral & Community Services" ar="الخدمات الدينية والاجتماعية" />
      <Ornament />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24, marginTop: 40 }}>
        {PASTORAL.map(s => <ServiceCard key={s.title} {...s} />)}
      </div>
    </section>
  )
}

// ── OUTREACH ──────────────────────────────────────────────────────────────────
function OutreachSection() {
  const [bh, setBh] = useState(false)
  return (
    <div style={{ width: '100%', backgroundColor: C.creamDark, borderTop: '1px solid rgba(201,168,76,0.3)', borderBottom: '1px solid rgba(201,168,76,0.3)', padding: '70px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
        <div>
          <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 28, color: C.greenDeep, fontWeight: 700, marginBottom: 6 }}>Community Outreach</h2>
          <span style={{ fontFamily: "'Amiri', serif", color: C.gold, fontSize: 18, display: 'block', marginBottom: 20 }}>التواصل مع المجتمع</span>
          {[
            'Islam places great emphasis on caring for neighbours and the broader community. At the Tri-State Islamic Center, we actively engage with the people of Dubuque through our outreach and service programs.',
            'Our "Feed the Needy" program, interfaith dialogues, and community open days are just a few of the ways we extend the mercy of Islam beyond the masjid walls. We warmly invite non-Muslims to visit, ask questions, and learn about our faith.',
            'The Prophet ﷺ said: "The best of people are those who are most beneficial to others."',
          ].map((t, i) => (
            <p key={i} style={{ color: C.textMid, marginBottom: 16, fontSize: 17, lineHeight: 1.85 }}>{t}</p>
          ))}
          <a href="https://tristateislamic.center/contact/"
            onMouseEnter={() => setBh(true)} onMouseLeave={() => setBh(false)}
            style={{ background: bh ? C.goldLight : C.gold, color: C.greenDeep, fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', padding: '13px 32px', textDecoration: 'none', display: 'inline-block', marginTop: 10, clipPath: clip7, transition: 'background 0.2s' }}>
            Get In Touch
          </a>
        </div>
        <FramedImage
          src="http://tristateislamic.center/wp-content/uploads/2019/07/Theo_Ed_April2016.jpg"
          alt="Community Outreach"
          caption="Community & Education — Tri-State Islamic Center"
          bg={C.cream}
        />
      </div>
    </div>
  )
}

// ── CTA ───────────────────────────────────────────────────────────────────────
function CTAStrip() {
  return (
    <div style={{ width: '100%', background: C.greenDeep, borderTop: `3px solid ${C.gold}`, borderBottom: `3px solid ${C.gold}`, padding: '70px 40px', textAlign: 'center' }}>
      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 28, color: C.cream, fontWeight: 700, letterSpacing: '0.06em', marginBottom: 8 }}>Need More Information?</h2>
      <span style={{ fontFamily: "'Amiri', serif", fontSize: 20, color: C.gold, display: 'block', marginBottom: 16 }}>هل تحتاج إلى مزيد من المعلومات؟</span>
      <p style={{ color: 'rgba(253,246,232,0.8)', fontSize: 17, maxWidth: 640, margin: '0 auto 36px', lineHeight: 1.8 }}>
        For questions about any of our services, to schedule a ceremony, or to find out more about our programs, please don't hesitate to reach out.
      </p>
      <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
        <CTABtn label="Contact Us"       href="https://tristateislamic.center/contact/" primary />
        <CTABtn label="About the Center" href="/about" />
        <CTABtn label="Donate"           href="https://tristateislamic.center/donate/" />
      </div>
    </div>
  )
}

// ── PAGE ──────────────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <div style={{ fontFamily: "'Crimson Pro', Georgia, serif", background: C.cream, color: C.textDark, overflowX: 'hidden' }}>
      <TopBanner />
      <Header />
      <Nav />
      <PageHero arabicTitle="خدماتنا" englishTitle="Our Services" breadcrumb={<><a href="/" style={{ color: C.gold, textDecoration: 'none' }}>Home</a> <span style={{ margin: '0 10px', color: 'rgba(201,168,76,0.4)' }}>›</span> Services</>} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <IntroSection />
      </div>

      <VerseBanner
        arabic="وَتَعَاوَنُوا عَلَى الْبِرِّ وَالتَّقْوَىٰ وَلَا تَعَاوَنُوا عَلَى الْإِثْمِ وَالْعُدْوَانِ"
        translation='"And cooperate in righteousness and piety, and do not cooperate in sin and aggression."'
        reference="Surah Al-Ma'idah, 5:2"
      />

      <LecturesSection />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 40px' }}>
        <PastoralSection />
      </div>

      <OutreachSection />
      <CTAStrip />
      <Footer />
    </div>
  )
}
