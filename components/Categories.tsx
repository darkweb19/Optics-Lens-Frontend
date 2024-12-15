import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    title: 'Computer Glasses',
    image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67',
    href: '/category/computer-glasses',
  },
  {
    title: 'Round Glasses',
    image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a',
    href: '/category/round-glasses',
  },
  {
    title: 'Sunglasses',
    image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083',
    href: '/category/sunglasses',
  },
  {
    title: 'Power Glasses',
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371',
    href: '/category/power-glasses',
  },
  {
    title: 'Kids Glasses',
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a',
    href: '/category/kids-glasses',
  },
];

export default function Categories() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((category, index) => (
            <Link key={index} href={category.href}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-4">
                  <div className="aspect-square relative mb-4 rounded-lg overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-center font-medium">{category.title}</h3>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}