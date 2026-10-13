import { motion } from 'framer-motion'
import { menuItems } from '../../data/menu'

const menuItemsById = new Map(menuItems.map((item) => [item.id, item]))

export default function DealArtwork({ deal, variant = 'card' }) {
  return (
    <div
      className={`deal-artwork deal-artwork--${variant}`}
      role="img"
      aria-label={`${deal.title}: ${deal.items}`}
      style={{ '--deal-artwork-columns': deal.imageItems.length > 4 ? 3 : 2 }}
    >
      {deal.imageItems.map((itemId, index) => {
        const item = menuItemsById.get(itemId)

        if (!item) {
          throw new Error(`No menu image found for deal item "${itemId}"`)
        }

        return (
          <motion.img
            key={`${itemId}-${index}`}
            className={itemId === 'litre-drink' ? 'deal-artwork__item--bottle' : undefined}
            src={item.image}
            alt=""
            loading="lazy"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.35, delay: index * 0.06 }}
            whileHover={{ scale: 1.06 }}
          />
        )
      })}
    </div>
  )
}
