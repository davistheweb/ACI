import React from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { worship1, worship2, worship3 } from "@/assets";

export const Hero: React.FC = () => {
  const images = [worship1, worship2, worship3];
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const totalSlides = images.length;

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, [totalSlides]);

  return (
    <section className="relative h-[90vh] sm:h-[95vh] flex items-center justify-center overflow-hidden">
      {/* Background Carousel */}
      <Carousel className="w-full h-full" opts={{ align: "start" }}>
        <CarouselContent
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
            transition: "transform 0.8s ease-in-out",
          }}
        >
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="relative w-full h-[90vh] sm:h-[95vh]"
            >
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero" />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious
          onClick={() =>
            setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
          }
          className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
        />
        <CarouselNext
          onClick={() => setCurrentIndex((prev) => (prev + 1) % totalSlides)}
          className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30"
        />
      </Carousel>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Welcome to
          <span className="block text-church-gold">
            Apostolic Congress International
          </span>
        </h1>

        <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-light tracking-wide opacity-90">
          Discipling the Nations
        </p>

        <Link to="/contact">
          <Button
            // variant="hero"
            size="lg"
            className="text-lg px-8 py-4 h-auto hover:scale-105 transition-transform duration-200"
          >
            Contact Us Today
          </Button>
        </Link>
      </div>
    </section>
  );
};
