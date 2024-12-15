export const products = {
  'computer-glasses': [
    {
      id: 101,
      name: 'Blue Light Blocker Pro',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67',
      description: 'Premium computer glasses with advanced blue light filtering technology.',
      features: ['Anti-blue light', 'Anti-glare coating', 'Lightweight frame', 'Scratch-resistant'],
    },
    {
      id: 102,
      name: 'Gaming Glasses Elite',
      price: 169.99,
      image: 'https://images.unsplash.com/photo-1577744486770-020ab432da65',
      description: 'Designed for long gaming sessions with maximum eye protection.',
      features: ['Gaming-optimized tint', 'Ergonomic fit', 'Reduced eye strain', 'Durable build'],
    },
  ],
  'round-glasses': [
    {
      id: 201,
      name: 'Vintage Round Classic',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a',
      description: 'Timeless round frames with a classic vintage appeal.',
      features: ['Metal frame', 'Adjustable nose pads', 'Spring hinges', 'Multiple colors'],
    },
    {
      id: 202,
      name: 'Modern Round Slim',
      price: 139.99,
      image: 'https://images.unsplash.com/photo-1512099053734-e6b8da1938a1',
      description: 'Contemporary take on the classic round design.',
      features: ['Slim profile', 'Lightweight materials', 'Modern colors', 'Comfortable fit'],
    },
  ],
  'sunglasses': [
    {
      id: 301,
      name: 'Aviator Premium',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
      description: 'Classic aviator style with premium materials.',
      features: ['UV protection', 'Polarized lenses', 'Metal frame', 'Case included'],
    },
    {
      id: 302,
      name: 'Wayfarer Sport',
      price: 179.99,
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
      description: 'Sports-inspired wayfarer design for active lifestyles.',
      features: ['Impact resistant', 'Hydrophobic coating', 'Flexible frame', 'Sporty design'],
    },
  ],
  'power-glasses': [
    {
      id: 401,
      name: 'Progressive Elite',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371',
      description: 'High-quality progressive lenses with premium frames.',
      features: ['Progressive lenses', 'Anti-reflective coating', 'Premium materials', 'Precision crafted'],
    },
    {
      id: 402,
      name: 'Single Vision Pro',
      price: 159.99,
      image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0',
      description: 'Professional single vision glasses for daily wear.',
      features: ['Single vision lenses', 'Scratch resistant', 'Comfort fit', 'Multiple styles'],
    },
  ],
  'kids-glasses': [
    {
      id: 501,
      name: 'Kids Sport Flex',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
      description: 'Flexible and durable frames for active kids.',
      features: ['Flexible frame', 'Impact resistant', 'Adjustable fit', 'Fun colors'],
    },
    {
      id: 502,
      name: 'Kids Classic',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1',
      description: 'Classic design adapted for children\'s comfort.',
      features: ['Lightweight', 'Comfortable nose pads', 'Durable hinges', 'Kid-friendly design'],
    },
  ],
};

export function getProductById(id: number) {
  for (const category of Object.values(products)) {
    const product = category.find(p => p.id === id);
    if (product) return product;
  }
  return null;
}

export function getCategoryProducts(category: string) {
  return products[category as keyof typeof products] || [];
}

export const categoryNames = {
  'computer-glasses': 'Computer Glasses',
  'round-glasses': 'Round Glasses',
  'sunglasses': 'Sunglasses',
  'power-glasses': 'Power Glasses',
  'kids-glasses': 'Kids Glasses',
};