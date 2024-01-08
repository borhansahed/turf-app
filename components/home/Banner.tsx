import React from "react";
import { IoFootball, IoSearch } from "react-icons/io5";
import { Button } from "../ui/button";

export const Banner = () => {
  return (
    <>
      <div className="w-full h-[80vh] bg-[url(https://images.unsplash.com/photo-1544914379-806667cd9489?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] rounded-lg ">
        <h1 className="text-white text-5xl text-center font-extrabold pt-32 ">
          <p className="flex justify-center gap-2 mb-5">
            Hey <IoFootball />
          </p>{" "}
          <span className="">Would you like to play in Turf!</span>
        </h1>
        <p className="text-white text-2xl text-center mt-5 font-bold">
          Lets Find Your Turf, Have Fun
        </p>

        <div className="flex justify-center mt-10">
          <Button className="text-lg flex items-center gap-2 w-52 py-6 px-10 border font-bold border-white text-white">
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
