import styles from './Testimonials.module.css'

const REVIEWS = [
  {
    initials: 'BS',
    name: 'Benny Sheil',
    role: 'Pharma Distributor, UAE',
    quote: '"SVExportGlobal has been our go-to supplier for pharmaceutical raw materials for 4 years. Their consistency and quality is unmatched. Shipments always arrive on time with perfect documentation."',
  },
  {
    initials: 'MK',
    name: 'Maria Kühn',
    role: 'Food Importer, Germany',
    quote: '"Exceptional packaging and product quality. We\'ve been importing their spice range for 3 years and our customers love it. Very responsive team and easy to deal with."',
  },
  {
    initials: 'JL',
    name: 'James Liu',
    role: 'Retail Chain, Singapore',
    quote: '"The best Indian export company I\'ve found. Their mango shipments arrive perfectly ripened and packed. Their promise to replace damaged goods gave us confidence to order in bulk."',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className={styles.section}>
      <div className={`${styles.head} animate-in`}>
        <div className={styles.tag}>Client Testimonials</div>
        <h2 className={styles.title}>
          Trusted by Buyers <span className={styles.gold}>Worldwide</span>
        </h2>
      </div>
      <div className={styles.grid}>
        {REVIEWS.map(r => (
          <div key={r.name} className={`${styles.card} animate-in`}>
            <div className={styles.stars}>★★★★★</div>
            <p className={styles.quote}>{r.quote}</p>
            <div className={styles.author}>
              <div className={styles.avatar}>{r.initials}</div>
              <div>
                <div className={styles.name}>{r.name}</div>
                <div className={styles.role}>{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
