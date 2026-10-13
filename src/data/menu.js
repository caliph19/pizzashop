import colaBottleImage from '../assets/cola-bottle-1-5l.png'

export const categories = [
  'all',
  'pizza',
  'pizza-deals',
  'burgers',
  'individual-chicken',
  'burger-deals',
  'start-me-up',
  'fries',
  'tea-drinks',
  'chicken-kadahi',
  'pratha-roll',
  'roti'
]

export const menuItems = [
  {
    id: 'chicken-tikka-pizza',
    name: 'Chicken Tikka Pizza',
    category: 'pizza',
    description: 'Chicken tikka cube, smoked chicken, mushrooms, black olives, cheese, onion',
    sizes: { small: 550, medium: 1300, large: 1900, xl: 2500 },
    toppings: { small: 150, medium: 200, large: 300, xl: 350 },
    image:
      'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=80',
    popular: true
  },
  {
    id: 'chicken-fajita-pizza',
    name: 'Chicken Fajita Pizza',
    category: 'pizza',
    description: 'Chicken tikka cube, smoked chicken, mushrooms, black olives, cheese, onion',
    sizes: { small: 550, medium: 1300, large: 1900, xl: 2500 },
    toppings: { small: 150, medium: 200, large: 300, xl: 350 },
    image:
      'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=900&q=80',
    popular: true
  },
  {
    id: 'chicken-bbq-pizza',
    name: 'Chicken Bar B Q Pizza',
    category: 'pizza',
    description: 'Chicken tikka cube, smoked chicken, mushrooms, black olives, cheese, onion, BBQ sauce',
    sizes: { small: 550, medium: 1300, large: 1900, xl: 2500 },
    toppings: { small: 150, medium: 200, large: 300, xl: 350 },
    image:
      'https://images.unsplash.com/photo-1552539618-7eec9b4d1796?auto=format&fit=crop&w=900&q=80',
    popular: true
  },
  {
    id: 'food-mood-special-pizza',
    name: 'Food Mood Special Pizza',
    category: 'pizza',
    description: 'Chicken tikka cube, chicken sausage, mushrooms, black olives, tomato, herbs',
    sizes: { small: 550, medium: 1300, large: 1900, xl: 2500 },
    toppings: { small: 150, medium: 200, large: 300, xl: 350 },
    image:
      'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=900&q=80',
    popular: true
  },
  {
    id: 'chicken-burger',
    name: 'Chicken Burger',
    category: 'burgers',
    description: 'Classic chicken burger with fresh toppings',
    price: 350,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    popular: true
  },
  {
    id: 'chicken-burger-with-cheese',
    name: 'Chicken Burger with Cheese',
    category: 'burgers',
    description: 'Chicken burger stacked with cheese and signature sauce',
    price: 400,
    image:
      'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80',
    popular: true
  },
  {
    id: 'zinger-burger',
    name: 'Zinger Burger',
    category: 'burgers',
    description: 'Crispy zinger burger with loaded textures',
    price: 500,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    popular: true
  },
  {
    id: 'zinger-burger-with-cheese',
    name: 'Zinger Burger with Cheese',
    category: 'burgers',
    description: 'Double crunch zinger with cheesy melt',
    price: 550,
    image:
      'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80',
    popular: true
  },
  {
    id: 'mega-burger',
    name: 'Mega Burger',
    category: 'burgers',
    description: 'Big and satisfying burger for hungry appetites',
    price: 600,
    image:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=80',
    popular: true
  },
  {
    id: 'mega-burger-with-cheese',
    name: 'Mega Burger with Cheese',
    category: 'burgers',
    description: 'Large burger loaded with cheese and herbs',
    price: 650,
    image:
      'https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80',
    popular: true
  },
  {
    id: 'fried-chicken-1pc',
    name: 'Fried Chicken (1 Pc)',
    category: 'individual-chicken',
    description: 'Crispy single-piece fried chicken',
    price: 252,
    image:
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'fried-chicken-3pcs',
    name: 'Fried Chicken (3 Pcs)',
    category: 'individual-chicken',
    description: 'Crispy chicken trio for sharing',
    price: 675,
    image:
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'fried-chicken-5pcs',
    name: 'Fried Chicken (5 Pcs)',
    category: 'individual-chicken',
    description: 'Family-size crispy fried chicken',
    price: 1125,
    image:
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'spicy-wings-6pcs',
    name: 'Spicy Wings (6 Pcs)',
    category: 'start-me-up',
    description: 'Fiery wings with a crunchy finish',
    price: 700,
    image:
      'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'spicy-honey-wings-8pcs',
    name: 'Spicy Honey Wings (8 Pcs)',
    category: 'start-me-up',
    description: 'Sweet and spicy crispy wings',
    price: 800,
    image:
      'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'crispy-wings-5pcs',
    name: 'Crispy Wings (5 Pcs)',
    category: 'start-me-up',
    description: 'Golden and crunchy wings',
    price: 600,
    image:
      'https://images.unsplash.com/photo-1562967916-eb82221dfb92?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'french-fries-plain',
    name: 'French Fries Plain',
    category: 'fries',
    description: 'Golden fries served plain and hot',
    price: 300,
    image:
      'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'cheese-fries',
    name: 'Cheese Fries',
    category: 'fries',
    description: 'Loaded with melty cheese topping',
    price: 400,
    image:
      'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'mayo-fries',
    name: 'Mayo Fries',
    category: 'fries',
    description: 'Crispy fries with creamy mayo drizzle',
    price: 350,
    image:
      'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'tea',
    name: 'Tea',
    category: 'tea-drinks',
    description: 'Fresh tea served warm',
    price: 100,
    image:
      'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'green-tea',
    name: 'Green Tea',
    category: 'tea-drinks',
    description: 'Refreshing green tea',
    price: 80,
    image:
      'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'tea-drinks',
    description: 'Smooth cappuccino',
    price: 250,
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'black-coffee',
    name: 'Black Coffee',
    category: 'tea-drinks',
    description: 'Strong black coffee',
    price: 200,
    image:
      'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'can-drink',
    name: 'Coca-Cola Can',
    category: 'tea-drinks',
    description: 'Chilled Coca-Cola served in a can',
    price: 150,
    image:
      'https://images.unsplash.com/photo-1596803244618-8dbee441d70b?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'litre-drink',
    name: '1.5L Coca-Cola Bottle',
    category: 'tea-drinks',
    description: 'Chilled Coca-Cola in a 1.5 litre bottle',
    price: 250,
    image: colaBottleImage,
    popular: false
  },
  {
    id: 'water-large',
    name: 'M. Water Large',
    category: 'tea-drinks',
    description: 'Large water bottle',
    price: 150,
    image:
      'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'water-small',
    name: 'M. Water Small',
    category: 'tea-drinks',
    description: 'Small water bottle',
    price: 80,
    image:
      'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'chicken-kadahi-half',
    name: 'Chicken Kadahi (Half)',
    category: 'chicken-kadahi',
    description: 'Half chicken kadahi, slow cooked with spices',
    price: 1150,
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'chicken-kadahi-full',
    name: 'Chicken Kadahi (Full)',
    category: 'chicken-kadahi',
    description: 'Full chicken kadahi, richly spiced and savory',
    price: 2300,
    image:
      'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'pratha-roll',
    name: 'Chicken Pratha Roll',
    category: 'pratha-roll',
    description: 'Classic chicken pratha roll',
    price: 350,
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'jumbo-pratha',
    name: 'Jumbo Pratha',
    category: 'pratha-roll',
    description: 'Large signature jumbo pratha',
    price: 500,
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
    popular: false
  },
  {
    id: 'roti',
    name: 'Roti',
    category: 'roti',
    description: 'Fresh plain roti',
    price: 30,
    image:
      'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
    popular: false
  }
]

