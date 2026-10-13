import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, MotionConfig } from 'framer-motion'
import { MessageCircle, ShoppingCart } from 'lucide-react'
import { restaurantConfig } from '../config'
import { categories, deals, menuItems } from '../data/menu'
import AboutSection from '../components/sections/AboutSection'
import ContactSection from '../components/sections/ContactSection'
import DealsSection from '../components/sections/DealsSection'
import HeroSection from '../components/sections/HeroSection'
import MenuSection from '../components/sections/MenuSection'
import PopularSection from '../components/sections/PopularSection'
import PromoSection from '../components/sections/PromoSection'
import SiteFooter from '../components/sections/SiteFooter'
import SiteHeader from '../components/sections/SiteHeader'
import CheckoutPopup from '../components/popups/CheckoutPopup'
import OrderReviewPopup from '../components/popups/OrderReviewPopup'
import ProductOptionsPopup from '../components/popups/ProductOptionsPopup'
import YourOrderPopup from '../components/popups/YourOrderPopup'
import '../App.css'

const formatPrice = (value) => `${restaurantConfig.currency} ${Number(value || 0).toLocaleString()}`

const getSizeLabel = (size) => {
  if (!size) return ''
  return size.charAt(0).toUpperCase() + size.slice(1)
}

const buildCartKey = (id, size = 'single', extraTopping = false) =>
  `${id}-${size}-${extraTopping ? 'topping' : 'plain'}`

const buildWhatsAppUrl = (message) =>
  `https://wa.me/${restaurantConfig.whatsapp}?text=${encodeURIComponent(message)}`

const buildOrderMessage = ({ customer, cart, orderType, deliveryFee, subtotal, total }) => {
  const lines = [
    '🍕 NEW FOOD MOOD ORDER',
    '',
    'Customer:',
    customer.name,
    '',
    'Phone:',
    customer.phone,
    '',
    'Order Type:',
    orderType === 'delivery' ? 'Delivery' : 'Pickup',
  ]

  if (orderType === 'delivery') {
    lines.push('', 'Address:')
    lines.push(customer.address)
  }

  lines.push('', '----------------------------')

  cart.forEach((item) => {
    lines.push(`${item.quantity} × ${item.name}`)
    if (item.sizeLabel) lines.push(`Size: ${item.sizeLabel}`)
    if (item.hasExtraTopping) lines.push('Extra Topping: Yes')
    lines.push(`Price: ${formatPrice(item.price * item.quantity)}`)
    lines.push('')
  })

  lines.push('----------------------------')
  lines.push(`Subtotal: ${formatPrice(subtotal)}`)
  if (deliveryFee > 0) lines.push(`Delivery: ${formatPrice(deliveryFee)}`)
  lines.push(`Total: ${formatPrice(total)}`)

  if (customer.instructions) {
    lines.push('', `Special Instructions: ${customer.instructions}`)
  }

  lines.push('', 'Please confirm my order.')
  return lines.join('\n')
}

