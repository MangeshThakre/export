import styles from './WhyUs.module.css'

const CARDS = [
  { icon: '🔬', title: 'Rigorous Quality Control',  desc: 'Every consignment undergoes 3-stage quality inspection before dispatch ensuring compliance with international standards.' },
  { icon: '📜', title: 'Certified & Compliant',      desc: 'ISO 9001, FSSAI, APEDA, and WHO-GMP certifications ensuring our exports meet global regulatory requirements.' },
  { icon: '🚀', title: 'On-Time Delivery',           desc: 'Our robust logistics network ensures 98.7% on-time delivery rate with real-time shipment tracking for every order.' },
  { icon: '💰', title: 'Competitive Pricing',        desc: 'Direct sourcing from farmers and manufacturers eliminates middlemen, giving you the best prices without quality compromise.' },
  { icon: '🛡️', title: 'Risk-Free Trade',            desc: 'We offer comprehensive export documentation, cargo insurance, and letter of credit support for smooth transactions.' },
  { icon: '🌐', title: 'Multilingual Support',       desc: 'Our team speaks English, Hindi, Arabic, and German to ensure seamless communication with international buyers.' },
]

export default function WhyUs() {
  return (
    <section id="why" className={styles.section}>
      <div className={`${styles.head} animate-in`}>
        <div className={styles.tag}>Why Choose Us</div>
        <h2 className={styles.title}>
          The SVExportGlobal <span className={styles.gold}>Advantage</span>
        </h2>
      </div>
      <div className={styles.grid}>
        {CARDS.map(c => (
          <div key={c.title} className={`${styles.card} animate-in`}>
            <span className={styles.icon}>{c.icon}</span>
            <h3>{c.title}</h3>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
