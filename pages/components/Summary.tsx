import React, { useEffect, useLayoutEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import SplitType from "split-type";

type Props = {};

export default function Summary({}: Props) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.refresh();
    const summarytextSplit = new SplitType("#summaryText", { types: "words" });
    gsap.to(".word", {
      scrollTrigger: {
        trigger: "#summaryContainer",
        start: "40% 75%",
        end: "center center",
        scrub: true,
        toggleActions: "play none none reverse",
      },
      color: "#EB5E28",
      stagger: 0.1,
      duration: 0.5,
    });
  }, []);

  return (
    <div className="min-h-screen w-screen relative" id="summaryContainer">
      <div className="min-h-full w-full flex items-center justify-center p-4">
        <div className="min-h-[80vh] flex max-w-[90%] min-w-[80%] mx-auto items-start justify-center flex-col">
          <p
            className="leading-normal text-secondary text-[10vw] md:text-[8vw] lg:text-[7vw] xl:text-[6vw] 2xl:text-[6vw]"
            id="summaryText"
          >
            I am a software engineer with an academic background in Actuarial Science. I specialize in building robust and scalable systems and applications and leverage various tech stacks to craft innovative and efficient solutions.
          </p>
        </div>
      </div>
    </div>
  );
}