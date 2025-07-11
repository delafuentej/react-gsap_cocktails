import { ScrollTrigger, ScrollSmoother, SplitText } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger, SplitText);
function App() {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });
  return <main className="flex-center h-[100vh]:">Init</main>;
}

export default App;
