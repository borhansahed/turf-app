import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export const NavItems = () => {
  const navLinks = [
    {
      id: 1,
      name: "Home",
      url: "",
    },
    {
      id: 2,
      name: "Turfs",
      url: "",
    },
    {
      id: 3,
      name: "Dashboard",
      url: "",
    },
    {
      id: 4,
      name: "Blogs",
      url: "",
    },
    {
      id: 5,
      name: "About",
      url: "",
    },
  ];
  return (
    <>
      <div className="flex items-center gap-6">
        {navLinks.map((link: { id: number; name: string; url: string }) => (
          <Link href={link.url} key={link.id}>
            <p className="hover:text-[#86A789]  text-primary font-medium">
              {link.name}
            </p>
          </Link>
        ))}

        <div className="flex items-center gap-3">
          <p className="text-primary hover:text-secondary underline">Login</p>
          <Button variant={"outline"} className="border-primary">
            SignUp
          </Button>
        </div>
      </div>
    </>
  );
};