function HomePage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [headerScrolled, setHeaderScrolled] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [cartOpen, setCartOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [reviewOpen, setReviewOpen] = useState(false)
  const [checkoutForm, setCheckoutForm] = useState({
    name: '',
    phone: '',
    address: '',
    instructions: '',
    orderType: 'delivery',
  })
  const [checkoutErrors, setCheckoutErrors] = useState({})
  const [reviewData, setReviewData] = useState(null)
  const isAnyModalOpen = Boolean(selectedProduct || cartOpen || checkoutOpen || reviewOpen)

  const [cart, setCart] = useState(() => {
    try {
      const stored = JSON.parse(localStorage.getItem('food-mood-cart') || '[]')
      return Array.isArray(stored) ? stored : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('food-mood-cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    const updateHeader = () => setHeaderScrolled(window.scrollY > 24)

    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    if (!isAnyModalOpen) return undefined

    const scrollY = window.scrollY
    const bodyStyles = ['position', 'top', 'left', 'right', 'width', 'overflow', 'paddingRight']
    const previousStyles = Object.fromEntries(
      bodyStyles.map((property) => [property, document.body.style[property]]),
    )
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    Object.assign(document.body.style, {
      position: 'fixed',
      top: `-${scrollY}px`,
      left: '0',
      right: '0',
      width: '100%',
      overflow: 'hidden',
      paddingRight: `${scrollbarWidth}px`,
    })

    return () => {
      Object.assign(document.body.style, previousStyles)
      window.scrollTo(0, scrollY)
    }
  }, [isAnyModalOpen])

  const deliveryFee = checkoutForm.orderType === 'delivery' ? 150 : 0

  const popularItems = useMemo(
    () => menuItems.filter((item) => item.popular).slice(0, 4),
    [],
  )

  const filteredProducts = useMemo(() => {
    return menuItems.filter((item) => {
      const categoryMatch =
        activeCategory === 'all' || item.category === activeCategory
      const searchMatch =
        !searchTerm ||
        `${item.name} ${item.description} ${item.category}`
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      return categoryMatch && searchMatch
    })
  }, [activeCategory, searchTerm])

  const filteredDeals = useMemo(
    () => deals.filter((deal) => (
      activeCategory === 'burger-deals'
        ? deal.id.startsWith('burger-deal-')
        : !deal.id.startsWith('burger-deal-')
    )),
    [activeCategory],
  )

  const subtotal = cart.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0)
  const total = subtotal + deliveryFee

  const addCartItem = (item) => {
    const safeItem = {
      ...item,
      quantity: Number(item.quantity) || 1,
      price: Number(item.price) || 0,
      size: item.size || 'single',
      sizeLabel: item.sizeLabel || '',
      hasExtraTopping: Boolean(item.hasExtraTopping),
      extraToppingFee: Number(item.extraToppingFee || 0),
    }

    setCart((currentCart) => {
      const key = buildCartKey(safeItem.id, safeItem.size, safeItem.hasExtraTopping)
      const existing = currentCart.find((entry) => entry.cartKey === key)

      if (existing) {
        return currentCart.map((entry) =>
          entry.cartKey === key
            ? { ...entry, quantity: Number(entry.quantity) + Number(safeItem.quantity) }
            : entry,
        )
      }

      return [
        ...currentCart,
        {
          ...safeItem,
          cartKey: key,
        },
      ]
    })

    setCartOpen(true)
  }

  const removeCartItem = (cartKey) => {
    setCart((currentCart) => currentCart.filter((item) => item.cartKey !== cartKey))
  }

  const updateCartQuantity = (cartKey, delta) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.cartKey === cartKey
            ? { ...item, quantity: Math.max(0, Number(item.quantity) + delta) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const clearCart = () => setCart([])

  const openProductModal = (product) => {
    setSelectedProduct({
      ...product,
      quantity: 1,
      size: product.category === 'pizza' ? 'medium' : 'single',
      extraTopping: false,
    })
  }

  const openDealModal = (deal) => {
    const firstDealItem = menuItems.find((item) => item.id === deal.imageItems[0])

    if (!firstDealItem) {
      throw new Error(`No menu image found for deal "${deal.id}"`)
    }

    openProductModal({
      id: deal.id,
      name: deal.title,
      category: 'deal',
      description: deal.items,
      price: deal.price,
      image: firstDealItem.image,
      imageItems: deal.imageItems,
    })
  }

  const submitProductModal = () => {
    if (!selectedProduct) return

    const activeSize = selectedProduct.category === 'pizza' ? selectedProduct.size : 'single'
    const basePrice =
      selectedProduct.category === 'pizza'
        ? Number(selectedProduct.sizes?.[activeSize] || 0)
        : Number(selectedProduct.price || 0)
    const extraFee =
      selectedProduct.category === 'pizza' && selectedProduct.extraTopping
        ? Number(selectedProduct.toppings?.[activeSize] || 0)
        : 0

    addCartItem({
      id: selectedProduct.id,
      name: selectedProduct.name,
      category: selectedProduct.category,
      description: selectedProduct.description,
      image: selectedProduct.image,
      size: activeSize,
      sizeLabel:
        selectedProduct.category === 'pizza' ? getSizeLabel(activeSize) : '',
      quantity: Number(selectedProduct.quantity) || 1,
      price: basePrice + extraFee,
      hasExtraTopping: Boolean(selectedProduct.extraTopping),
      extraToppingFee: extraFee,
    })

    setSelectedProduct(null)
  }

  const handleCheckoutField = (event) => {
    const { name, value } = event.target
    setCheckoutForm((current) => ({ ...current, [name]: value }))
    setCheckoutErrors((current) => ({ ...current, [name]: '' }))
  }

  const proceedToCheckout = () => {
    if (cart.length === 0) return
    setCheckoutOpen(true)
    setCartOpen(false)
  }

  const submitCheckout = (event) => {
    event.preventDefault()

    const nextErrors = {}

    if (!checkoutForm.name.trim()) nextErrors.name = 'Customer name is required.'
    if (!checkoutForm.phone.trim()) nextErrors.phone = 'Phone number is required.'
    if (checkoutForm.orderType === 'delivery' && !checkoutForm.address.trim()) {
      nextErrors.address = 'Delivery address is required.'
    }

    if (Object.keys(nextErrors).length > 0) {
      setCheckoutErrors(nextErrors)
      return
    }

    const order = {
      customer: {
        name: checkoutForm.name.trim(),
        phone: checkoutForm.phone.trim(),
        address: checkoutForm.address.trim(),
        instructions: checkoutForm.instructions.trim(),
      },
      cart,
      orderType: checkoutForm.orderType,
      deliveryFee,
      subtotal,
      total: subtotal + deliveryFee,
    }

    const message = buildOrderMessage(order)
    setReviewData({ ...order, message })
    setReviewOpen(true)
    setCheckoutOpen(false)
  }

  const openGeneralWhatsApp = () => {
    const text = `Hello ${restaurantConfig.name}, I would like to place an order.`
    window.open(buildWhatsAppUrl(text), '_blank', 'noopener,noreferrer')
  }

  const openReviewWhatsApp = () => {
    if (!reviewData) return
    const summary = buildOrderMessage({
      customer: reviewData.customer,
      cart: reviewData.cart,
      orderType: reviewData.orderType,
      deliveryFee: reviewData.deliveryFee,
      subtotal: reviewData.subtotal,
      total: reviewData.total,
    })
    window.open(buildWhatsAppUrl(summary), '_blank', 'noopener,noreferrer')
  }

  const floatingWhatsAppAction = () => {
    if (cart.length > 0 && reviewData) {
      openReviewWhatsApp()
      return
    }

    if (cart.length > 0) {
      const summary = buildOrderMessage({
        customer: {
          name: 'Customer',
          phone: 'N/A',
          address: 'N/A',
          instructions: '',
        },
        cart,
        orderType: 'delivery',
        deliveryFee: 0,
        subtotal,
        total: subtotal,
      })
      window.open(buildWhatsAppUrl(summary), '_blank', 'noopener,noreferrer')
      return
    }

    openGeneralWhatsApp()
  }

  return (
    <MotionConfig reducedMotion="user">
    <div className="app-shell">
      <SiteHeader
        cart={cart}
        mobileNavOpen={mobileNavOpen}
        headerScrolled={headerScrolled}
        onCartOpen={() => setCartOpen(true)}
        onMobileNavToggle={() => setMobileNavOpen((current) => !current)}
        onMobileNavClose={() => setMobileNavOpen(false)}
      />

      <main id="top">
        <div className="landing-frame">
          <HeroSection />
          <PopularSection
            items={popularItems}
            formatPrice={formatPrice}
            onProductOpen={openProductModal}
          />
        </div>

        <MenuSection
          categories={categories}
          items={filteredProducts}
          deals={filteredDeals}
          activeCategory={activeCategory}
          searchTerm={searchTerm}
          onCategoryChange={setActiveCategory}
          onSearchChange={setSearchTerm}
          onProductOpen={openProductModal}
          onDealSelect={openDealModal}
          formatPrice={formatPrice}
        />
        <DealsSection
          deals={deals}
          formatPrice={formatPrice}
          onDealSelect={openDealModal}
        />
        <PromoSection onCartOpen={() => setCartOpen(true)} />
        <AboutSection />
        <ContactSection restaurantConfig={restaurantConfig} onWhatsApp={openGeneralWhatsApp} />
      </main>

      <SiteFooter onCartOpen={() => setCartOpen(true)} />

      <AnimatePresence>
        {selectedProduct && (
          <ProductOptionsPopup
            product={selectedProduct}
            formatPrice={formatPrice}
            onProductChange={setSelectedProduct}
            onClose={() => setSelectedProduct(null)}
            onSubmit={submitProductModal}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {cartOpen && (
          <YourOrderPopup
            cart={cart}
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            total={total}
            formatPrice={formatPrice}
            onClose={() => setCartOpen(false)}
            onRemoveItem={removeCartItem}
            onUpdateQuantity={updateCartQuantity}
            onClearCart={clearCart}
            onCheckout={proceedToCheckout}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {checkoutOpen && (
          <CheckoutPopup
            open={checkoutOpen}
            form={checkoutForm}
            errors={checkoutErrors}
            subtotal={subtotal}
            deliveryFee={deliveryFee}
            total={total}
            formatPrice={formatPrice}
            onClose={() => setCheckoutOpen(false)}
            onFieldChange={handleCheckoutField}
            onSubmit={submitCheckout}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {reviewOpen && reviewData && (
          <OrderReviewPopup
            data={reviewData}
            formatPrice={formatPrice}
            onClose={() => setReviewOpen(false)}
            onSendOrder={openReviewWhatsApp}
          />
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        className="floating-whatsapp"
        onClick={floatingWhatsAppAction}
        aria-label="Order on WhatsApp"
        whileHover={{ scale: 1.06, y: -3 }}
        whileTap={{ scale: 0.96 }}
      >
        <MessageCircle size={20} />
        <span>Order Now</span>
      </motion.button>

      <div className="mobile-cart-bar">
        {cart.length > 0 ? (
          <motion.button
            type="button"
            onClick={() => setCartOpen(true)}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>
              <ShoppingCart size={18} />
              {cart.reduce((sum, item) => sum + item.quantity, 0)} Items
            </span>
            <strong>{formatPrice(subtotal)}</strong>
          </motion.button>
        ) : null}
      </div>
    </div>
    </MotionConfig>
  )
}

export default HomePage
