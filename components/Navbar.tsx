'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <Link href="/" className={styles.logo}>
        <div className={styles.logoIcon}>🌐</div>
        <div className={styles.logoText}>
          <span className={styles.brand}>SVExportGlobal</span>
          <span className={styles.sub}>Exports &amp; Imports</span>
        </div>
      </Link>

      <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>
        <li><a href="#destinations" onClick={() => setMenuOpen(false)}>Markets</a></li>
        <li><a href="#why" onClick={() => setMenuOpen(false)}>Why Us</a></li>
        <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Reviews</a></li>
        <li>
          <a href="#contact" className={styles.cta} onClick={() => setMenuOpen(false)}>
            Get Quote
          </a>
        </li>
      </ul>

      <button
        className={`${styles.hamburger} ${menuOpen ? styles.active : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>
    </nav>
  )
}
