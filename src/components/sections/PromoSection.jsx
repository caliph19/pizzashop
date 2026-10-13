import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { sectionReveal, staggerItem } from '../../utils/motion'

export default function PromoSection({ onCartOpen }) {
  return (
    <motion.section className="promo-banner promo-section section-shell" {...sectionReveal}>
      <motion.div {...staggerItem}>
        <span>Hungry? We&apos;ve got you.</span>
        <h3>Fresh pizza. Great deals. Zero compromise.</h3>
      </motion.div>
      <motion.button
        type="button"
        className="primary-btn"
        onClick={onCartOpen}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
      >
        Order Now <ArrowRight size={18} />
      </motion.button>
    </motion.section>
  )
}
