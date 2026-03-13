import { useState, useEffect } from "react";

const C = {
  greenDeep: "#1a3c2e",
  greenMid: "#2d5a42",
  greenLight: "#3d7a5a",
  gold: "#c9a84c",
  goldLight: "#e0c57a",
  goldPale: "#f5e9c4",
  cream: "#fdf6e8",
  creamDark: "#f0e6cc",
  brown: "#5c3d2e",
  textDark: "#1e1810",
  textMid: "#3d2e1e",
};

const geoBg = {
  backgroundColor: C.greenDeep,
  backgroundImage: `
    repeating-linear-gradient(60deg, transparent, transparent 30px, rgba(201,168,76,0.04) 30px, rgba(201,168,76,0.04) 31px),
    repeating-linear-gradient(-60deg, transparent, transparent 30px, rgba(201,168,76,0.04) 30px, rgba(201,168,76,0.04) 31px)
  `,
};

const geoBgHero = {
  backgroundColor: C.greenDeep,
  backgroundImage: `
    repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,168,76,0.03) 40px, rgba(201,168,76,0.03) 41px),
    repeating-linear-gradient(-45deg, transparent, transparent 40px, rgba(201,168,76,0.03) 40px, rgba(201,168,76,0.03) 41px)
  `,
};

const geoBgServices = {
  backgroundColor: C.creamDark,
  width: "100%",
  borderTop: `1px solid rgba(201,168,76,0.3)`,
  borderBottom: `1px solid rgba(201,168,76,0.3)`,
  padding: "70px 40px",
};

