import React from "react";

export const HeroSection = () => {
  return (
    <>
      <div className="flex justify-between items-center">
        {/* content of heroSection */}
        <div>
          <h1 className="text-primary text-5xl font-bold">
            Sports Is The Best Way To Recharge Yourself
          </h1>
          <p className="mt-4 text-secondary">
            Sports Lover, Cricket, Football, Team Game
          </p>
          <Button className="mt-7 w-1/3 py-6 text-base font-medium hover:bg-transparent hover:border-primary text-white hover:border hover:text-primary">
            Explore
          </Button>
        </div>

        {/* carousel */}
        <div className="basis-[70%]">
          <CarouselComponent />
        </div>
      </div>
    </>
  );
};

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "../ui/button";

export function CarouselComponent() {
  return (
    <Carousel className="">
      <CarouselContent>
        {Array.from({ length: 3 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="w-full object-cover">
              <Image
                className="w-full h-[60vh]  rounded-lg"
                src={`https://plus.unsplash.com/premium_photo-1682435573900-b55886ec0e0a?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt="turf photo"
                width={500}
                height={100}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
