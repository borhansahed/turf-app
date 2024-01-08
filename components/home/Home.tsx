import { Navbar } from "@/components/navbar/Navbar";
import { Banner } from "./Banner";

const Home = () => {
  return (
    <>
      <main className="mt-7 max-w-[1280px] mx-auto">
        {/* Navbar */}
        <section>
          <Navbar />
        </section>

        {/* banner section */}
        <section className="mt-11">
          <Banner />
        </section>
      </main>
    </>
  );
};

export default Home;
