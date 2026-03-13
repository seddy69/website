import C from '../colors.js'

export default function TopBanner() {
  return (
    <div style={{
      background: C.greenDeep, color: C.goldLight, textAlign: 'center',
      padding: '6px 20px', fontFamily: "'Amiri', serif", fontSize: 14,
      letterSpacing: '0.05em', borderBottom: `1px solid rgba(201,168,76,0.3)`,
    }}>
      ﷽ &nbsp;|&nbsp; بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ &nbsp;|&nbsp; In the Name of Allah, the Most Gracious, the Most Merciful
    </div>
  )
}
