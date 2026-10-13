import { motion } from 'framer-motion'
import { CheckCircle2, X } from 'lucide-react'

export default function OrderReviewPopup({ data, formatPrice, onClose, onSendOrder }) {
  if (!data) return null

  return (
    <motion.div
      className="modal-backdrop order-review-popup"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="review-panel order-review-popup__panel"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span className="kicker">Confirm Your Order</span>
            <h3>Customer Information</h3>
          </div>
          <button type="button" className="icon-only" onClick={onClose} aria-label="Close order review">
            <X size={18} />
          </button>
        </div>

        <div className="review-box">
          <p><strong>Name:</strong> {data.customer.name}</p>
          <p><strong>Phone:</strong> {data.customer.phone}</p>
          <p><strong>Address:</strong> {data.customer.address || 'Pickup order'}</p>
          <p><strong>Order Type:</strong> {data.orderType === 'delivery' ? 'Delivery' : 'Pickup'}</p>
        </div>

        <div className="review-items">
          {data.cart.map((item) => (
            <div key={item.cartKey} className="review-item">
              <div>
                <strong>{item.quantity} × {item.name}</strong>
                {item.sizeLabel && <span>Size: {item.sizeLabel}</span>}
                {item.hasExtraTopping && <span>Extra Topping: Yes</span>}
              </div>
              <strong>{formatPrice(item.price * item.quantity)}</strong>
            </div>
          ))}
        </div>

        <div className="checkout-summary">
          <div className="totals-row">
            <span>Subtotal</span>
            <strong>{formatPrice(data.subtotal)}</strong>
          </div>
          {data.deliveryFee > 0 && (
            <div className="totals-row">
              <span>Delivery</span>
              <strong>{formatPrice(data.deliveryFee)}</strong>
            </div>
          )}
          <div className="totals-row total-line">
            <span>Total</span>
            <strong>{formatPrice(data.total)}</strong>
          </div>
        </div>

        <button type="button" className="primary-btn wide" onClick={onSendOrder}>
          <CheckCircle2 size={18} /> Send Order on WhatsApp
        </button>
      </motion.div>
    </motion.div>
  )
}
