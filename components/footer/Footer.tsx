import { IoFootball } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <footer className="py-16">
        {/* text section */}
        <div>
          <h1 className=" flex items-center justify-center gap-3 mb-3 text-3xl font-bold tracking-[5px]">
            <span className="">
              <IoFootball />
            </span>
            Turf App
          </h1>
          <p className="text-sm text-center font-medium tracking-[2px]">
            Providing premier turf booking services for sports enthusiasts.
          </p>
          <p className="text-sm mt-1 font-medium text-center tracking-[2px]">
            Offering elite turf management solutions to elevate your field`s
            performance and appearance.
          </p>
        </div>

        {/* social media icons */}
        <div className="flex items-center justify-center mt-7 gap-6">
          <p className="text-2xl">
            <FaXTwitter />
          </p>
          <p className="text-2xl">
            <FaFacebook />
          </p>
          <p className="text-3xl">
            <FaInstagram />
          </p>
        </div>
        <p className="text-center text-sm mt-7 tracking-[3px] font-medium">
          Copyright &copy;2024 Turf App
        </p>
      </footer>
    </>
  );
};
