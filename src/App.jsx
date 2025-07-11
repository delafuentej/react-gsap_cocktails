import { ScrollTrigger, ScrollSmoother, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Navbar, Hero } from "./components";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);
function App() {
  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     smooth: 1,
  //     effects: true,
  //   });
  // });
  return (
    <>
      <main className="flex-center h-[100vh]">
        <Navbar />
        <Hero />
      </main>
      <div className="h-dvh bg-black" />
    </>
  );
}

export default App;
