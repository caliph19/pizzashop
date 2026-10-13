import { motion } from 'framer-motion'
import { Plus, Search } from 'lucide-react'
import { sectionReveal, staggerItem } from '../../utils/motion'
import DealArtwork from './DealArtwork'

const getCategoryLabel = (category) => {
  const labels = {
    all: 'All',
    pizza: 'Pizza',
    'pizza-deals': 'Pizza Deals',
    burgers: 'Burgers',
    'individual-chicken': 'Individual Chicken',
    'burger-deals': 'Burger Deals',
    'start-me-up': 'Start Me Up',
    fries: 'Fries',
    'tea-drinks': 'Tea / Drinks',
    'chicken-kadahi': 'Chicken Kadayi',
    'pratha-roll': 'Pratha Roll',
    roti: 'Roti',
  }

  return labels[category] || category
}

export default function MenuSection({
  categories,
  items,
  deals,
  activeCategory,
  searchTerm,
  onCategoryChange,
  onSearchChange,
  onProductOpen,
  onDealSelect,
  formatPrice,
}) {
  const showingDeals = activeCategory === 'pizza-deals' || activeCategory === 'burger-deals'

  return (
    <motion.section id="menu" className="section-shell menu-section" {...sectionReveal}>
      <motion.div className="section-header sticky-header" {...staggerItem}>
        <motion.div {...staggerItem}>
          <span className="kicker">Fresh Menu</span>
          <h2>{searchTerm ? `Search results for "${searchTerm}"` : 'Complete menu'}</h2>
        </motion.div>
        <motion.label className="search-box" aria-label="Search products" {...staggerItem}>
          <Search size={16} />
          <input
            value={searchTerm}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search menu"
            aria-label="Search menu items"
          />
        </motion.label>
      </motion.div>

      <div className="category-nav" aria-label="Category filters">
        {categories.map((category) => (
          <motion.button
            key={category}
            type="button"
            className={category === activeCategory ? 'category-btn active' : 'category-btn'}
            onClick={() => onCategoryChange(category)}
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
          >
            {getCategoryLabel(category)}
          </motion.button>
        ))}
      </div>

      {showingDeals ? (
        <div className="product-grid menu-grid menu-deal-grid">
          {deals.map((deal) => (
            <motion.article
              key={deal.id}
              className="product-card menu-item-card menu-deal-item"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <DealArtwork deal={deal} variant="popup" />
              <div className="menu-item-body">
                <button type="button" className="menu-item-info" onClick={() => onDealSelect(deal)}>
                  <h3>{deal.title}</h3>
                  <p>{deal.items}</p>
                </button>
                <div className="card-bottom">
                  <div className="price-meta">
                    <strong>{formatPrice(deal.price)}</strong>
                  </div>
                  <button
                    type="button"
                    className="growing-btn"
                    aria-label={`Customize ${deal.title}`}
                    onClick={() => onDealSelect(deal)}
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="empty-state">No dishes match your search. Try another keyword.</div>
      ) : (
        <div className="product-grid menu-grid">
          {items.map((item) => (
            <motion.article
              key={item.id}
              className="product-card menu-item-card"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <button type="button" className="menu-item-image" onClick={() => onProductOpen(item)}>
                <img src={item.image} alt={item.name} />
              </button>

              <div className="menu-item-body">
                <button type="button" className="menu-item-info" onClick={() => onProductOpen(item)}>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </button>
                <div className="card-bottom">
                  <div className="price-meta">
                    {item.category === 'pizza' && <span>From</span>}
                    <strong>
                      {item.category === 'pizza'
                        ? formatPrice(Math.min(...Object.values(item.sizes)))
                        : formatPrice(item.price)}
                    </strong>
                  </div>
                  <button
                    type="button"
                    className="growing-btn"
                    aria-label={`Customize ${item.name}`}
                    onClick={() => onProductOpen(item)}
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}
    </motion.section>
  )
}
