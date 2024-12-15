import { getProductById } from '@/lib/data';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check } from 'lucide-react';
import Link from 'next/link';
import { AddToCartButton } from './client';
import { products } from '@/lib/data';

// Generate static params for all products
export function generateStaticParams() {
  const allProducts = Object.values(products).flat();
  return allProducts.map((product) => ({
    id: product.id.toString(),
  }));
}

export default function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const productId = parseInt(params.id);
  const product = getProductById(productId);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold">Product not found</h1>
        <Link href="/">
          <Button className="mt-4">Return to Home</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Card className="p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto rounded-lg"
            />
          </Card>
        </div>
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold mb-4">${product.price}</p>
          <p className="text-muted-foreground mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Key Features</h2>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}