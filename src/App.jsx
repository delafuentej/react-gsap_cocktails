import { ScrollTrigger, ScrollSmoother, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Navbar, Hero, Cocktails, About, Art, Menu } from "./components";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);
function App() {
  // useGSAP(() => {
  //   ScrollSmoother.create({
  //     wrapper: "#smooth-wrapper",
  //     content: "#smooth-content",
  //     smooth: 2,
  //     smoothTouch: 0.1,
  //     effects: true,
  //   });
  // }, []);
  return (
    <>
      <main>
        <Navbar />
        {/* <div id="smooth-wrapper">
          <div id="smooth-content"> */}
        <Hero />
        <Cocktails />
        <About />
        <Art />
        <Menu />

        {/*   </div>
        </div> */}
      </main>
      <div className="h-[100vh] bg-[#1d1d1d]" />
    </>
  );
}

export default App;
