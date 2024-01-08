import React from "react";
import { IoFootball, IoSearch } from "react-icons/io5";
import { Button } from "../ui/button";

export const Banner = () => {
  return (
    <>
      <div className=" ">
        <h1 className="text-white text-5xl text-center font-extrabold pt-32 ">
          <p className="flex justify-center gap-2 mb-5 tracking-[8px]">
            #1 TURF SPORTS MANAGEMENT &
          </p>{" "}
          <span className="tracking-[6px]">BOOKING PLATFORM IN BANGLADESH</span>
        </h1>
        <p className="text-white text-2xl text-center mt-5 font-bold tracking-[4px]">
          Let`s Find Your Turf, Have Fun
        </p>

        <div className="flex justify-center mt-10">
          <Button className="text-lg bg-transparent flex items-center gap-2  py-6 px-8 border font-bold border-white text-white">
            <span className="text-white text-2xl animate-pulse">
              <IoSearch />
            </span>{" "}
            Find Your Turf
          </Button>
        </div>
      </div>
    </>
  );
};
