import { motion } from 'framer-motion'
import { restaurantConfig } from '../../config'
import { sectionReveal, staggerContainer, staggerItem } from '../../utils/motion'

export default function SiteFooter({ onCartOpen }) {
  return (
    <motion.footer className="site-footer" {...sectionReveal}>
      <motion.div className="section-shell footer-inner" {...staggerContainer}>
        <motion.div {...staggerItem}>
          <h3>{restaurantConfig.name}</h3>
          <p>Fresh Pizza. Bold Flavour.</p>
        </motion.div>

        <motion.div {...staggerItem}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#top">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#deals">Deals</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div {...staggerItem}>
          <h4>Order</h4>
          <ul>
            <li><a href="#menu">WhatsApp</a></li>
            <li><button type="button" onClick={onCartOpen}>Cart</button></li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div className="section-shell footer-bottom" {...staggerItem}>
        © 2026 Food Mood. All Rights Reserved.
      </motion.div>
    </motion.footer>
  )
}
