'use client'
import { useState } from 'react'
import styles from './Products.module.css'

const PRODUCTS = [
  { emoji: '🥭', cat: 'agri',     badge: 'Agricultural', name: 'Fresh Alphonso Mangoes',   desc: 'Premium GI-tagged Alphonso mangoes from Maharashtra, known worldwide for their rich aroma and taste.',                        origin: '🇮🇳 Maharashtra, India' },
  { emoji: '🌶️', cat: 'spice',   badge: 'Spices',        name: 'Red Chilli & Turmeric',      desc: 'Whole and ground spices sourced directly from farms, with high curcumin content and natural colour.',                          origin: '🇮🇳 Andhra Pradesh' },
  { emoji: '💊', cat: 'pharma',   badge: 'Pharma',        name: 'Generic Pharmaceuticals',    desc: 'WHO-GMP certified generic medicines and formulations exported to hospitals and distributors worldwide.',                        origin: '🇮🇳 Mumbai, India' },
  { emoji: '🫚', cat: 'agri',     badge: 'Agricultural', name: 'Cold-Pressed Sesame Oil',    desc: '100% natural cold-pressed sesame oil, rich in antioxidants. Supplied in bulk and retail packaging.',                          origin: '🇮🇳 Rajasthan' },
  { emoji: '🩺', cat: 'pharma',   badge: 'Pharma',        name: 'Surgical Instruments',       desc: 'ISO-certified surgical tools including scissors, forceps, and retractors used in hospitals across 20+ countries.',              origin: '🇮🇳 Jalandhar, India' },
  { emoji: '⚙️', cat: 'industrial', badge: 'Industrial', name: 'Industrial Machinery Parts', desc: 'Precision-engineered industrial components for textile, automotive and manufacturing industries worldwide.',                     origin: '🇮🇳 Pune, India' },
]

const FILTERS = [
  { label: 'All Categories', value: 'all' },
  { label: '🌾 Agricultural', value: 'agri' },
  { label: '💊 Pharmaceutical', value: 'pharma' },
  { label: '🌶️ Spices & Herbs', value: 'spice' },
  { label: '⚙️ Industrial', value: 'industrial' },
]

export default function Products() {
  const [active, setActive] = useState('all')

  const visible = PRODUCTS.filter(p => active === 'all' || p.cat === active)

  return (
    <section id="products" className={styles.products}>
      <div className={`${styles.header} animate-in`}>
        <div>
          <div className={styles.tag}>Our Portfolio</div>
          <h2 className={styles.title}>Export <span className={styles.gold}>Products</span></h2>
        </div>
        <a href="#contact" className={styles.btnOutline}>View All Products →</a>
      </div>

      <div className={`${styles.filters} animate-in`}>
        {FILTERS.map(f => (
          <button
            key={f.value}
            className={`${styles.filterBtn} ${active === f.value ? styles.active : ''}`}
            onClick={() => setActive(f.value)}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {visible.map(p => (
          <div key={p.name} className={styles.card}>
            <div className={styles.cardImg}>
              <span>{p.emoji}</span>
              <span className={styles.cardBadge}>{p.badge}</span>
            </div>
            <div className={styles.cardBody}>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className={styles.cardMeta}>
                <span className={styles.origin}>{p.origin}</span>
                <a href="#contact" className={styles.link}>Enquire →</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
