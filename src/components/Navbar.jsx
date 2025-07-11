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
        markers: true,
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
    <nav className="nav">
      <div>
        {/* logo */}
        <a href="#home" className="flex items-center gap-2">
          <img src={images.nav.logo} alt="logo" width="40" height="40" />
          <div>Drift & Pour Co.</div>
        </a>
        {/* nav items */}

        <ul>
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
