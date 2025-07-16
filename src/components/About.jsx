import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { images } from "../utils";
import { profileLists } from "../constants";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", { type: "words" });
    const paragraphSplit = SplitText.create("#content-right", {
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
        ".img-grid div",

        {
          opacity: 0,
          duration: 1,
          ease: "back.inOut",
          stagger: 0.2,
        },
        "-=1"
      );

    const iceElements = gsap.utils.toArray(".ice");
    gsap.from(iceElements, {
      duration: 5,
      ease: "expo.inOut",
      stagger: 0.05,
      repeat: -1,
      yoyo: true,
      backgroundColor: gsap.utils.wrap([
        "#00CFFF",
        "#50C878",
        "#FF2DAE",
        "#A100FF",
      ]),
    });
  }, []);
  return (
    <section
      id="about"
      className="min-h-screen py-28 px-5 2xl:px-0 container mx-auto w-full"
    >
      <div className="flex flex-col md:flex-row justify-between w-full gap-10 mb-15">
        {/* content */}
        <div className="flex flex-col justify-between w-full md:w-1/2">
          <p className="inline-block rounded-full bg-white text-black px-4 py-2 text-sm font-medium mb-8 w-3/12 text-center">
            Best Cocktails
          </p>
          <h2 className="text-5xl md:text-6xl font-modern-negra max-w-lg">
            Where every detail matters <span className="text-white"> - </span>
            from muddle to garnish
          </h2>
        </div>

        {/* Columna derecha: texto y reviews */}
        <div
          id="content-right"
          className="flex flex-col justify-between w-full md:w-1/2 gap-4"
        >
          <div>
            Every cocktail we serve is a testament to our unwavering devotion to
            detail — from the very first pour to the final garnish. It is this
            meticulous care that transforms a simple drink into an unforgettable
            experience.
          </div>

          <div className="flex gap-6 items-center w-full bg-gray-900 rounded-4xl px-2 py-2">
            {/* Columna izquierda: estrellas y puntuación */}
            <div className="p-4 rounded-xl w-1/2">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>⭐</span>
                ))}
              </div>
              <div className="text-2xl font-bold">
                <span className="text-yellow-100 text-3xl">4.7</span> / 5
              </div>
              <div className="text-sm">More than 20.000 customers</div>
            </div>

            <div className="w-px h-20 bg-gray-300" />

            {/* Columna derecha: avatares */}
            <div className=" p-4 rounded-xl flex gap-2 w-1/2 flex-center">
              {profileLists.map((profile, index) => (
                <img
                  key={index}
                  src={profile.imgPath}
                  alt={`profile-${index}`}
                  className="w-10 h-10 object-cover rounded-full"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* grid images */}
      <div className="img-grid">
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src={images.about.about1} alt="grid-img1" />
        </div>
        <div className="md:col-span-6">
          <div className="ice" />
          <img src={images.about.about2} alt="grid-img2" />
        </div>
        <div className="md:col-span-3">
          <div className="noisy" />
          <img src={images.about.about5} alt="grid-img5" />
        </div>
      </div>

      <div className="img-grid">
        <div className="md:col-span-2">
          <div className="ice" />
          <img src={images.about.about6} alt="grid-img1" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <img src={images.about.about8} alt="grid-img2" />
        </div>
        <div className="md:col-span-2">
          <div className="ice" />
          <img src={images.about.about7} alt="grid-img5" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <img src={images.about.about9} alt="grid-img5" />
        </div>
      </div>

      <div className="img-grid">
        <div className="md:col-span-4">
          <div className="noisy" />
          <img src={images.about.about12} alt="grid-img1" />
        </div>
        <div className="md:col-span-2">
          <div className="ice" />
          <img src={images.about.about10} alt="grid-img2" />
        </div>
        <div className="md:col-span-4">
          <div className="noisy" />
          <img src={images.about.about11} alt="grid-img5" />
        </div>
        <div className="md:col-span-2">
          <div className="ice" />
          <img src={images.about.about13} alt="grid-img5" />
        </div>
      </div>

      <div className="img-grid">
        <div className="md:col-span-8">
          <div className="noisy" />
          <img src={images.about.about3} alt="grid-img3" />
        </div>
        <div className="md:col-span-4">
          <div className="ice" />
          <img src={images.about.about4} alt="grid-img4" />
        </div>
      </div>
    </section>
  );
};

export default About;