// ── REUSABLE ORNAMENT ──
function Ornament({ light = false }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 16, padding: "8px 0" }}>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${C.gold}, transparent)` }} />
      <span style={{ color: C.gold, fontSize: 22, lineHeight: 1 }}>✦</span>
      <div style={{ flex: 1, height: 1, background: `linear-gradient(to right, transparent, ${C.gold}, transparent)` }} />
    </div>
  );
}

// ── TOP BANNER ──
function TopBanner() {
  return (
    <div style={{
      background: C.greenDeep, color: C.goldLight, textAlign: "center",
      padding: "6px 20px", fontFamily: "'Amiri', serif", fontSize: 14,
      letterSpacing: "0.05em", borderBottom: `1px solid rgba(201,168,76,0.3)`,
    }}>
      ﷽ &nbsp;|&nbsp; بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ &nbsp;|&nbsp; In the Name of Allah, the Most Gracious, the Most Merciful
    </div>
  );
}

// ── HEADER ──
function Header() {
  const [hover, setHover] = useState(false);
  return (
    <header style={{ ...geoBg, borderBottom: `3px solid ${C.gold}` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "28px 40px", display: "flex", alignItems: "center", gap: 32, flexWrap: "wrap" }}>
        <div>
          <img
            src="https://tristateislamic.center/wp-content/uploads/2019/07/logo2.jpg"
            alt="Logo"
            style={{ height: 90, borderRadius: "50%", border: `3px solid ${C.gold}`, boxShadow: `0 0 0 6px rgba(201,168,76,0.15)`, display: "block" }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "'Amiri', serif", fontSize: 26, color: C.goldLight, letterSpacing: "0.04em", lineHeight: 1.3, marginBottom: 2 }}>
            مركز الدراسات الإسلامية
          </div>
          <div style={{ fontFamily: "'Cinzel', serif", fontSize: 22, color: C.cream, fontWeight: 700, letterSpacing: "0.08em", lineHeight: 1.2 }}>
            Dubuque Tri-State Islamic Center
          </div>
          <div style={{ fontFamily: "'Amiri', serif", fontSize: 15, color: C.gold, letterSpacing: "0.12em", marginTop: 4 }}>
            Dubuque, Iowa · Established Since 1993
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10 }}>
          <span style={{ fontFamily: "'Amiri', serif", fontSize: 13, color: C.goldLight, opacity: 0.8 }}>Friday Jummah: 1:30 PM</span>
          <a
            href="https://tristateislamic.center/donate/"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              background: hover ? C.goldLight : C.gold, color: C.greenDeep,
              fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700,
              letterSpacing: "0.1em", padding: "9px 24px", textDecoration: "none",
              display: "inline-block", transition: "background 0.2s",
              clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)",
            }}
          >
            ♡ Donate to the Masjid
          </a>
        </div>
      </div>
    </header>
  );
}

// ── NAV ──
const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Learn Islam", href: "https://tristateislamic.center/learn/" },
  { label: "Services", href: "/services" },
  { label: "Events", href: "https://tristateislamic.center/events/" },
  { label: "Gallery", href: "https://tristateislamic.center/gallery/" },
  { label: "Documents", href: "https://tristateislamic.center/documents/" },
  { label: "Projects", href: "https://tristateislamic.center/projects/" },
  { label: "Contact", href: "https://tristateislamic.center/contact/" },
];

function NavLink({ label, href }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        fontFamily: "'Cinzel', serif", fontSize: 12.5, fontWeight: 600,
        letterSpacing: "0.1em", color: hover ? C.goldLight : C.cream,
        textDecoration: "none", padding: "16px 18px", display: "block",
        whiteSpace: "nowrap", position: "relative", transition: "color 0.2s",
        borderBottom: hover ? `2px solid ${C.gold}` : "2px solid transparent",
      }}
    >
      {label}
    </a>
  );
}

function Nav() {
  const [donateHover, setDonateHover] = useState(false);
  return (
    <nav style={{
      background: C.greenMid, borderBottom: `2px solid rgba(201,168,76,0.4)`,
      position: "sticky", top: 0, zIndex: 100, boxShadow: "0 2px 12px rgba(0,0,0,0.4)",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center", flexWrap: "wrap" }}>
        {navLinks.map(l => <NavLink key={l.label} {...l} />)}
        <a
          href="https://tristateislamic.center/donate/"
          onMouseEnter={() => setDonateHover(true)}
          onMouseLeave={() => setDonateHover(false)}
          style={{
            background: donateHover ? C.goldLight : C.gold, color: C.greenDeep,
            fontFamily: "'Cinzel', serif", fontSize: 12.5, fontWeight: 700,
            letterSpacing: "0.1em", padding: "10px 22px", margin: "8px 12px",
            textDecoration: "none", display: "block",
            clipPath: "polygon(5px 0%, 100% 0%, calc(100% - 5px) 100%, 0% 100%)",
            transition: "background 0.2s",
          }}
        >
          Donate
        </a>
      </div>
    </nav>
  );
}

// ── HERO ──
function Hero() {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);
  return (
    <section style={{
      ...geoBgHero, minHeight: 420, display: "flex", alignItems: "center",
      justifyContent: "center", textAlign: "center", position: "relative",
      overflow: "hidden", borderBottom: `3px solid ${C.gold}`,
    }}>
      {/* radial glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(61,122,90,0.35) 0%, transparent 70%)", pointerEvents: "none" }} />
      {/* arch decoration */}
      <div style={{
        position: "absolute", top: -60, left: "50%", transform: "translateX(-50%)",
        width: 400, height: 300, border: `1px solid rgba(201,168,76,0.15)`,
        borderRadius: "50% 50% 0 0 / 60% 60% 0 0", pointerEvents: "none",
      }} />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 780, padding: "60px 40px" }}>
        <div style={{ fontFamily: "'Amiri', serif", fontSize: 42, color: C.goldLight, marginBottom: 16, lineHeight: 1.4, textShadow: "0 2px 20px rgba(0,0,0,0.5)" }}>
          السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
        </div>
        <h1 style={{ fontFamily: "'Cinzel', serif", fontSize: 36, color: C.cream, fontWeight: 700, letterSpacing: "0.05em", lineHeight: 1.3, marginBottom: 10 }}>
          Welcome to the Tri-State Islamic Center
        </h1>
        <div style={{ fontFamily: "'Amiri', serif", fontSize: 20, color: C.gold, letterSpacing: "0.08em", marginBottom: 28, fontStyle: "italic" }}>
          A House of Allah — A Home for the Community
        </div>
        <p style={{ color: "rgba(253,246,232,0.85)", fontSize: 17, lineHeight: 1.8, marginBottom: 36 }}>
          Serving the Muslim community of Dubuque, Iowa and the tri-state region since 1993.
          Our mosque is a place of worship, learning, and brotherhood for all.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a href="/about"
            onMouseEnter={() => setBtn1(true)} onMouseLeave={() => setBtn1(false)}
            style={{ background: btn1 ? C.goldLight : C.gold, color: C.greenDeep, fontFamily: "'Cinzel', serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", padding: "14px 36px", textDecoration: "none", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)", transition: "background 0.2s" }}>
            Our Community
          </a>
          <a href="https://tristateislamic.center/learn/"
            onMouseEnter={() => setBtn2(true)} onMouseLeave={() => setBtn2(false)}
            style={{ background: btn2 ? "rgba(201,168,76,0.15)" : "transparent", color: C.goldLight, fontFamily: "'Cinzel', serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.1em", padding: "13px 36px", textDecoration: "none", border: `1px solid ${C.gold}`, transition: "background 0.2s" }}>
            Learn About Islam
          </a>
        </div>
      </div>
    </section>
  );
}

// ── PRAYER TIMES BAR ──
const prayers = [
  { en: "Fajr", ar: "الفجر", time: "5:45 AM" },
  { en: "Dhuhr", ar: "الظهر", time: "1:15 PM" },
  { en: "Asr", ar: "العصر", time: "4:30 PM" },
  { en: "Maghrib", ar: "المغرب", time: "6:50 PM" },
  { en: "Isha", ar: "العشاء", time: "8:15 PM" },
  { en: "Jumu'ah", ar: "الجمعة", time: "1:30 PM", highlight: true },
];

function PrayerBar() {
  return (
    <div style={{ background: C.greenDeep, borderTop: `1px solid rgba(201,168,76,0.2)`, borderBottom: `1px solid rgba(201,168,76,0.2)` }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap" }}>
        {prayers.map((p, i) => (
          <div key={p.en} style={{
            flex: 1, minWidth: 100, textAlign: "center", padding: "16px 20px",
            borderRight: i < prayers.length - 1 ? `1px solid rgba(201,168,76,0.2)` : "none",
            background: p.highlight ? "rgba(201,168,76,0.08)" : "transparent",
          }}>
            <span style={{ fontFamily: "'Amiri', serif", fontSize: 14, color: "rgba(253,246,232,0.6)", display: "block", marginBottom: 2 }}>{p.ar}</span>
            <span style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.15em", color: C.gold, display: "block", marginBottom: 2 }}>{p.en}</span>
            <span style={{ fontFamily: "'Amiri', serif", fontSize: 18, color: p.highlight ? C.gold : C.cream, fontWeight: 700, display: "block" }}>{p.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── WELCOME SECTION ──
function WelcomeSection() {
  const [btnHover, setBtnHover] = useState(false);
  return (
    <section style={{ padding: "70px 0 50px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
      <div>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 32, color: C.greenDeep, fontWeight: 700, letterSpacing: "0.04em", lineHeight: 1.25, marginBottom: 6 }}>
          Welcome to Our Mosque
        </h2>
        <span style={{ fontFamily: "'Amiri', serif", color: C.gold, fontSize: 17, fontStyle: "italic", marginBottom: 20, display: "block" }}>
          — Established 1993 · Dubuque, Iowa —
        </span>
        {[
          "The Tri-State Islamic Center is the first landmark and pride for our city and the Muslim community. The mosque occupies about 8,200 square meters of land, has a capacity of 150 worshipers, and a 72-foot high minaret topped with a gold leaf crescent.",
          "This mosque is a strong resource for the Muslim and non-Muslim community to learn about Islam and increase their faith in God. The community can learn ways to implement Islam in our daily lives, from the Quran and the Sunnah of Prophet Muhammad ﷺ.",
          "Our community consists of nearly every kind of ethnic group found in the Muslim world and beyond, which brings a wonderful variety of people to each community activity.",
        ].map((t, i) => (
          <p key={i} style={{ color: C.textMid, marginBottom: 16, fontSize: 17, lineHeight: 1.85 }}>{t}</p>
        ))}
        <a href="/about"
          onMouseEnter={() => setBtnHover(true)} onMouseLeave={() => setBtnHover(false)}
          style={{ background: btnHover ? C.goldLight : C.gold, color: C.greenDeep, fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", padding: "13px 32px", textDecoration: "none", display: "inline-block", marginTop: 10, clipPath: "polygon(7px 0%, 100% 0%, calc(100% - 7px) 100%, 0% 100%)", transition: "background 0.2s" }}>
          Learn More About Us
        </a>
      </div>
      <div>
        <div style={{ border: `3px solid ${C.gold}`, padding: 10, background: C.creamDark, position: "relative" }}>
          <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", color: C.gold, background: C.cream, padding: "0 8px", fontSize: 18, zIndex: 1 }}>✦</div>
          <img src="http://tristateislamic.center/wp-content/uploads/2019/07/IMG_7766-e1563484574532.jpg" alt="Tri-State Islamic Center Mosque" style={{ width: "100%", display: "block", filter: "sepia(20%) contrast(1.05)" }} />
          <div style={{ textAlign: "center", fontFamily: "'Amiri', serif", fontSize: 14, color: C.brown, marginTop: 10, fontStyle: "italic" }}>
            Tri-State Islamic Center, Dubuque, Iowa
          </div>
        </div>
      </div>
    </section>
  );
}

// ── VERSE BANNER ──
function VerseBanner() {
  return (
    <div style={{
      width: "100%", backgroundColor: C.greenDeep,
      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 25px, rgba(201,168,76,0.04) 25px, rgba(201,168,76,0.04) 26px), repeating-linear-gradient(-45deg, transparent, transparent 25px, rgba(201,168,76,0.04) 25px, rgba(201,168,76,0.04) 26px)`,
      padding: "60px 40px", textAlign: "center",
      borderTop: `2px solid ${C.gold}`, borderBottom: `2px solid ${C.gold}`,
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", top: -20, left: 20, color: "rgba(201,168,76,0.18)", fontSize: 120, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>❧</div>
      <div style={{ position: "absolute", bottom: -20, right: 20, color: "rgba(201,168,76,0.18)", fontSize: 120, lineHeight: 1, pointerEvents: "none", userSelect: "none" }}>❧</div>
      <div style={{ fontFamily: "'Amiri', serif", fontSize: 36, color: C.goldLight, lineHeight: 1.6, marginBottom: 20, textShadow: "0 2px 12px rgba(0,0,0,0.4)", direction: "rtl", position: "relative" }}>
        وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ
      </div>
      <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: 21, color: C.cream, fontStyle: "italic", maxWidth: 700, margin: "0 auto 14px", lineHeight: 1.65, position: "relative" }}>
        "And establish prayer and give zakah and bow with those who bow [in worship and obedience]."
      </p>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 13, color: C.gold, letterSpacing: "0.15em", position: "relative" }}>
        Surah Al-Baqarah, 2:43
      </div>
    </div>
  );
}

