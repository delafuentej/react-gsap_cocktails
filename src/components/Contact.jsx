import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { useMediaQuery } from "react-responsive";
import { images, videos } from "../utils";
import { openingHours, socials } from "../constants";

const Contact = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const videoAnimationTl = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top -30%",
        end: "bottom center",
        scrub: true,
        maarkers: true,
        pin: true,
        toggleActions: "restart reverse restart reverse",
      },
    });

    videoRef.current.onloadedmetadata = () => {
      videoAnimationTl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };

    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const generalAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: "top center",
        toggleActions: "restart reverse restart reverse",
      },
    });
    generalAnimation
      .from(
        titleSplit.words,
        {
          opacity: 0,
          yPercent: 100,
          ease: "power1.inOut",
          stagger: 0.05,
        },
        "=+1"
      )
      .to(["#footer-right-leaf", "#footer-left-leaf"], {
        opacity: 1,
        y: -50,
        duration: 1,
        ease: "sine.inOut",
      });

    // contact card

    generalAnimation.to(
      ".contact-card",
      {
        opacity: 1,
        duracion: 1.5,
        stagger: 0.5,
      },
      ">"
    );
  }, []);

  return (
    <footer id="contact" className="noisy">
      <img
        src={images.contact.leafs.footerRightLeaf}
        alt="footer-right-leaf"
        id="footer-right-leaf"
      />
      <img
        src={images.contact.leafs.footerLeftLeaf}
        alt="footer-left-leaf"
        id="footer-left-leaf"
      />

      <div className="contact-video">
        <video
          ref={videoRef}
          src={videos.contact.contactBg}
          preload="auto"
          muted
          playsInline
        />
      </div>

      {/* <div className="relative   max-w-6xl mx-auto px-6 py-12 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 backdrop-blur bg-black/40 rounded-xl shadow-lg">
        <div>
          <h3 className="text-xl font-semibold mb-2">Visit our Bar</h3>
          <p className="text-sm opacity-90">
            456, Raq Blvd. #404,
            <br />
            Los Angeles, CA 90210
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Contact us</h3>
          <p className="text-sm opacity-90">(555) 987-6543</p>
          <p className="text-sm opacity-90">contact@dandpcocktails.com</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Open every day</h3>
          {openingHours.map((time) => (
            <p key={time.day} className="text-sm opacity-90">
              {time.day}: {time.time}
            </p>
          ))}
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Socials</h3>
          <div className="flex items-center justify-center gap-4">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                className="hover:scale-110 transition-transform duration-300"
              >
                <img src={social.icon} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div> */}

      <h2>Where to find us</h2>

      <div className="content">
        <div className="contact-card">
          <h3>Visit our Bar</h3>
          <p>742 Dreamcatcher Lane, Mystvale, Eloria 93827</p>
        </div>

        <div className="contact-card">
          <h3 className="text-xl font-semibold mb-2">Contact us</h3>
          <p className="text-sm opacity-90">+999 555 123 7890</p>
          <p className="text-sm opacity-90">contact@dandpcocktails.el</p>
        </div>

        <div className="contact-card">
          <h3>Open every day</h3>
          {openingHours.map((time) => (
            <p key={time.day}>
              {time.day}: {time.time}
            </p>
          ))}
        </div>
        <div className="contact-card">
          <h3>Socials</h3>
          <div className="flex-center gap-5 mt-6">
            {socials.map((social) => (
              <a
                href={social.url}
                key={social.name}
                className="hover:scale-120 transition-transform duration-300"
              >
                <img src={social.icon} className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
