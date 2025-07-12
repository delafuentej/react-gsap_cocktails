import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

import { images } from "../utils";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });
    const paragraphSplit = SplitText.create(".sub-content p", {
      type: "lines",
    });

    const scrollTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
        toggleActions: "restart reverse restart reverse",
      },
    });
    scrollTl
      .from(titleSplit.words, {
        opacity: 0,
        y: 50,
        ease: "back(1)",
        stagger: 0.05,
      })
      .from(
        paragraphSplit.lines,
        {
          opacity: 0,
          yPercent: 100,
          duration: 2,
          ease: "expo.out",
          stagger: 0.05,
        },
        "<"
      )
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.05,
        },
        "-=1"
      );
  }, []);
  return (
    <section id="about">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white"> - </span>
              from muddle to garnish
            </h2>
          </div>

          <div className="sub-content">
            <p>
              Every cocktail we serve is a testament to our unwavering devotion
              to detail — from the very first pour to the final garnish. It is
              this meticulous care that transforms a simple drink into an
              unforgettable experience.
            </p>
            <div>
              <p className="md:text-3xl text-xl font-bold">
                <span>4.7</span>/ 5
              </p>
              <p className="text-sm text-white-100">
                More than 20.000 customers
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src={images.about.about1} alt="grid-img1" />
        </div>
        <div className="md:col-span-6">
          <div className="noisy" />
          <img src={images.about.about2} alt="grid-img2" />
        </div>
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src={images.about.about5} alt="grid-img5" />
        </div>
      </div>
      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src={images.about.about3} alt="grid-img3" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <img src={images.about.about4} alt="grid-img4" />
        </div>
      </div>
    </section>
  );
};

export default About;
