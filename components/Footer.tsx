import Link from "next/link";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";

export default function Footer() {
	return (
		<footer className="bg-secondary mt-16">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div>
						<h3 className="text-lg font-semibold mb-4">About Us</h3>
						<p className="text-muted-foreground">
							Premium eyewear for everyone. Quality glasses and
							sunglasses with perfect vision guaranteed.
						</p>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">
							Quick Links
						</h3>
						<ul className="space-y-2">
							<li>
								<Link href="/track-order">Track Order</Link>
							</li>
							<li>
								<Link href="/shipping">Shipping Policy</Link>
							</li>
							<li>
								<Link href="/returns">Returns</Link>
							</li>
							<li>
								<Link href="/faq">FAQs</Link>
							</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">Contact</h3>
						<ul className="space-y-2 text-muted-foreground">
							<li>1 Falaise Road</li>
							<li>Scarborough, M1E 0B9</li>
							<li>Phone: (416) 232-1280</li>
							<li>Email: sujan@shrestha.com</li>
						</ul>
					</div>
					<div>
						<h3 className="text-lg font-semibold mb-4">
							Follow Us
						</h3>
						<div className="flex space-x-4">
							<Link href="#" className="hover:text-primary">
								<Facebook className="h-6 w-6" />
							</Link>
							<Link href="#" className="hover:text-primary">
								<Twitter className="h-6 w-6" />
							</Link>
							<Link href="#" className="hover:text-primary">
								<Instagram className="h-6 w-6" />
							</Link>
							<Link href="#" className="hover:text-primary">
								<Mail className="h-6 w-6" />
							</Link>
						</div>
					</div>
				</div>
				<div className="border-t mt-8 pt-8 text-center text-muted-foreground">
					<p>© 2024 OpticLens. All rights reserved.</p>
				</div>
			</div>
		</footer>
	);
}
