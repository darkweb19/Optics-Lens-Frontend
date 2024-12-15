'use client';

import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/types';

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  
  return (
    <Button
      size="lg"
      className="w-full"
      onClick={() => addToCart(product)}
    >
      <ShoppingCart className="mr-2 h-5 w-5" />
      Add to Cart
    </Button>
  );
}