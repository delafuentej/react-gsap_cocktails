import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useMediaQuery } from "react-responsive";
import { images, videos } from "../utils";

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 768 });
  useGSAP(() => {
    gsap.set([".right-leaf", ".left-leaf"], {
      opacity: 0.75,
    });
    const titleSplit = new SplitText(".title", { type: "chars" });

    const subtitleSplit = new SplitText(".subtitle", { type: "lines" });

    titleSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    const animationTitles = gsap.timeline();

    animationTitles
      .from(titleSplit.chars, {
        opacity: 0,
        y: 50,
        ease: "back(3)",
        stagger: 0.05,
      })
      .from(
        subtitleSplit.lines,
        {
          opacity: 0,
          yPercent: 100,
          duration: 2,
          ease: "expo.out",
          stagger: 0.05,
        },
        ">"
      );

    const animationLeafs = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    animationLeafs
      .to(".right-leaf", { y: 300 }, 0)
      .to(".left-leaf", { y: -300 }, 0);

    // animation video:
    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const animationVideo = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
        // onEnter: () => videoRef.current.play(),
        // onEnterBack: () => videoRef.current.play(),
        // onLeave: () => videoRef.current.pause(),
        // onLeaveBack: () => videoRef.current.pause(),
      },
    });

    videoRef.current.onloadedmetadata = () => {
      animationVideo.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
      {/* titles + paragraht + leafs */}
      <section id="hero" className="noisy">
        <h1 className="title">
          Drift <span className="font-anton">&</span> Pour
        </h1>
        <img
          src={images.hero.heroLeftLeaf}
          alt="hero-left-leaf"
          className="left-leaf"
        />
        <img
          src={images.hero.heroRightLeaf}
          alt="hero-left-leaf"
          className="right-leaf"
        />
        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Chic. Exotic. Luxurious</p>
              <p className="subtitle">Let summer dance on your tongue</p>
            </div>
            <div className="view-cocktails">
              <p className="subtitle">
                Each cocktail on our menu is a harmonious fusion of premium
                ingredients, artistic creativity, and timeless recipes — crafted
                to captivate your senses.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>

      {/* video */}
      <div className="video absolute inset-0">
        <video
          src={videos.hero.heroInput}
          ref={videoRef}
          preload="auto"
          muted
          playsInline
          //   autoPlay
          //   loop
        />
      </div>
    </>
  );
};

export default Hero;
