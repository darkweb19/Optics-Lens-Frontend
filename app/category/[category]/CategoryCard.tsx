"use client";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { getCategoryProducts } from "@/lib/data";
import Link from "next/link";

export default function CategoryCard({ category }: { category: string }) {
	const { addToCart } = useCart();
	const products = getCategoryProducts(category);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{products.map((product) => (
				<Card key={product.id} className="overflow-hidden">
					<CardContent className="p-4">
						<Link href={`/product/${product.id}`}>
							<div className="aspect-square relative mb-4">
								<img
									src={product.image}
									alt={product.name}
									className="object-cover w-full h-full rounded-lg"
								/>
							</div>
							<h3 className="font-medium">{product.name}</h3>
							<p className="text-lg font-bold mt-2">
								${product.price}
							</p>
						</Link>
					</CardContent>
					<CardFooter>
						<CardFooter />
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
	);
}
