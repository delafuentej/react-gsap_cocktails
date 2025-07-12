import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { images } from "../utils";
import { cocktailLists, mockTailLists } from "../constants";

const Cocktails = () => {
  useGSAP(() => {
    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 10%",
        end: "bottom 80%",
        toggleActions: "restart reverse restart reverse",
        scrub: true,
      },
    });
    parallaxTl
      .from("#cocktails-left-leaf", {
        x: -100,
        y: 100,
        opacity: 0,
      })

      .from(
        "#cocktails-right-leaf",
        {
          x: 100,
          y: 100,
          opacity: 0,
        },
        "<"
      );
  }, []);
  return (
    <section id="cocktails" className="noisy">
      {/* leafs images */}
      <img
        src={images.cocktails.cocktailLeftLeaf}
        alt="cocktails-left-leaf"
        id="cocktails-left-leaf"
      />
      <img
        src={images.cocktails.cocktailRightLeaf}
        alt="cocktails-right-leaf"
        id="cocktails-right-leaf"
      />
      {/* cocktails list */}
      <div className="list">
        <div className="popular">
          <h2>Most popular cocktails</h2>
          <ul>
            {cocktailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="md:me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="loved">
          <h2>Most popular mocktails</h2>
          <ul>
            {mockTailLists.map(({ name, country, detail, price }) => (
              <li key={name}>
                <div className="me-28">
                  <h3>{name}</h3>
                  <p>
                    {country} | {detail}
                  </p>
                </div>
                <span>- {price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Cocktails;