export const deals = [
  {
    id: 'deal-1',
    title: 'Pizza Deal 1',
    items: '1 Small Pizza + 1 Zinger Burger + 2 Cans',
    price: 1200,
    imageItems: ['chicken-tikka-pizza', 'zinger-burger', 'can-drink', 'can-drink']
  },
  {
    id: 'deal-2',
    title: 'Pizza Deal 2',
    items: '2 Small Pizza + 1 Fries',
    price: 1250,
    imageItems: ['chicken-tikka-pizza', 'chicken-tikka-pizza', 'french-fries-plain']
  },
  {
    id: 'deal-3',
    title: 'Pizza Deal 3',
    items: '1 Large Pizza + 1 Small Pizza + 1 1.5L Bottle',
    price: 2500,
    imageItems: ['chicken-tikka-pizza', 'chicken-tikka-pizza', 'litre-drink']
  },
  {
    id: 'deal-4',
    title: 'Pizza Deal 4',
    items: '1 Small Pizza + 1 Meadam Pizza + 1 Fries',
    price: 2000,
    imageItems: ['chicken-tikka-pizza', 'chicken-tikka-pizza', 'french-fries-plain']
  },
  {
    id: 'deal-5',
    title: 'Deal 5',
    items: '1 Large Pizza + 2 Zinger Burger',
    price: 2700,
    imageItems: ['chicken-tikka-pizza', 'zinger-burger', 'zinger-burger']
  },
  {
    id: 'deal-6',
    title: 'Deal 6',
    items: '1 Large Pizza + 2 Chicken Burger',
    price: 2450,
    imageItems: ['chicken-tikka-pizza', 'chicken-burger', 'chicken-burger']
  },
  {
    id: 'deal-7',
    title: 'Deal 7',
    items: '2 Large Pizza + 1 Fries + 1 1.5L Bottle',
    price: 3800,
    imageItems: ['chicken-tikka-pizza', 'chicken-tikka-pizza', 'french-fries-plain', 'litre-drink']
  },
  {
    id: 'deal-8',
    title: 'Deal 8',
    items: '1 Large Pizza + 1 Medium Pizza + 1 1.5L Bottle',
    price: 3150,
    imageItems: ['chicken-tikka-pizza', 'chicken-tikka-pizza', 'litre-drink']
  },
  {
    id: 'burger-deal-1',
    title: 'Deal 1',
    items: '1 Zinger Burger + 1 Fried Chicken + 1 Fries + 1 Can',
    price: 850,
    imageItems: ['zinger-burger', 'fried-chicken-1pc', 'french-fries-plain', 'can-drink']
  },
  {
    id: 'burger-deal-2',
    title: 'Deal 2',
    items: '1 Zinger Burger + 1 Chicken Burger + 1 Fries + 2 Cans',
    price: 1050,
    imageItems: ['zinger-burger', 'chicken-burger', 'french-fries-plain', 'can-drink', 'can-drink']
  },
  {
    id: 'burger-deal-3',
    title: 'Deal 3',
    items: '2 Zinger Burger + 2 Fried Chicken Pcs + 2 Cans',
    price: 1600,
    imageItems: ['zinger-burger', 'zinger-burger', 'fried-chicken-1pc', 'fried-chicken-1pc', 'can-drink', 'can-drink']
  },
  {
    id: 'burger-deal-4',
    title: 'Deal 4',
    items: '2 Chicken Burger + Crispy Wings + 1 Fries',
    price: 850,
    imageItems: ['chicken-burger', 'chicken-burger', 'crispy-wings-5pcs', 'french-fries-plain']
  },
  {
    id: 'burger-deal-5',
    title: 'Deal 5',
    items: '1 Mega Burger + 1 Crispy Wings + 1 Fries + 1 Can',
    price: 800,
    imageItems: ['mega-burger', 'crispy-wings-5pcs', 'french-fries-plain', 'can-drink']
  },
  {
    id: 'burger-deal-6',
    title: 'Deal 6',
    items: '1 Roll Pratha + 1 Fries + 1 Can',
    price: 550,
    imageItems: ['pratha-roll', 'french-fries-plain', 'can-drink']
  },
  {
    id: 'burger-deal-7',
    title: 'Deal 7',
    items: '1 Jumbo Pratha + 1 Chicken Pcs + 1 Can',
    price: 850,
    imageItems: ['jumbo-pratha', 'fried-chicken-1pc', 'can-drink']
  },
  {
    id: 'burger-deal-8',
    title: 'Deal 8',
    items: '5 Zinger Burger + 2 Fries + 1.5L Bottle',
    price: 2950,
    imageItems: ['zinger-burger', 'zinger-burger', 'zinger-burger', 'zinger-burger', 'zinger-burger', 'french-fries-plain', 'french-fries-plain', 'litre-drink']
  },
  {
    id: 'burger-deal-9',
    title: 'Deal 9',
    items: '4 Zinger Burger + 1 Fries + 1.5L Bottle',
    price: 2350,
    imageItems: ['zinger-burger', 'zinger-burger', 'zinger-burger', 'zinger-burger', 'french-fries-plain', 'litre-drink']
  },
  {
    id: 'burger-deal-10',
    title: 'Deal 10',
    items: '3 Zinger Burger + 3 Fried Chicken + 1.5L Bottle',
    price: 2400,
    imageItems: ['zinger-burger', 'zinger-burger', 'zinger-burger', 'fried-chicken-1pc', 'fried-chicken-1pc', 'fried-chicken-1pc', 'litre-drink']
  },
  {
    id: 'burger-deal-11',
    title: 'Deal 11',
    items: '1 Chicken Burger + 1 Fries + 1 Can',
    price: 550,
    imageItems: ['chicken-burger', 'french-fries-plain', 'can-drink']
  }
]
