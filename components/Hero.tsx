import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroGrid} />

      {/* LEFT */}
      <div className={styles.heroLeft}>
        <div className={styles.badge}>🇮🇳 Proudly Made in India — Trusted Globally</div>
        <h1 className={styles.title}>
          Premium <span className={styles.accent}>Exports</span><br />
          to <span className={styles.outline}>25+</span> Nations
        </h1>
        <p className={styles.desc}>
          India's most trusted export company delivering agricultural, pharmaceutical,
          and industrial goods worldwide. Quality without compromise since 2010.
        </p>
        <div className={styles.actions}>
          <a href="#products" className={styles.btnPrimary}>Explore Products →</a>
          <a href="#contact" className={styles.btnOutline}>Request Quote</a>
        </div>
      </div>

      {/* RIGHT — Animated Globe */}
      <div className={styles.heroRight}>
        <div className={styles.heroVisual}>
          <div className={styles.globe}>
            <div className={styles.globeLines} />
            <div className={styles.globeGlow} />
            <div className={`${styles.globeDot} ${styles.gdot1}`} />
            <div className={`${styles.globeDot} ${styles.gdot2}`} />
            <div className={`${styles.globeDot} ${styles.gdot3}`} />
            <div className={`${styles.globeDot} ${styles.gdot4}`} />
            <div className={`${styles.globeDot} ${styles.gdot5}`} />
          </div>
          <div className={`${styles.orbit} ${styles.orbit1}`}><div className={styles.orbitDot} /></div>
          <div className={`${styles.orbit} ${styles.orbit2}`}><div className={styles.orbitDot} /></div>
          <div className={styles.heroStats}>
            {[
              { icon: '🌍', val: '25+',   label: 'Countries' },
              { icon: '📦', val: '2000+', label: 'Clients Served' },
              { icon: '⭐', val: '10+ Yrs', label: 'Experience' },
            ].map((s) => (
              <div key={s.label} className={styles.statChip}>
                <span className={styles.statIcon}>{s.icon}</span>
                <div>
                  <div className={styles.statVal}>{s.val}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
