import { Hero } from "@/src/components/hero";
import { NavBar } from "@/src/components/navbar";
// import { Meet } from "@/components/meet";
import { Features } from "@/src/components/features";
import { About } from "@/src/components/about";
import { Tokenomics } from "@/src/components/tokenomics";
// import { Testimoni } from "@/components/testimoni";
import { Roadmaps } from "@/src/components/Roadmaps";
import { Footer } from "@/src/components/footer";
import { mokoto } from "../utils/font";

export default function Home() {
  return (
    <div className={`relative ${mokoto.className}`}>
      <NavBar />
      <Hero />
      {/* <Meet /> */}
      <Features />
      <About />
      <Tokenomics />
      {/* <Testimoni /> */}
      <Roadmaps />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
