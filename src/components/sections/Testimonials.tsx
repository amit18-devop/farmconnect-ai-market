
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    id: "1",
    name: "James Wilson",
    role: "Organic Farmer",
    image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=100&auto=format&fit=crop",
    quote: "FarmConnect transformed my business. I'm earning 30% more by selling directly to buyers without the traditional middlemen taking most of my profits.",
    location: "Green Valley"
  },
  {
    id: "2",
    name: "Sarah Johnson",
    role: "Restaurant Owner",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=100&auto=format&fit=crop",
    quote: "As a restaurant owner, I need consistent quality and freshness. FarmConnect connects me directly with local farms, ensuring my ingredients are always at their peak.",
    location: "Riverside"
  },
  {
    id: "3",
    name: "Michael Chang",
    role: "Retail Buyer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    quote: "The AI price recommendation feature helps me make informed purchasing decisions. I can confidently negotiate knowing I'm offering fair market value.",
    location: "Springfield"
  },
  {
    id: "4",
    name: "Elena Rodriguez",
    role: "Small-Scale Farmer",
    image: "https://images.unsplash.com/photo-1628260412297-a3377e45006f?q=80&w=100&auto=format&fit=crop",
    quote: "Before FarmConnect, I struggled to find buyers for my specialty crops. Now I have a direct channel to customers who appreciate quality and are willing to pay for it.",
    location: "Sunny Meadows"
  },
  {
    id: "5",
    name: "Robert Thompson",
    role: "Consumer",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=100&auto=format&fit=crop",
    quote: "I love knowing exactly where my food comes from. Being able to chat directly with farmers gives me confidence in the quality and growing methods.",
    location: "Hillside"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from farmers and buyers who have transformed their agricultural business
            with our platform.
          </p>
        </div>
        
        <Carousel
          className="max-w-4xl mx-auto"
          opts={{
            align: "center",
            loop: true,
          }}
          onSelect={(api) => {
            // Extract the index from the API object instead of using the event directly
            const currentIndex = api.selectedScrollSnap();
            setActiveIndex(currentIndex);
          }}
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={testimonial.id}>
                <Card className="border-0 shadow-none">
                  <CardContent className="p-6 text-center">
                    <QuoteIcon className="h-8 w-8 mx-auto mb-4 text-farm-400" />
                    <blockquote className="text-xl mb-6 font-medium text-muted-foreground italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <Avatar className="h-16 w-16 mx-auto mb-3">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                    
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}, {testimonial.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all ${
                  activeIndex === index ? "w-8 bg-farm-600" : "w-2.5 bg-farm-200"
                }`}
                onClick={() => setActiveIndex(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="hidden md:flex">
            <CarouselPrevious className="relative -left-12" />
            <CarouselNext className="relative -right-12" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
