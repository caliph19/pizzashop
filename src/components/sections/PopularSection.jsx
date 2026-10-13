import { motion } from 'framer-motion'
import { ChevronRight, Plus } from 'lucide-react'
import { sectionReveal } from '../../utils/motion'

export default function PopularSection({ items, formatPrice, onProductOpen }) {
  return (
    <motion.section className="section-shell popular-section" {...sectionReveal}>
      <div className="section-header">
        <div>
          <span className="kicker">Popular Right Now</span>
          <h2>Most loved picks</h2>
        </div>
        <motion.a href="#menu" className="section-link" whileHover={{ x: 4 }}>
          Explore menu <ChevronRight size={16} />
        </motion.a>
      </div>

      <div className="product-grid popular-grid">
        {items.map((item) => (
          <motion.article
            key={item.id}
            className="product-card popular-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
          >
            <motion.button type="button" className="card-visual" onClick={() => onProductOpen(item)} whileHover={{ scale: 1.06 }}>
              <img src={item.image} alt={item.name} />
              {item.popular && <span className="chip">Popular</span>}
            </motion.button>

            <div className="card-body">
              <h3>{item.name}</h3>
              <p>{item.description}</p>
              <div className="card-bottom">
                <div className="price-meta">
                  <span>From</span>
                  <strong>
                    {formatPrice(item.category === 'pizza'
                      ? Math.min(...Object.values(item.sizes))
                      : item.price)}
                  </strong>
                </div>
                <motion.button
                  type="button"
                  className="growing-btn"
                  aria-label={`Customize ${item.name}`}
                  onClick={() => onProductOpen(item)}
                  whileHover={{ scale: 1.12 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Plus size={14} /> Add
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