// ── QUICK LINKS ──
const quickLinks = [
  { icon: "🗓", title: "Events", desc: "Stay informed about our ongoing and upcoming community events and programs.", href: "https://tristateislamic.center/events/" },
  { icon: "🕌", title: "Donate", desc: "Support the masjid with your generous sadaqah and help it continue to flourish.", href: "https://tristateislamic.center/donate/" },
  { icon: "🖼", title: "Gallery", desc: "Browse photos from our community gatherings, events, and mosque activities.", href: "https://tristateislamic.center/gallery/" },
  { icon: "📖", title: "Learn Islam", desc: "Resources for Muslims and non-Muslims to learn about the faith and its practice.", href: "https://tristateislamic.center/learn/" },
];

function QuickCard({ icon, title, desc, href }) {
  const [hover, setHover] = useState(false);
  return (
    <a href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: C.creamDark, border: `1px solid ${hover ? C.gold : "rgba(201,168,76,0.35)"}`,
        padding: "36px 24px 28px", textAlign: "center", textDecoration: "none", color: C.textDark,
        transition: "transform 0.2s, box-shadow 0.2s, border-color 0.2s", display: "block",
        transform: hover ? "translateY(-3px)" : "none",
        boxShadow: hover ? "0 8px 28px rgba(26,60,46,0.15)" : "none",
        position: "relative", overflow: "hidden",
        borderTop: hover ? `3px solid ${C.gold}` : "3px solid transparent",
      }}>
      <span style={{ fontSize: 36, marginBottom: 12, display: "block", color: C.greenMid }}>{icon}</span>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", color: C.greenDeep, marginBottom: 10, textTransform: "uppercase" }}>{title}</div>
      <p style={{ fontSize: 15, color: C.textMid, lineHeight: 1.6 }}>{desc}</p>
    </a>
  );
}

