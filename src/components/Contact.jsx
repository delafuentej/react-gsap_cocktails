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
    if (!isMobile || videoRef.current) {
      const videoAnimationTl = gsap.timeline({
        scrollTrigger: {
          trigger: "#contact",
          start: "top -10%",
          end: "bottom center",
          scrub: true,
          // markers: true,
          pin: true,
          toggleActions: "restart reverse restart reverse",
        },
      });

      const handleMetadata = () => {
        videoAnimationTl.to(videoRef.current, {
          currentTime: videoRef.current.duration,
        });
      };

      if (videoRef.current.readyState >= 1) {
        videoRef.current.onloadedmetadata = () => {
          handleMetadata();
        };
      } else {
        videoRef.current.onloadedmetadata = handleMetadata;
      }
    }

    const titleSplit = SplitText.create("#contact h2", { type: "words" });

    const startValue = isMobile ? "top 50%" : "top 30%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const generalAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#contact",
        start: startValue,
        end: endValue,
        // markers: true,
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
      .to("#footer-right-leaf", {
        opacity: 1,
        y: -50,
        duration: 1,
        ease: "sine.inOut",
      })
      .to(
        "#footer-left-leaf",
        {
          opacity: 1,
          y: 50,
          duration: 1,
          ease: "sine.inOut",
        },
        "<"
      );

    // contact card

    generalAnimation.to(
      ".contact-card",
      {
        opacity: 1,
        duracion: 1.5,
        stagger: 0.3,
      },
      ">"
    );
  }, []);

  return (
    <footer id="contact" className="ice bg-black">
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
        {isMobile ? (
          <img
            src={images.contact.footerDrinks}
            alt="footer-drink"
            className="drink-img"
          />
        ) : (
          <video
            ref={videoRef}
            src={videos.contact.contactBg}
            preload="auto"
            muted
            playsInline
          />
        )}
      </div>
      <h2>Where to find us</h2>
      <div className="content">
        <div className="contact-card">
          <h3>Visit our Bar</h3>
          <p>742 Dreamcatcher Lane, Mystvale, Eloria 93827</p>
        </div>

        <div className="contact-card">
          <h3>Contact us</h3>
          <p>+999 555 123 7890</p>
          <p>contact@dpcocktails.el</p>
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
          <div className="flex-center gap-5 mt-15">
            {socials.map((social) => (
              <a href={social.url} key={social.name}>
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
