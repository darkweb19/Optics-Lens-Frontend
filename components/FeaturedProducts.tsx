'use client';

import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/types';

const products: Product[] = [
  {
    id: 1,
    name: 'Classic Round Metal',
    price: 129.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f',
  },
  {
    id: 2,
    name: 'Blue Light Blocker',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67',
  },
  {
    id: 3,
    name: 'Premium Sunglasses',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
  },
  {
    id: 4,
    name: 'Kids Sport Frame',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
  },
];

export default function FeaturedProducts() {
  const { addToCart } = useCart();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardContent className="p-4">
                <div className="aspect-square relative mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-full h-full rounded-lg"
                  />
                </div>
                <h3 className="font-medium">{product.name}</h3>
                <p className="text-lg font-bold mt-2">${product.price}</p>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}