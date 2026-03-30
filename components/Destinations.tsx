import styles from './Destinations.module.css'

const COUNTRIES = [
  { flag: '🇦🇪', name: 'United Arab Emirates', pct: 88 },
  { flag: '🇺🇸', name: 'United States',         pct: 76 },
  { flag: '🇬🇧', name: 'United Kingdom',         pct: 68 },
  { flag: '🇩🇪', name: 'Germany',                pct: 60 },
  { flag: '🇸🇬', name: 'Singapore',              pct: 52 },
  { flag: '🇦🇺', name: 'Australia',              pct: 45 },
  { flag: '🇨🇦', name: 'Canada',                 pct: 38 },
]

const PILLS = ['🇦🇪 UAE','🇺🇸 USA','🇬🇧 UK','🇩🇪 Germany','🇸🇬 Singapore','🇦🇺 Australia','🇨🇦 Canada','+ 18 more']

export default function Destinations() {
  return (
    <section id="destinations" className={styles.section}>
      <div className={styles.grid}>
        {/* Bar chart col */}
        <div className="animate-in">
          <div className={styles.tag}>Global Reach</div>
          <h2 className={styles.title}>
            Our Export <span className={styles.gold}>Destinations</span>
          </h2>
          <p className={styles.desc}>
            We actively export to 25+ countries with growing volumes every year.
            Our strongest markets include:
          </p>
          <div className={styles.bars}>
            {COUNTRIES.map(c => (
              <div key={c.name} className={styles.barItem}>
                <div className={styles.barLeft}>
                  <span className={styles.flag}>{c.flag}</span>
                  <span>{c.name}</span>
                </div>
                <div className={styles.barRight}>
                  <div className={styles.barBg}>
                    <div className={styles.barFill} style={{ width: `${c.pct}%` }} />
                  </div>
                  <span className={styles.pct}>{c.pct}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Globe box col */}
        <div className={`${styles.globeBox} animate-in`}>
          <div className={styles.globeIcon}>🌏</div>
          <div className={styles.globeNum}>25+ Countries</div>
          <div className={styles.globeSub}>
            Active export destinations across 6 continents
          </div>
          <div className={styles.pills}>
            {PILLS.map(p => (
              <span key={p} className={styles.pill}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
