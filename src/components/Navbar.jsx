import { navLinks } from "../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { images } from "../utils";

const Navbar = () => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        // markers: true,
      },
    });
    tl.fromTo(
      "nav",
      {
        backgroundColor: "transparent",
      },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inOut",
      }
    );
  }, []);
  return (
    <nav>
      <div>
        {/* logo */}
        <div className="text-3xl md:text-3xl xl:text-[5000px]">
          <a href="#home" className="flex items-center gap-2">
            <img src={images.nav.logo} alt="logo" width="40" height="40" />
            Drift<span className="font-anton">&</span>Pour
          </a>
        </div>
        {/* nav items */}

        <ul className="text-3xl md:text-3xl  xl:text-3xl">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
