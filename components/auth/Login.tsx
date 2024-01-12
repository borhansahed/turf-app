"use client";

import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { RxCross1 } from "react-icons/rx";

import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { FormEvent } from "react";

export function Login() {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    alert("Working");
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <p className=" font-medium hover:text-secondary underline">Login</p>
      </AlertDialogTrigger>
      <AlertDialogContent className="py-7 px-12">
        <AlertDialogHeader>
          <AlertDialogCancel className=" border-0 absolute right-2 top-2">
            <span className="text-primary border border-primary p-2 rounded-full">
              <RxCross1 />
            </span>
          </AlertDialogCancel>
          <AlertDialogTitle className="text-primary text-2xl uppercase text-center">
            Login
          </AlertDialogTitle>
          <AlertDialogDescription>
            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              <Input className="outline-primary" placeholder="Email" />
              <Input className="outline-primary" placeholder="Password" />

              <Button className="w-full" type="submit">
                Submit
              </Button>
            </form>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <div className="w-full">
            <p className="text-sm text-center mt-3">
              Don`t have an account?
              <span className="underline text-secondary"> {"    SignUp"}</span>
            </p>
          </div>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
