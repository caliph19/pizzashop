import { motion } from 'framer-motion'
import { Minus, Plus, X } from 'lucide-react'
import DealArtwork from '../sections/DealArtwork'

const sizeOrder = ['small', 'medium', 'large', 'xl']

const getSizeLabel = (size) => size.charAt(0).toUpperCase() + size.slice(1)

export default function ProductOptionsPopup({
  product,
  formatPrice,
  onProductChange,
  onClose,
  onSubmit,
}) {
  if (!product) return null

  const unitPrice = product.category === 'pizza'
    ? Number(product.sizes?.[product.size] || 0) +
      (product.extraTopping ? Number(product.toppings?.[product.size] || 0) : 0)
    : Number(product.price || 0)

  const updateQuantity = (delta) => {
    onProductChange((current) => ({
      ...current,
      quantity: Math.max(1, Number(current.quantity || 1) + delta),
    }))
  }

  return (
    <motion.div
      className="modal-backdrop product-options-popup"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-panel product-options-popup__panel"
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.2 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div
          className={
            product.imageItems
              ? 'product-options-popup__intro product-options-popup__intro--deal'
              : 'product-options-popup__intro'
          }
        >
          {product.imageItems ? (
            <DealArtwork
              deal={{
                title: product.name,
                items: product.description,
                imageItems: product.imageItems,
              }}
              variant="popup"
            />
          ) : (
            <img
              className="product-options-popup__image"
              src={product.image}
              alt={product.name}
            />
          )}
          <div className="product-options-popup__details">
            <span className="kicker">Customize your order</span>
            <h3>{product.name}</h3>
            {product.description && <p>{product.description}</p>}
          </div>
          <button type="button" className="icon-only" onClick={onClose} aria-label="Close product options">
            <X size={18} />
          </button>
        </div>

        {product.category === 'pizza' && (
          <>
            <div className="option-group">
              <label>Choose Size</label>
              <div className="choice-grid">
                {sizeOrder.map((size) => (
                  <button
                    key={size}
                    type="button"
                    className={product.size === size ? 'choice-card active' : 'choice-card'}
                    onClick={() => onProductChange((current) => ({ ...current, size }))}
                  >
                    <span>{getSizeLabel(size)}</span>
                    <strong>{formatPrice(product.sizes?.[size] || 0)}</strong>
                  </button>
                ))}
              </div>
            </div>

            <div className="option-group">
              <label>Extra topping</label>
              <button
                type="button"
                className={product.extraTopping ? 'toggle active' : 'toggle'}
                onClick={() => onProductChange((current) => ({
                  ...current,
                  extraTopping: !current.extraTopping,
                }))}
              >
                <span>+ Extra Topping</span>
                <strong>{formatPrice(product.toppings?.[product.size] || 0)}</strong>
              </button>
            </div>
          </>
        )}

        <div className="option-group quantity-group">
          <label>Quantity</label>
          <div className="inline-qty">
            <button type="button" className="qty-btn" onClick={() => updateQuantity(-1)} aria-label="Decrease quantity">
              <Minus size={18} />
            </button>
            <span>{product.quantity}</span>
            <button type="button" className="qty-btn" onClick={() => updateQuantity(1)} aria-label="Increase quantity">
              <Plus size={18} />
            </button>
          </div>
        </div>

        <div className="modal-footer">
          <div className="modal-total">
            <span>Total</span>
            <strong>{formatPrice(unitPrice * product.quantity)}</strong>
          </div>
          <motion.button type="button" className="primary-btn" onClick={onSubmit} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            Add to Cart — {formatPrice(unitPrice * product.quantity)}
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
