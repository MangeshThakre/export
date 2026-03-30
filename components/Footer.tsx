import Link from 'next/link'
import styles from './Footer.module.css'

const PRODUCTS = ['Agricultural Goods','Spices & Herbs','Pharmaceuticals','Surgical Items','Industrial Parts']
const COMPANY  = [
  { label: 'About Us',        href: '#about' },
  { label: 'Why Choose Us',   href: '#why' },
  { label: 'Our Markets',     href: '#destinations' },
  { label: 'Testimonials',    href: '#testimonials' },
  { label: 'Contact Us',      href: '#contact' },
]
const CERTS = ['ISO 9001:2015','FSSAI Certified','APEDA Member','WHO-GMP','FIEO Member']
const SOCIALS = [
  { label: '𝕏',  href: '#' },
  { label: 'in', href: '#' },
  { label: 'f',  href: '#' },
  { label: '▶',  href: '#' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo}>
            <div className={styles.logoIcon}>🌐</div>
            <div>
              <span className={styles.logoName}>SVExportGlobal</span>
              <span className={styles.logoSub}>Exports &amp; Imports</span>
            </div>
          </Link>
          <p>
            India's trusted export partner since 2010. Delivering premium quality
            products to 25+ countries with reliability and excellence.
          </p>
        </div>

        {/* Products */}
        <div className={styles.col}>
          <h4>Products</h4>
          <ul>
            {PRODUCTS.map(p => <li key={p}><a href="#products">{p}</a></li>)}
          </ul>
        </div>

        {/* Company */}
        <div className={styles.col}>
          <h4>Company</h4>
          <ul>
            {COMPANY.map(c => <li key={c.label}><a href={c.href}>{c.label}</a></li>)}
          </ul>
        </div>

        {/* Certifications */}
        <div className={styles.col}>
          <h4>Certifications</h4>
          <ul>
            {CERTS.map(c => <li key={c}><a href="#">{c}</a></li>)}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© 2025 SVExportGlobal. All rights reserved. | Made in India 🇮🇳</p>
        <div className={styles.socials}>
          {SOCIALS.map(s => (
            <a key={s.label} href={s.href} className={styles.socialBtn}>{s.label}</a>
          ))}
        </div>
      </div>
    </footer>
  )
}
