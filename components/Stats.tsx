'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './Stats.module.css'

const STATS = [
  { target: 25,   label: 'Countries Served',    desc: 'From UAE to USA, our products reach every continent' },
  { target: 2000, label: 'Happy Clients',        desc: 'Businesses that trust us for their import needs' },
  { target: 100,  label: 'Product Categories',  desc: 'Diverse portfolio across multiple industries' },
  { target: 10,   label: 'Years Experience',     desc: 'A decade of delivering quality without compromise' },
]

function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const step = target / 60
        let val = 0
        const id = setInterval(() => {
          val += step
          if (val >= target) { setCount(target); clearInterval(id) }
          else setCount(Math.floor(val))
        }, 16)
      }
    }, { threshold: 0.6 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [target])

  return <div ref={ref} className={styles.number}>{count}+</div>
}

export default function Stats() {
  return (
    <div className={styles.band}>
      <div className={styles.grid}>
        {STATS.map(s => (
          <div key={s.label} className={styles.cell}>
            <Counter target={s.target} />
            <h4>{s.label}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
