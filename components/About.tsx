import styles from './About.module.css'

const features = [
  { icon: '🎯', title: 'Quality-First Philosophy', desc: 'Every product undergoes multi-stage quality control before shipment. We never compromise on quality at any step.' },
  { icon: '🚢', title: 'Reliable Global Logistics', desc: 'We partner with world-class freight forwarders ensuring timely and safe delivery to any corner of the globe.' },
  { icon: '🤝', title: 'Long-Term Relationships', desc: 'Most of our clients have been with us for 5+ years — a testament to our reliability and commitment.' },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.grid}>
        {/* Image column */}
        <div className={`${styles.imgCol} animate-in`}>
          <div className={styles.imgBox}>
            <div className={styles.imgPattern} />
            <div className={styles.imgEmoji} style={{ position: 'absolute', top: 40, right: 40, fontSize: 60, opacity: 0.1 }}>💊</div>
            <div className={styles.imgEmoji} style={{ position: 'absolute', bottom: 60, left: 40, fontSize: 60, opacity: 0.1 }}>🫚</div>
            <div className={styles.imgMain}>🌾</div>
          </div>
          <div className={styles.badge}>
            <div className={styles.badgeNum}>10+</div>
            <div className={styles.badgeTxt}>Years of Excellence</div>
          </div>
        </div>

        {/* Text column */}
        <div className="animate-in">
          <div className={styles.tag}>About SVExportGlobal</div>
          <h2 className={styles.title}>
            Your Trusted Partner in{' '}
            <span className={styles.gold}>Global Commerce</span>
          </h2>
          <p className={styles.body}>
            We started our business operations ten years back and have grown into a globally
            recognized exporter. With 2000+ happy clients across 25 nations, we are India's
            partner for premium quality exports.
          </p>
          <div className={styles.features}>
            {features.map((f) => (
              <div key={f.title} className={styles.feat}>
                <div className={styles.featIcon}>{f.icon}</div>
                <div>
                  <h4 className={styles.featTitle}>{f.title}</h4>
                  <p className={styles.featDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
