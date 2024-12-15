"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { Product, CartItem } from "@/lib/types";
import { toast } from "sonner";

interface CartContextType {
	items: CartItem[];
	addToCart: (product: Product) => void;
	removeFromCart: (productId: number) => void;
	updateQuantity: (productId: number, quantity: number) => void;
	clearCart: () => void;
	totalItems: number;
	totalPrice: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
	const [items, setItems] = useState<CartItem[]>([]);

	useEffect(() => {
		const savedCart = localStorage.getItem("cart");
		if (savedCart) {
			setItems(JSON.parse(savedCart));
		}
	}, []);

	useEffect(() => {
		localStorage.setItem("cart", JSON.stringify(items));
	}, [items]);

	const addToCart = (product: Product) => {
		setItems((currentItems) => {
			const existingItem = currentItems.find(
				(item) => item.id === product.id
			);
			if (existingItem) {
				toast.success("Item quantity updated in cart");
				return currentItems.map((item) =>
					item.id === product.id
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			}
			toast.success("Item added to cart");
			return [...currentItems, { ...product, quantity: 1 }];
		});
	};

	const removeFromCart = (productId: number) => {
		setItems((currentItems) => {
			const item = currentItems.find((item) => item.id === productId);
			if (item) {
				toast.success("Item removed from cart");
			}
			return currentItems.filter((item) => item.id !== productId);
		});
	};

	const updateQuantity = (productId: number, quantity: number) => {
		if (quantity < 1) return;
		setItems((currentItems) => {
			const updatedItems = currentItems.map((item) =>
				item.id === productId ? { ...item, quantity } : item
			);
			toast.success("Cart updated");
			return updatedItems;
		});
	};

	const clearCart = () => {
		setItems([]);
		toast.success("Cart cleared");
	};

	const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
	const totalPrice = items.reduce(
		(sum, item) => sum + item.price * item.quantity,
		0
	);

	return (
		<CartContext.Provider
			value={{
				items,
				addToCart,
				removeFromCart,
				updateQuantity,
				clearCart,
				totalItems,
				totalPrice,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export function useCart() {
	const context = useContext(CartContext);
	if (context === undefined) {
		throw new Error("useCart must be used within a CartProvider");
	}
	return context;
}
