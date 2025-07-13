import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { images } from "../utils";
import { cocktailLists, mockTailLists } from "../constants";

const Cocktails = () => {
  useGSAP(() => {
    const section = document.querySelector("#cocktails");

    const parallaxTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#cocktails",
        start: "top 10%",
        end: "bottom bottom",
        toggleActions: "restart reverse restart reverse",
        scrub: true,
        // Cambiar clase cuando entra
        onEnter: () => {
          section.classList.remove("noisy");
          section.classList.add("ice");
        },
        // Cuando sales hacia abajo (dejas la zona)
        onLeave: () => {
          section.classList.remove("ice");
          section.classList.add("noisy");
        },
        // Cuando entras desde abajo hacia arriba (scroll hacia arriba)
        onEnterBack: () => {
          section.classList.remove("noisy");
          section.classList.add("ice");
        },
        // Cuando sales hacia arriba (dejas la zona)
        onLeaveBack: () => {
          section.classList.remove("ice");
          section.classList.add("noisy");
        },
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
