import { motion } from 'framer-motion'
import { sectionReveal, staggerItem } from '../../utils/motion'

export default function AboutSection() {
  return (
    <motion.section id="about" className="section-shell about-section" {...sectionReveal}>
      <motion.div className="about-visual" {...staggerItem}>
        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1200&q=80"
          alt="Fresh restaurant kitchen"
        />
      </motion.div>
      <motion.div className="about-copy" {...staggerItem}>
        <span className="kicker">Made Fresh. Served Hot.</span>
        <h2>At Food Mood, we believe great food should be fresh, flavorful and satisfying.</h2>
        <p>
          From loaded pizzas to burgers, Chinese favorites and refreshing shakes,
          everything is prepared with care and served with a smile.
        </p>
      </motion.div>
    </motion.section>
  )
}
