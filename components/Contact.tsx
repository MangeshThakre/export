'use client'
import { useState } from 'react'
import styles from './Contact.module.css'

const INFO = [
  { icon: '📍', label: 'Head Office',   value: 'Nagpur, Maharashtra, India — 440001', href: undefined },
  { icon: '📞', label: 'Phone',         value: '+91 98765 43210', href: 'tel:+919876543210' },
  { icon: '✉️', label: 'Email',         value: 'info@svexportglobal.com', href: 'mailto:info@svexportglobal.com' },
  { icon: '🕐', label: 'Office Hours',  value: 'Monday – Saturday: 8:00 AM – 8:00 PM IST', href: undefined },
]

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', country: '', product: '', message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4500)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.grid}>
        {/* Info */}
        <div className="animate-in">
          <div className={styles.tag}>Get In Touch</div>
          <h2 className={styles.title}>
            Request a <span className={styles.gold}>Quote</span>
          </h2>
          <p className={styles.desc}>
            Reach out to our export team. We respond within 24 hours and can
            provide customized pricing for bulk orders.
          </p>
          <div className={styles.info}>
            {INFO.map(i => (
              <div key={i.label} className={styles.infoItem}>
                <div className={styles.infoIcon}>{i.icon}</div>
                <div>
                  <h4>{i.label}</h4>
                  {i.href
                    ? <a href={i.href}>{i.value}</a>
                    : <p>{i.value}</p>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className={`${styles.formBox} animate-in`}>
          <h3>Send an Enquiry</h3>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              <div className={styles.group}>
                <label>Full Name *</label>
                <input type="text" placeholder="John Smith" value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })} required />
              </div>
              <div className={styles.group}>
                <label>Company Name</label>
                <input type="text" placeholder="Your Company Ltd." value={form.company}
                  onChange={e => setForm({ ...form, company: e.target.value })} />
              </div>
              <div className={styles.group}>
                <label>Email Address *</label>
                <input type="email" placeholder="john@company.com" value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })} required />
              </div>
              <div className={styles.group}>
                <label>Phone Number</label>
                <input type="tel" placeholder="+1 234 567 8900" value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })} />
              </div>
              <div className={`${styles.group} ${styles.full}`}>
                <label>Country</label>
                <select value={form.country} onChange={e => setForm({ ...form, country: e.target.value })}>
                  <option value="">Select your country</option>
                  {['United Arab Emirates','United States','United Kingdom','Germany','Singapore','Australia','Canada','Other'].map(c => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </div>
              <div className={`${styles.group} ${styles.full}`}>
                <label>Product of Interest</label>
                <select value={form.product} onChange={e => setForm({ ...form, product: e.target.value })}>
                  <option value="">Select a category</option>
                  {['Agricultural Products','Spices & Herbs','Pharmaceutical Products','Surgical Instruments','Industrial Goods','Other'].map(p => (
                    <option key={p}>{p}</option>
                  ))}
                </select>
              </div>
              <div className={`${styles.group} ${styles.full}`}>
                <label>Message / Requirements</label>
                <textarea placeholder="Please describe your requirements, quantities, and any specific certifications needed..."
                  value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              </div>
            </div>
            <button type="submit" className={`${styles.submit} ${submitted ? styles.sent : ''}`} disabled={submitted}>
              {submitted ? '✓ Enquiry Sent! We\'ll reply within 24 hrs' : 'Send Enquiry →'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
