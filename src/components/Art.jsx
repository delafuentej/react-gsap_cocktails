import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { goodLists, featureLists } from "../constants";
import { images, videos } from "../utils";

const Art = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const start = isMobile ? "top top" : "top top";

    const maskTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#art",
        start: start,
        end: "bottom center",
        toggleActions: "restart reverse restart reverse",
        scrub: 1.5,
        pin: true,
      },
    });
    maskTl
      .to(".will-fade", {
        opacity: 0,
        stagger: 1,
        ease: "power1.inOut",
      })
      .to(".masked-video", {
        scale: 1,
        maskPosition: "center",
        maskSize: "800%",
        duration: 5,
        ease: "power1.inOut",
      })
      .to("#masked-content", {
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      });
  }, []);

  return (
    <section id="art">
      <div className="container mx-aut h-full pt-20">
        <h2 className="will-fade">The ART</h2>
        <div className="content">
          <ul className="space-y-4 will-fade col-center mt-20">
            {goodLists.map((item, index) => (
              <li
                key={index}
                className="flex items-center  justify-start gap-2"
              >
                <img src={images.art.check} alt="check" />
                <p className="md:w-fit w-60">{item}</p>
              </li>
            ))}
          </ul>

          <div className="cocktail-video">
            <video
              className="abs-center masked-video size-full object-contain"
              src={videos.art.art2}
              ref={videoRef}
              //   preload="auto"
              muted
              playsInline
              autoPlay
              loop
            />
          </div>

          <ul className="space-y-4 will-fade col-center">
            {featureLists.map((item, index) => (
              <li
                key={index}
                className="flex items-center  justify-start gap-2"
              >
                <img src={images.art.check} alt="check" />
                <p className="md:w-fit w-60">{item}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="masked-container">
          <h2 className="will-fade">Where Sophistication Meets Flavor</h2>
          <div id="masked-content">
            <h3>Made with Craft, Poured with Passion</h3>
            <p>More than a drink — it’s an experience tailored to your taste</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Art;
