export const PopularTown = () => {
  return (
    <>
      <div>
        <h1 className="text-center text-4xl uppercase font-bold text-primary tracking-[2px] italic">
          Popular Towns
        </h1>
        <p className="text-center text-secondary mt-6">
          Discover you towns in new way and explore the turfs nearby from you
        </p>

        <div className="flex gap-6 mt-12">
          <TownCard text={"Chattogram"} flag={false} />
          <TownCard text={"Dhaka"} flag={true} />
        </div>
      </div>
    </>
  );
};

import { FaArrowRight } from "react-icons/fa6";

export function TownCard({ text, flag }: { text: string; flag?: boolean }) {
  return (
    <>
      <div
        className={`${
          flag ? "dhaka" : "chattogram"
        } bg-cover w-1/2 h-[60vh] rounded-lg hover:border hover:border-primary transition hover:z-50 hover:scale-110 hover:w-full`}
      >
        <h1 className="text-5xl uppercase text-white font-bold mt-48 ml-14">
          {text}
        </h1>

        <div className="ml-16 mt-3  hover:border-transparent border border-white rounded-full h-14 w-14">
          <p className="text-white text-3xl flex items-center justify-center pt-3">
            <FaArrowRight />
          </p>
        </div>
      </div>
    </>
  );
}
