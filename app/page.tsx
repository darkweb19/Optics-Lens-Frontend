import HeroCarousel from "@/components/HeroCarousel";
import Achievements from "@/components/Achievements";
import Categories from "@/components/Categories";
import FeaturedProducts from "@/components/FeaturedProducts";
import { Testimonials } from "@/components/ui/testimonials";

export default function Home() {
	return (
		<main className="min-h-screen">
			<HeroCarousel />
			<Achievements />
			<Categories />
			<FeaturedProducts />
			<Testimonials />
		</main>
	);
}
