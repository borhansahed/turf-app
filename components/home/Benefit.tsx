import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { CiCircleCheck } from "react-icons/ci";

export const Benefit = () => {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold text-primary uppercase text-center italic tracking-[3px]">
          Benefit
        </h1>
        <p className="text-center text-secondary mt-5">
          Discover the exclusive benefits that await you when you join our
          platform.
        </p>
        <div className="mt-7 w-[70%] mx-auto">
          <CarouselComponent />
        </div>
      </div>
    </>
  );
};
export function CarouselComponent() {
  const benefits = [
    {
      title: "Turf Owner",
      data: [
        "Maximize Visibility",
        "Effortless Management",
        "Boost Revenue",
        "Streamlined Booking Process",
        "Promotional Opportunities",
        "Trust and Credibility",
        "24/7 Customer Support",
      ],
    },
    {
      title: "User",
      data: [
        "Wide Turf Selection",
        "Effortless Booking Process",
        " Transparent Pricing",
        "Instant Confirmation",
        "Flexible Booking Options",
        "24/7 Customer Support",
        "Personalized User Profiles",
        "Exclusive Discounts",
      ],
    },
  ];

  return (
    <Carousel className="transition hover:scale-110">
      <CarouselContent>
        {benefits.map(
          ({ title, data }: { title: string; data: string[] }, index) => (
            <CarouselItem key={index} className="bg-white shadow-sm  basis-1/2">
              <div className="w-full    rounded-lg pt-8 pb-10 px-14">
                <h1 className="text-2xl font-semibold  text-secondary ">
                  {title}
                </h1>
                <div className=" flex flex-col justify-center text-secondary list-none gap-3 mt-10">
                  {data.map((benefit: string) => (
                    <li
                      key={Math.random() * 23}
                      className="flex items-center gap-2"
                    >
                      {" "}
                      <span className="text-primary text-2xl">
                        <CiCircleCheck />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </div>
              </div>
            </CarouselItem>
          )
        )}
      </CarouselContent>
    </Carousel>
  );
}