function QuickLinks() {
  return (
    <section style={{ padding: "70px 0" }}>
      <div style={{ fontFamily: "'Cinzel', serif", fontSize: 26, fontWeight: 700, color: C.greenDeep, letterSpacing: "0.06em", textAlign: "center", marginBottom: 6 }}>Community Resources</div>
      <span style={{ fontFamily: "'Amiri', serif", fontSize: 20, color: C.gold, textAlign: "center", display: "block", marginBottom: 20 }}>خدمات المجتمع</span>
      <Ornament />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginTop: 40 }}>
        {quickLinks.map(l => <QuickCard key={l.title} {...l} />)}
      </div>
    </section>
  );
}

// ── SERVICES ──
const services = [
  { num: "٠١", title: "Daily Prayers (Salah)", desc: "The masjid is open for all five daily prayers. Come and worship together in congregation." },
  { num: "٠٢", title: "Friday Jummah Prayer", desc: "Weekly Friday sermon and congregational prayer begins at 1:30 PM. All are welcome." },
  { num: "٠٣", title: "Islamic Education", desc: "Classes, lectures, and resources for children and adults to deepen their knowledge of Deen." },
  { num: "٠٤", title: "Community Outreach", desc: "Building bridges with the broader Dubuque community and welcoming those who seek to learn." },
];

