import { motion } from 'framer-motion'
import { Clock3, MapPin, MessageCircle, Phone } from 'lucide-react'
import { sectionReveal, staggerContainer, staggerItem } from '../../utils/motion'

export default function ContactSection({ restaurantConfig, onWhatsApp }) {
  return (
    <motion.section id="contact" className="section-shell contact-section" {...sectionReveal}>
      <motion.div className="section-header" {...staggerItem}>
        <div>
          <span className="kicker">Contact Us</span>
          <h2>We&apos;re ready when you are</h2>
        </div>
      </motion.div>

      <motion.div className="contact-grid" {...staggerContainer}>
        <motion.div className="contact-card" {...staggerItem} whileHover={{ y: -5 }}>
          <MapPin size={18} />
          <div><span>Location</span><p>{restaurantConfig.address}</p></div>
        </motion.div>
        <motion.div className="contact-card" {...staggerItem} whileHover={{ y: -5 }}>
          <Phone size={18} />
          <div><span>Phone</span><p>{restaurantConfig.phone}</p></div>
        </motion.div>
        <motion.div className="contact-card" {...staggerItem} whileHover={{ y: -5 }}>
          <MessageCircle size={18} />
          <div><span>WhatsApp</span><p>Order directly through WhatsApp</p></div>
        </motion.div>
        <motion.div className="contact-card" {...staggerItem} whileHover={{ y: -5 }}>
          <Clock3 size={18} />
          <div><span>Opening Hours</span><p>{restaurantConfig.openingHours}</p></div>
        </motion.div>
      </motion.div>

      <motion.div className="contact-actions" {...staggerItem}>
        <motion.a href="https://maps.google.com/?q=Abbottabad" target="_blank" rel="noreferrer" className="secondary-btn" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          Get Directions
        </motion.a>
        <motion.button type="button" className="primary-btn" onClick={onWhatsApp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
          <MessageCircle size={18} /> Order on WhatsApp
        </motion.button>
      </motion.div>
    </motion.section>
  )
}
