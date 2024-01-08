import React from "react";
import { NavItems } from "@/components/navbar/NavItems";
import { BiSolidCricketBall } from "react-icons/bi";
import { IoFootball } from "react-icons/io5";

export const Navbar = () => {
  return (
    <>
      <section className="flex justify-between items-center text-white">
        {/* Website icons or logo and name */}
        <div className="flex items-center gap-1">
          <p className=" text-3xl group animate-spin">
            <IoFootball />
          </p>
          <h1 className="md:text-3xl font-4xl font-bold   text-white hover:tracking-[3px] tracking-[8px] ">
            Turf App
          </h1>
          <p className=" text-4xl animate-bounce">
            <BiSolidCricketBall />
          </p>
        </div>

        {/* Nav items or routes */}
        <div>
          <NavItems />
        </div>
      </section>
    </>
  );
};
