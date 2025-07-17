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

    // gsap.to([".first-part", ".second-part"], {
    //   duration: 2,
    //   ease: "sine.inOut",
    //   stagger: 1,
    //   backgroundColor: gsap.utils.wrap([
    //     // "#50C878",
    //     "#00CFFF",
    //     // "#50C878",
    //     // "#FF2DAE",
    //     "#A100FF",
    //   ]),
    // });

    const animationLeafs = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top top",
        end: "bottom top",
        toggleActions: "restart reverse restart reverse",
        scrub: true,
      },
    });

    animationLeafs
      .to(".right-leaf", { yPercent: 192 }, 0)
      .to(".left-leaf", { yPercent: -100 }, 0);

    const animationMsgText = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top 1%", // puedes ajustar esto si lo necesitas
        toggleActions: "play reset complete reverse",
      },
    });

    animationMsgText.to(".msg-text-scroll", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      ease: "circ.inOut",
    });

    // animation video:
    const startValue = isMobile ? "top 30%" : "top 0";
    const endValue = isMobile ? "bottom top" : "bottom top";

    const animationVideo = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        marker: true,
        scrub: true,
        pin: true,
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
        <h1 className="col-center title">
          <div className="first-part">Drift</div>
          {/* <span className="font-anton text-sm">&</span> */}
          <div className="msg-text-scroll mask-clip-path w-1/12 ">
            <div className=" md:px-5 px-5">
              <div className="font-anton">&</div>
            </div>
          </div>
          <div className="second-part">Pour</div>
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
      <div className="video">
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
