import { motion } from 'framer-motion'
import DealArtwork from './DealArtwork'
import { sectionReveal } from '../../utils/motion'

export default function DealsSection({ deals, formatPrice, onDealSelect }) {
  return (
    <motion.section
      id="deals"
      className="section-shell deals-section"
      {...sectionReveal}
      viewport={{ once: true, amount: 0.02 }}
    >
      <div className="section-header">
        <div>
          <span className="kicker">Food Mood Pizza Deals</span>
          <h2>Great value combos</h2>
        </div>
      </div>

      <div className="deal-grid">
        {deals.map((deal) => (
          <motion.article
            key={deal.id}
            className="deal-card"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <DealArtwork deal={deal} />
            <div className="deal-content">
              <span>{deal.title}</span>
              <p>{deal.items}</p>
              <strong>{formatPrice(deal.price)}</strong>
              <motion.button
                type="button"
                className="primary-btn deal-add-button"
                onClick={() => onDealSelect(deal)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                Add to Cart
              </motion.button>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  )
}
