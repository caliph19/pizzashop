import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Menu, ShoppingCart, X } from 'lucide-react'

export default function SiteHeader({
  cart,
  mobileNavOpen,
  headerScrolled,
  onCartOpen,
  onMobileNavToggle,
  onMobileNavClose,
}) {
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const navRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!mobileNavOpen) return undefined

    const closeOnOutsideClick = (event) => {
      if (
        !navRef.current?.contains(event.target) &&
        !toggleRef.current?.contains(event.target)
      ) {
        onMobileNavClose()
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    return () => document.removeEventListener('pointerdown', closeOnOutsideClick)
  }, [mobileNavOpen, onMobileNavClose])

  return (
    <>
      {mobileNavOpen && (
        <button
          type="button"
          className="mobile-nav-backdrop"
          aria-label="Close navigation menu"
          onClick={onMobileNavClose}
        />
      )}
      <motion.header
        className={`site-header${headerScrolled ? ' scrolled' : ''}`}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-shell nav-inner">
          <motion.a href="#top" className="brand" aria-label="Food Mood home" whileHover={{ scale: 1.03 }}>
            <span className="brand-mark">PS</span>
            <span>The Pizza Shop</span>
          </motion.a>

          <div className="nav-actions">
            <nav ref={navRef} className={`nav-links ${mobileNavOpen ? 'open' : ''}`}>
              <motion.a href="#top" onClick={onMobileNavClose} whileHover={{ x: 4 }}>Home</motion.a>
              <motion.a href="#menu" onClick={onMobileNavClose} whileHover={{ x: 4 }}>Menu</motion.a>
              <motion.a href="#deals" onClick={onMobileNavClose} whileHover={{ x: 4 }}>Deals</motion.a>
              <motion.a href="#about" onClick={onMobileNavClose} whileHover={{ x: 4 }}>About</motion.a>
              <motion.a href="#contact" onClick={onMobileNavClose} whileHover={{ x: 4 }}>Contact</motion.a>
            </nav>
            <motion.button type="button" className="cart-button" onClick={onCartOpen} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
              <ShoppingCart size={18} />
              <span>Cart</span>
              {itemCount > 0 && <em>{itemCount}</em>}
            </motion.button>
            <button
              ref={toggleRef}
              type="button"
              className="mobile-menu-button"
              onClick={onMobileNavToggle}
              aria-label={mobileNavOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileNavOpen}
            >
              {mobileNavOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.header>
    </>
  )
}
