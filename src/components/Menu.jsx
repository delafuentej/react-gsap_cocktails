import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { allCocktails } from "../constants";
import { images } from "../utils";

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalCocktails = allCocktails.length;
  const goToSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;

    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOffset) => {
    return allCocktails[
      (currentIndex + indexOffset + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  useGSAP(() => {
    gsap.fromTo("#title", { opacity: 0 }, { opacity: 1, duration: 2 });
    gsap.fromTo(
      ".cocktail img",
      { opacity: 0, yPercent: 100 },
      { opacity: 1, yPercent: 0, duration: 1, ease: "back.out(2)" }
    );
    gsap.fromTo(
      [".details h2", ".details p"],
      { yPercent: 100, opacity: 0 },
      { yPercent: 0, opacity: 100, duration: 1, ease: "back.out(2)" }
    );
  }, [currentIndex]);
  return (
    <section id="menu" aria-labelledby="menu-heading">
      {/* leafs images */}
      <img
        src={images.menu.slider.sliderLeftLeaf}
        alt="menu-left-leaf"
        id="menu-left-leaf"
      />
      <img
        src={images.menu.slider.sliderRightLeaf}
        alt="menu-right-leaf"
        id="menu-right-leaf"
      />
      <h2 id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>

      {/* tabs slider */}
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {allCocktails.map((cocktail, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={cocktail.id}
              onClick={() => goToSlide(index)}
              className={`${
                isActive
                  ? "text-white border-white"
                  : "text-white/50 border-white/50"
              }`}
            >
              {cocktail.name}
            </button>
          );
        })}
      </nav>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img
              src={images.menu.arrows.rightArrow}
              alt="slider-right-arrow"
              aria-hidden="true"
            />
          </button>
          <button
            className="text-left"
            onClick={() => goToSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img
              src={images.menu.arrows.leftArrow}
              alt="slider-left-arrow"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="cocktail">
          <img src={currentCocktail.image} className="object-contain" />
        </div>
        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
