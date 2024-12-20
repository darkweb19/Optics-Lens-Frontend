import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
	{
		name: "Sarah Johnson",
		role: "Fashion Blogger",
		content:
			"The quality of glasses from OpticStyle is outstanding. Their customer service is exceptional!",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=250",
		rating: 5,
	},
	{
		name: "Michael Chen",
		role: "Software Engineer",
		content:
			"Found my perfect pair of computer glasses here. Great blue light filtering and stylish design.",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=250",
		rating: 5,
	},
	{
		name: "Emily Rodriguez",
		role: "Architect",
		content:
			"Amazing selection of designer frames. The virtual try-on feature made choosing so much easier.",
		avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=250",
		rating: 5,
	},
];

export function Testimonials() {
	return (
		<section className="py-8 md:py-12">
			<div className="flex flex-col items-center gap-4 text-center">
				<h2 className="text-3xl font-bold">What Our Customers Say</h2>
				<p className="text-muted-foreground">
					Don't just take our word for it - hear from our satisfied
					customers
				</p>
			</div>
			<div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3">
				{testimonials.map((testimonial) => (
					<Card key={testimonial.name}>
						<CardContent className="p-6">
							<div className="flex items-center gap-4 mb-4">
								<div className="relative h-12 w-12 rounded-full overflow-hidden">
									<Image
										src={testimonial.avatar}
										alt={testimonial.name}
										fill
										className="object-cover"
									/>
								</div>
								<div>
									<h4 className="font-semibold">
										{testimonial.name}
									</h4>
									<p className="text-sm text-muted-foreground">
										{testimonial.role}
									</p>
								</div>
							</div>
							<div className="flex mb-4">
								{[...Array(testimonial.rating)].map((_, i) => (
									<Star
										key={i}
										className="h-4 w-4 fill-primary text-primary"
									/>
								))}
							</div>
							<p className="text-muted-foreground">
								{testimonial.content}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</section>
	);
}
