import { Navbar } from "@/components/navbar/Navbar";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <>
      <main className="mt-7 max-w-[1280px] mx-auto">
        {/* Navbar */}
        <section>
          <Navbar />
        </section>
      </main>
    </>
  );
};

export default Home;
