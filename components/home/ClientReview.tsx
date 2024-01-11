import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
const reviews = [
  {
    client_name: "Mike Tyson",
    review: "This is awesome platform to manage turfs. It is great experience",
    turf: "Sports Turf",
    role: "Owner",
  },
  {
    client_name: "Mike Tyson",
    review: "This is awesome platform to manage turfs. It is great experience",
    turf: "Sports Turf",
    role: "Owner",
  },
  {
    client_name: "Donald Trump",
    review:
      "This is awesome platform to find good turfs. It is great experience",
    turf: "Sports Turf",
    role: "User",
  },
  {
    client_name: "Donald Trump",
    review:
      "This is awesome platform to find good turfs. It is great experience",
    turf: "Sports Turf",
    role: "User",
  },
  {
    client_name: "Donald Trump",
    review:
      "This is awesome platform to find good turfs. It is great experience",
    turf: "Sports Turf",
    role: "User",
  },
  {
    client_name: "Donald Trump",
    review:
      "This is awesome platform to find good turfs. It is great experience. I will come again. Also i will tell every one the come here and enjoy there weekend as well. I am proud of you.",
    turf: "Sports Turf",
    role: "User",
  },
];
export const ClientReview = () => {
  return (
    <>
      <div>
        <h1 className="text-center uppercase text-primary italic text-4xl font-bold tracking-[3px]">
          Our Clients
        </h1>

        <div className="mt-7">
          <CarouselSize />
        </div>
      </div>
    </>
  );
};

export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {reviews.map((review, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="transition hover:scale-90">
                <CardContent className="flex flex-col  items-center justify-center h-72  p-4  ">
                  <p className="w-full text-justify text-sm text-primary">
                    {review.review.slice(0, 200)}
                  </p>

                  <div className="mt-7 w-20 h-20 rounded-full border border-primary">
                    <Image
                      className="w-full h-full rounded-full object-cover"
                      src={
                        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1lbnxlbnwwfHwwfHx8MA%3D%3D"
                      }
                      width={200}
                      height={200}
                      alt={review.client_name}
                    />
                  </div>
                  <p className="mt-2 text-primary font-medium">
                    {review.client_name}
                  </p>

                  <p className=" text-sm text-secondary">
                    {review.role === "Owner" && review.turf + ", "}
                    {review.role}
                  </p>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