function ServiceCard({ num, title, desc }) {
  const [hover, setHover] = useState(false);
  return (
    <a href="/services"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        background: C.cream, border: `1px solid rgba(201,168,76,0.3)`,
        borderTop: `4px solid ${C.greenMid}`, padding: "32px 26px",
        textDecoration: "none", color: "inherit",
        boxShadow: hover ? "0 6px 24px rgba(26,60,46,0.12)" : "none",
        transition: "box-shadow 0.2s", display: "block",
      }}>
      <span style={{ fontFamily: "'Amiri', serif", fontSize: 40, color: "rgba(201,168,76,0.25)", display: "block", lineHeight: 1, marginBottom: 8, fontWeight: 700 }}>{num}</span>
      <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 16, fontWeight: 700, letterSpacing: "0.07em", color: C.greenDeep, marginBottom: 12 }}>{title}</h3>
      <p style={{ fontSize: 16, color: C.textMid, lineHeight: 1.7 }}>{desc}</p>
    </a>
  );
}

function ServicesSection() {
  return (
    <div style={{ ...geoBgServices }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ fontFamily: "'Cinzel', serif", fontSize: 26, fontWeight: 700, color: C.cream, letterSpacing: "0.06em", textAlign: "center", marginBottom: 6 }}>Our Services</div>
        <span style={{ fontFamily: "'Amiri', serif", fontSize: 20, color: C.gold, textAlign: "center", display: "block", marginBottom: 20 }}>خدماتنا</span>
        <Ornament />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 28, marginTop: 40 }}>
          {services.map(s => <ServiceCard key={s.num} {...s} />)}
        </div>
      </div>
    </div>
  );
}

