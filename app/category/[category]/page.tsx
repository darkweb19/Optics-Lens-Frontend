import { categoryNames } from "@/lib/data";
import CategoryCard from "./CategoryCard";

// Generate static params for all categories
export function generateStaticParams() {
	return Object.keys(categoryNames).map((category) => ({
		category,
	}));
}

export default function CategoryPage({
	params,
}: {
	params: { category: string };
}) {
	const category = params.category;

	return (
		<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
			<h1 className="text-3xl font-bold mb-8">
				{categoryNames[category as keyof typeof categoryNames]}
			</h1>
			<CategoryCard category={category} />
		</div>
	);
}
