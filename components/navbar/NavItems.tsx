import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const NavItems = () => {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      url: "/",
    },
    {
      id: 2,
      name: "Turf List",
      url: "/turf-list",
    },
    {
      id: 3,
      name: "Dashboard",
      url: "/dashboard",
    },
    {
      id: 4,
      name: "Blogs",
      url: "/blogs",
    },
    {
      id: 5,
      name: "About",
      url: "/about",
    },
  ];
  return (
    <>
      <div className="flex items-center gap-14 text-white">
        <div className="flex items-center gap-4">
          {navLinks.map((link: { id: number; name: string; url: string }) => (
            <Link href={link.url} key={link.id}>
              <p className="hover:text-[#86A789]   font-medium">{link.name}</p>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <p className=" font-medium hover:text-secondary underline">Login</p>
          <Button className="border-white border bg-transparent font-medium">
            SignUp
          </Button>
        </div>
      </div>
    </>
  );
};
