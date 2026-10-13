import { motion } from 'framer-motion'
import { Minus, Plus, ShoppingCart, X } from 'lucide-react'
import { staggerContainer, staggerItem } from '../../utils/motion'

export default function YourOrderPopup({
  cart,
  subtotal,
  deliveryFee,
  total,
  formatPrice,
  onClose,
  onRemoveItem,
  onUpdateQuantity,
  onClearCart,
  onCheckout,
}) {
  return (
    <motion.aside
      className="cart-drawer your-order-popup"
      initial={{ x: 420 }}
      animate={{ x: 0 }}
      exit={{ x: 420 }}
      transition={{ type: 'spring', stiffness: 280, damping: 28 }}
      aria-hidden={!open}
    >
      <div className="drawer-header">
        <h3>Your Order</h3>
        <button type="button" className="icon-only" onClick={onClose} aria-label="Close your order">
          <X size={18} />
        </button>
      </div>

      <motion.div className="drawer-body" {...staggerContainer}>
        {cart.length === 0 ? (
          <motion.div className="empty-cart" {...staggerItem}>
            <ShoppingCart size={24} />
            <p>Your cart is empty. Start with our favorites.</p>
          </motion.div>
        ) : (
          cart.map((item) => (
            <motion.div key={item.cartKey} className="cart-item" {...staggerItem}>
              <img src={item.image} alt={item.name} />
              <div className="cart-item-copy">
                <div className="cart-item-top">
                  <h4>{item.name}</h4>
                  <button type="button" className="text-link" onClick={() => onRemoveItem(item.cartKey)}>
                    Remove
                  </button>
                </div>

                {item.sizeLabel && <p>{item.sizeLabel}</p>}
                {item.hasExtraTopping && <p className="extra-note">Extra Topping</p>}

                <div className="cart-meta-row">
                  <div className="mini-qty">
                    <button type="button" onClick={() => onUpdateQuantity(item.cartKey, -1)} aria-label={`Decrease ${item.name} quantity`}>
                      <Minus size={14} />
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => onUpdateQuantity(item.cartKey, 1)} aria-label={`Increase ${item.name} quantity`}>
                      <Plus size={14} />
                    </button>
                  </div>
                  <strong>{formatPrice(item.price * item.quantity)}</strong>
                </div>
              </div>
            </motion.div>
          ))
        )}
      </motion.div>

      <motion.div className="drawer-footer" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18, duration: 0.35 }}>
        <div className="totals-row">
          <span>Subtotal</span>
          <strong>{formatPrice(subtotal)}</strong>
        </div>
        <div className="totals-row">
          <span>Delivery</span>
          <strong>{formatPrice(deliveryFee)}</strong>
        </div>
        <div className="totals-row total-line">
          <span>Total</span>
          <strong>{formatPrice(total)}</strong>
        </div>

        <div className="drawer-actions">
          <button type="button" className="secondary-btn wide" onClick={onClose}>
            Continue Shopping
          </button>
          <button type="button" className="primary-btn wide" onClick={onCheckout} disabled={cart.length === 0}>
            Proceed to Order
          </button>
          {cart.length > 0 && (
            <button type="button" className="clear-btn" onClick={onClearCart}>
              Clear Cart
            </button>
          )}
        </div>
      </motion.div>
    </motion.aside>
  )
}
