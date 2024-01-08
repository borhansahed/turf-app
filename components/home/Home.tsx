import { Navbar } from "@/components/navbar/Navbar";
import { Banner } from "./Banner";
import { HeroSection } from "./HeroSection";

const Home = () => {
  return (
    <>
      <main className=" mx-auto">
        {/* navbar with banner */}
        <div className="h-[100vh] bg-[url(https://images.unsplash.com/photo-1544914379-806667cd9489?q=80&w=2831&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] px-10">
          {/* Navbar */}
          <section className="pt-6">
            <Navbar />
          </section>

          {/* banner section */}
          <section className="mt-11">
            <Banner />
          </section>
        </div>

        <div className="max-w-[1280px] mx-auto">
          <section className="mt-20">
            <HeroSection />
          </section>
        </div>
        {/* Hero section */}
      </main>
    </>
  );
};

export default Home;