// ── JUMMAH SECTION ──
function JummahSection() {
  const [btnHover, setBtnHover] = useState(false);
  return (
    <section style={{ padding: "70px 0", display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 60, alignItems: "start" }}>
      <div>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 28, color: C.greenDeep, fontWeight: 700, letterSpacing: "0.04em", marginBottom: 6 }}>Live: Friday Sermon & Prayer</h2>
        <span style={{ fontFamily: "'Amiri', serif", fontSize: 22, color: C.gold, display: "block", marginBottom: 16 }}>صلاة الجمعة</span>
        <p style={{ color: C.textMid, fontSize: 17, marginBottom: 14, lineHeight: 1.8 }}>
          Watch the Dubuque Tri-State Islamic Center Friday sermon and prayer live here every week starting at <strong>1:30 PM</strong>. The Khutbah and Salat al-Jummah are open to all Muslims.
        </p>
        <p style={{ color: C.textMid, fontSize: 17, marginBottom: 20, lineHeight: 1.8 }}>
          To view past Jummah sermons and prayers, subscribe to our YouTube channel and receive notifications when new content is added.
        </p>
        <div style={{ background: C.greenDeep, color: C.cream, padding: "24px 28px", borderLeft: `4px solid ${C.gold}`, marginBottom: 20 }}>
          {[
            ["📍", "Location:", "Tri-State Islamic Center, Dubuque, Iowa"],
            ["🕐", "Every Friday", "starting at 1:30 PM"],
            ["📺", "Also livestreamed on", "YouTube"],
          ].map(([icon, label, val], i) => (
            <p key={i} style={{ color: C.cream, marginBottom: 6, fontSize: 16 }}>
              {icon} <strong style={{ color: C.goldLight }}>{label}</strong> {val}
            </p>
          ))}
        </div>
        <a href="https://www.youtube.com/channel/UCpzSKvn2xHePQqOzfxVMWtA" target="_blank" rel="noreferrer"
          onMouseEnter={() => setBtnHover(true)} onMouseLeave={() => setBtnHover(false)}
          style={{ background: btnHover ? C.goldLight : C.gold, color: C.greenDeep, fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", padding: "13px 32px", textDecoration: "none", display: "inline-block", clipPath: "polygon(7px 0%, 100% 0%, calc(100% - 7px) 100%, 0% 100%)", transition: "background 0.2s" }}>
          ▶ YouTube Channel
        </a>
      </div>
      <div>
        <div style={{ border: `3px solid ${C.gold}`, padding: 10, background: "#000" }}>
          <iframe
            src="https://www.youtube.com/embed/live_stream?channel=UCpzSKvn2xHePQqOzfxVMWtA"
            allowFullScreen title="Live Friday Sermon"
            style={{ width: "100%", aspectRatio: "16/9", display: "block", border: "none" }}
          />
        </div>
        <div style={{ background: C.greenDeep, color: C.gold, fontFamily: "'Amiri', serif", fontSize: 14, padding: "10px 14px", textAlign: "center" }}>
          🔴 Live every Friday at 1:30 PM — Subscribe for notifications
        </div>
      </div>
    </section>
  );
}

