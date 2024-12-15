'use client';

import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371',
    title: 'Premium Eyewear Collection',
    description: 'Discover our latest collection of designer frames',
  },
  {
    image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0',
    title: 'Sunglasses Season',
    description: 'Protect your eyes in style',
  },
  {
    image: 'https://images.unsplash.com/photo-1577803645773-f96470509666',
    title: 'Computer Glasses',
    description: 'Reduce eye strain with blue light protection',
  },
];

export default function HeroCarousel() {
  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <Card className="relative h-[400px] overflow-hidden">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center px-10 text-white">
                  <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                  <p className="text-xl">{slide.description}</p>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}