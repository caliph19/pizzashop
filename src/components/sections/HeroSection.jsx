import { motion } from 'framer-motion'
import { Sparkles, Truck } from 'lucide-react'
import { staggerContainer, staggerItem } from '../../utils/motion'

export default function HeroSection() {
  return (
    <motion.section className="hero hero-section section-shell" {...staggerContainer}>
      <motion.div className="hero-copy" {...staggerContainer}>
        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow-dash" />
          <Sparkles size={14} /> FRESH FROM THE OVEN
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          The original taste of <span>great pizza.</span>
        </motion.h1>
        <motion.div className="hero-stats" {...staggerContainer}>
          <motion.div {...staggerItem}>
            <strong>11 AM — 10 PM</strong>
            <span>Open every day</span>
          </motion.div>
          <motion.div {...staggerItem}>
            <strong>Freshly made</strong>
            <span>Delivery &amp; pickup</span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <div className="steam-effect" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="badge badge-right">
          <Truck size={14} />
          <span><strong>Hot &amp; fresh</strong><small>At your doorstep</small></span>
        </div>
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1200&q=80"
          alt="Loaded pizza"
        />
      </motion.div>
    </motion.section>
  )
}
