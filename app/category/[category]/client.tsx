'use client';

import { Button } from '@/components/ui/button';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Product } from '@/lib/types';

export function AddToCartButton({ product }: { product: Product }) {
  const { addToCart } = useCart();
  
  return (
    <Button
      className="w-full"
      onClick={() => addToCart(product)}
    >
      <ShoppingCart className="mr-2 h-4 w-4" />
      Add to Cart
    </Button>
  );
}