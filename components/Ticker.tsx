import styles from './Ticker.module.css'

const items = [
  'Agricultural Products', 'Pharmaceutical Goods', 'Spices & Herbs',
  'Surgical Equipment', 'Textile & Fabrics', 'Organic Produce',
  'Industrial Goods', 'Food & Beverages',
]

export default function Ticker() {
  const doubled = [...items, ...items]
  return (
    <div className={styles.ticker}>
      <div className={styles.inner}>
        {doubled.map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  )
}
