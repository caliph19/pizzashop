import { motion } from 'framer-motion'
import { X } from 'lucide-react'

export default function CheckoutPopup({
  open,
  form,
  errors,
  subtotal,
  deliveryFee,
  total,
  formatPrice,
  onClose,
  onFieldChange,
  onSubmit,
}) {
  if (!open) return null

  return (
    <motion.div
      className="modal-backdrop checkout-popup"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="checkout-panel checkout-popup__panel"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="modal-header">
          <div>
            <span className="kicker">Checkout</span>
            <h3>Customer details</h3>
          </div>
          <button type="button" className="icon-only" onClick={onClose} aria-label="Close checkout">
            <X size={18} />
          </button>
        </div>

        <form className="checkout-form" onSubmit={onSubmit}>
          <div className="field-grid">
            <label>
              <span>Customer Name *</span>
              <input
                name="name"
                value={form.name}
                onChange={onFieldChange}
                className={errors.name ? 'input-error' : ''}
              />
              {errors.name && <small>{errors.name}</small>}
            </label>

            <label>
              <span>Phone Number *</span>
              <input
                name="phone"
                value={form.phone}
                onChange={onFieldChange}
                className={errors.phone ? 'input-error' : ''}
              />
              {errors.phone && <small>{errors.phone}</small>}
            </label>
          </div>

          <label>
            <span>Special Instructions</span>
            <textarea
              name="instructions"
              value={form.instructions}
              onChange={onFieldChange}
              rows={3}
            />
          </label>

          <div className="order-type">
            <span>Order Type</span>
            <div className="type-options">
              <label className={form.orderType === 'delivery' ? 'radio active' : 'radio'}>
                <input
                  type="radio"
                  name="orderType"
                  value="delivery"
                  checked={form.orderType === 'delivery'}
                  onChange={onFieldChange}
                />
                Delivery
              </label>
              <label className={form.orderType === 'pickup' ? 'radio active' : 'radio'}>
                <input
                  type="radio"
                  name="orderType"
                  value="pickup"
                  checked={form.orderType === 'pickup'}
                  onChange={onFieldChange}
                />
                Pickup
              </label>
            </div>
          </div>

          {form.orderType === 'delivery' && (
            <label>
              <span>Delivery Address *</span>
              <textarea
                name="address"
                value={form.address}
                onChange={onFieldChange}
                rows={3}
                className={errors.address ? 'input-error' : ''}
              />
              {errors.address && <small>{errors.address}</small>}
            </label>
          )}

          <div className="checkout-summary">
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
          </div>

          <motion.button type="submit" className="primary-btn wide" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            Review Order
          </motion.button>
        </form>
      </motion.div>
    </motion.div>
  )
}