// ── AFGHAN SECTION ──
function AfghanSection() {
  const [btnHover, setBtnHover] = useState(false);
  return (
    <div style={{ background: C.greenDeep, border: `2px solid ${C.gold}`, padding: "48px 48px", marginBottom: 70, display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center" }}>
      <div>
        <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 22, color: C.goldLight, fontWeight: 700, letterSpacing: "0.04em", marginBottom: 14 }}>Help Afghan Evacuees Resettle</h2>
        <p style={{ color: "rgba(253,246,232,0.88)", fontSize: 16, marginBottom: 8, fontStyle: "italic" }}>As-salamu alaykum brothers and sisters —</p>
        <p style={{ color: "rgba(253,246,232,0.88)", fontSize: 16, lineHeight: 1.8 }}>
          You can make a difference by welcoming Afghan evacuees arriving in the US seeking stability and safety. Your donation supports emergency relocation costs, legal fees, food and shelter, and more. Afghan evacuees have had to leave behind their homes and communities. Your support means everything.
        </p>
      </div>
      <div style={{ textAlign: "center" }}>
        <a href="https://www.gofundme.com/f/lets-get-together-and-help-our-afghan-neighbors" target="_blank" rel="noreferrer"
          onMouseEnter={() => setBtnHover(true)} onMouseLeave={() => setBtnHover(false)}
          style={{ display: "inline-block", background: btnHover ? C.goldLight : C.gold, color: C.greenDeep, fontFamily: "'Cinzel', serif", fontSize: 14, fontWeight: 700, padding: "14px 32px", textDecoration: "none", letterSpacing: "0.08em", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)", transition: "background 0.2s", marginBottom: 16 }}>
          Donate via GoFundMe
        </a>
        <p style={{ color: "rgba(253,246,232,0.6)", fontSize: 14, marginTop: 8, fontFamily: "'Amiri', serif" }}>
          جَزَاكُمُ اللهُ خَيْرًا<br />May Allah reward you with good
        </p>
      </div>
    </div>
  );
}

// ── MAILING LIST ──
function MailingList() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [btnHover, setBtnHover] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) setSubmitted(true);
  };

  return (
    <div style={{ width: "100%", background: C.creamDark, borderTop: `2px solid rgba(201,168,76,0.3)`, borderBottom: `2px solid rgba(201,168,76,0.3)`, padding: "60px 40px", textAlign: "center" }}>
      <h2 style={{ fontFamily: "'Cinzel', serif", fontSize: 24, color: C.greenDeep, fontWeight: 700, letterSpacing: "0.06em", marginBottom: 8 }}>Subscribe to Our Mailing List</h2>
      <span style={{ fontFamily: "'Amiri', serif", fontSize: 18, color: C.gold, display: "block", marginBottom: 8 }}>اشترك في قائمتنا البريدية</span>
      <p style={{ color: C.textMid, fontSize: 16, marginBottom: 28 }}>Receive updates on events, news, and lectures related to the Dubuque Tri-State Islamic Center.</p>
      {submitted ? (
        <p style={{ fontFamily: "'Amiri', serif", fontSize: 20, color: C.greenDeep }}>جَزَاكَ اللهُ خَيْرًا — Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap", maxWidth: 560, margin: "0 auto" }}>
          <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)}
            style={{ flex: 1, minWidth: 180, padding: "13px 18px", border: `1px solid rgba(201,168,76,0.5)`, background: C.cream, fontFamily: "'Crimson Pro', serif", fontSize: 16, color: C.textDark, outline: "none" }} />
          <input type="email" placeholder="Your Email Address" value={email} onChange={e => setEmail(e.target.value)}
            style={{ flex: 1, minWidth: 180, padding: "13px 18px", border: `1px solid rgba(201,168,76,0.5)`, background: C.cream, fontFamily: "'Crimson Pro', serif", fontSize: 16, color: C.textDark, outline: "none" }} />
          <button type="submit"
            onMouseEnter={() => setBtnHover(true)} onMouseLeave={() => setBtnHover(false)}
            style={{ background: btnHover ? C.greenMid : C.greenDeep, color: C.goldLight, fontFamily: "'Cinzel', serif", fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", padding: "13px 28px", border: `2px solid ${C.gold}`, cursor: "pointer", clipPath: "polygon(6px 0%, 100% 0%, calc(100% - 6px) 100%, 0% 100%)", transition: "background 0.2s" }}>
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}

// ── FOOTER ──
const footerLinks = ["About Us", "Learn Islam", "Services", "Events", "Gallery", "Projects", "Cemetery", "Documents", "Donate"];
const footerHrefs = ["/about", "https://tristateislamic.center/learn/", "/services", "https://tristateislamic.center/events/", "https://tristateislamic.center/gallery/", "https://tristateislamic.center/projects/", "https://tristateislamic.center/cemetery/", "https://tristateislamic.center/documents/", "https://tristateislamic.center/donate/"];

function Footer() {
  return (
    <footer style={{ background: C.greenDeep, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(201,168,76,0.03) 20px, rgba(201,168,76,0.03) 21px)", borderTop: `3px solid ${C.gold}`, padding: "60px 40px 30px", color: C.cream }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr", gap: 48, paddingBottom: 40, borderBottom: `1px solid rgba(201,168,76,0.25)` }}>
        {/* Brand */}
        <div>
          <img src="https://tristateislamic.center/wp-content/uploads/2019/07/logo2.jpg" alt="Logo" style={{ height: 70, borderRadius: "50%", border: `2px solid ${C.gold}`, marginBottom: 16, display: "block" }} />
          <h3 style={{ fontFamily: "'Cinzel', serif", fontSize: 16, color: C.cream, letterSpacing: "0.06em", marginBottom: 8 }}>Dubuque Tri-State Islamic Center</h3>
          <p style={{ fontSize: 15, color: "rgba(253,246,232,0.65)", lineHeight: 1.7, marginBottom: 12 }}>Serving the Muslim community of the tri-state region since 1993. A place of worship, learning, and unity for all.</p>
          <p style={{ fontFamily: "'Amiri', serif", fontSize: 18, color: C.gold, fontStyle: "italic" }}>"وَاعْتَصِمُوا بِحَبْلِ اللهِ جَمِيعًا وَلَا تَفَرَّقُوا"</p>
        </div>
        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: "0.15em", color: C.gold, marginBottom: 18, paddingBottom: 10, borderBottom: `1px solid rgba(201,168,76,0.2)`, textTransform: "uppercase" }}>Quick Links</h4>
          <ul style={{ listStyle: "none" }}>
            {footerLinks.map((label, i) => (
              <li key={label} style={{ padding: "5px 0", borderBottom: `1px solid rgba(201,168,76,0.1)` }}>
                <a href={footerHrefs[i]} style={{ color: "rgba(253,246,232,0.75)", textDecoration: "none", fontSize: 15, fontFamily: "'Crimson Pro', serif", display: "flex", alignItems: "center", gap: 8 }}>
                  <span style={{ fontSize: 7, color: C.gold }}>◆</span> {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "'Cinzel', serif", fontSize: 13, letterSpacing: "0.15em", color: C.gold, marginBottom: 18, paddingBottom: 10, borderBottom: `1px solid rgba(201,168,76,0.2)`, textTransform: "uppercase" }}>Contact & Visit</h4>
          {[
            ["📍", "Tri-State Islamic Center, Dubuque, Iowa"],
            ["🕐", null],
            ["📘", null],
            ["▶", null],
          ].map((_, i) => null)}
          <p style={{ fontSize: 15, color: "rgba(253,246,232,0.75)", marginBottom: 10, display: "flex", alignItems: "flex-start", gap: 10, lineHeight: 1.6 }}>
            <span style={{ color: C.gold }}>📍</span> Tri-State Islamic Center<br />Dubuque, Iowa
          </p>
          <p style={{ fontSize: 15, color: "rgba(253,246,232,0.75)", marginBottom: 10, display: "flex", gap: 10 }}>
            <span style={{ color: C.gold }}>🕐</span> Friday Jummah: <strong style={{ color: C.goldLight }}>1:30 PM</strong>
          </p>
          <p style={{ fontSize: 15, color: "rgba(253,246,232,0.75)", marginBottom: 10, display: "flex", gap: 10 }}>
            <span style={{ color: C.gold }}>📘</span>
            <a href="https://www.facebook.com/TriStateIslamicCenter/" target="_blank" rel="noreferrer" style={{ color: "rgba(253,246,232,0.75)", textDecoration: "none" }}>Facebook Page</a>
          </p>
          <p style={{ fontSize: 15, color: "rgba(253,246,232,0.75)", marginBottom: 10, display: "flex", gap: 10 }}>
            <span style={{ color: C.gold }}>▶</span>
            <a href="https://www.youtube.com/channel/UCpzSKvn2xHePQqOzfxVMWtA" target="_blank" rel="noreferrer" style={{ color: "rgba(253,246,232,0.75)", textDecoration: "none" }}>YouTube Channel</a>
          </p>
        </div>
      </div>
      <div style={{ maxWidth: 1200, margin: "24px auto 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <p style={{ fontSize: 14, color: "rgba(253,246,232,0.45)", fontFamily: "'Amiri', serif" }}>© 2026 Dubuque Tri-State Islamic Center · All Rights Reserved · Established 1993</p>
        <div style={{ display: "flex", gap: 14 }}>
          {[["f", "https://www.facebook.com/TriStateIslamicCenter/"], ["▶", "https://www.youtube.com/channel/UCpzSKvn2xHePQqOzfxVMWtA"]].map(([icon, href]) => (
            <a key={icon} href={href} target="_blank" rel="noreferrer"
              style={{ width: 36, height: 36, border: `1px solid rgba(201,168,76,0.35)`, display: "flex", alignItems: "center", justifyContent: "center", color: C.gold, textDecoration: "none", fontSize: 16 }}>
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ── ROOT APP ──
export default function HomePage() {
  useEffect(() => {
    // Inject Google Fonts
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Amiri:ital,wght@0,400;0,700;1,400&family=Cinzel:wght@400;600;700&family=Crimson+Pro:ital,wght@0,300;0,400;0,600;1,400&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Global styles
    const style = document.createElement("style");
    style.textContent = `
      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
      html, body { overflow-x: hidden; }
      body { font-family: 'Crimson Pro', Georgia, serif; background: #fdf6e8; color: #1e1810; font-size: 18px; line-height: 1.7; }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <div style={{ fontFamily: "'Crimson Pro', Georgia, serif", background: "#fdf6e8", color: C.textDark, overflowX: "hidden" }}>
      <TopBanner />
      <Header />
      <Nav />
      <Hero />
      <PrayerBar />

      {/* Constrained main content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <WelcomeSection />
      </div>

      <VerseBanner />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <QuickLinks />
      </div>

      <ServicesSection />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 40px" }}>
        <JummahSection />
        <AfghanSection />
      </div>

      <MailingList />
      <Footer />
    </div>
  );
}
