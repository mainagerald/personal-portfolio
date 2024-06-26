"use client";
import React, { useEffect, useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";



type Props = {};

export default function About({}: Props) {
  const [text] = useTypewriter({
    words: [
      "pump some iron at the local gym",
      "solve a rubik's cube",
      "play fc24",
      "watch Manchester United fumble a game of football",
      'brainstorm entrepreneurial ideas',
      "analyze the stock market",
      "am committing thousands of lines of code saying 'fixed a typo'",
      "am trying to figure out how to make my portfolio website look better",
      "tune into Marquees Brown's channel to catch up on the latest releases",
      ""
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });
  const aboutSection = useRef(null);
  const aboutSectionImage = useRef(null);
  
  return (
    <div
    ref={aboutSection}
      className="relative min-h-screen w-screen"
      id="aboutContainer"
    >
      {/* Section Heading */}
      <div className="flex items-center justify-center">
        <h1
          id="aboutSectionHeading"
          className="text-tertiary font-bold text-[10vw] md:text-[8vw] lg:text-[6vw] xl:text-[5vw]"
        >
          About Me
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between">
        {/* About Section Photo */}
        <div className="w-[100vw] min-h-[50vh] md:w-[95vw] md:min-h-[100vh] px-[5vh] py-[2vh]">
          <Image
            ref={aboutSectionImage}
            src="/assets/images/self.webp.JPG"
            alt="Photo of Flavian"
            width={0}
            height={0}
            sizes="50vw"
            style={{
              width: "100%",
              height: "100%",
              margin: "auto",
              objectFit: "cover",
            }}
            className="rounded-xl shadow-2xl"
          />
        </div>

        {/* About Me */}
        <div
          className="flex items-start w-screen min-h-[50vh]  flex-col md:h-screen md:max-h-[100vh] justify-start p-[5vh] gap-[1rem]"
          id="aboutMe"
        >
          <h2 className=" md:text-[1.7rem] lg:text-[2.2rem] xl:text-[3rem] text-tertiary">
            Get to know me :)
          </h2>
          <p className="leading-relaxed md:text-[1.3rem] lg:text-[1.5rem] ">
            My name is{" "}
            <span className="md:text-[1.3rem] lg:text-[1.5rem] font-medium">
              Flavian Maina Gerald
            </span>
            . I am a creative and passionate software developer who loves to build
            interactive and efficient experiences for applications and systems. I am currently working as DevOps at
            <span className="underline decoration-accent font-medium md:text-[1.3rem] lg:text-[1.5rem] ">
              Equity Group Holdings Ltd.
            </span>
            {/* &nbsp;Go! */}
          </p>
          <p className="leading-relaxed md:text-[1.3rem] lg:text-[1.5rem] ">
            I have always had a knack for solving problems with code, design and optimal implementation.
            My core interest is fullstack development with a backend focus and I am also exploring the exciting world of web3 and blockchain as I look to expand my engineering scope.
          </p>
          <p className="leading-relaxed md:text-[1.3rem] lg:text-[1.5rem] ">
            {" "}
            My career goal is to continue growing and acquiring optimal skills that are in high demand within the industry. I am passionate about connecting with fellow professionals and expanding my network!
            {/* <span className="md:text-[1.3rem] lg:text-[1.5rem]">😉</span> */}
          </p>

          <p className="leading-relaxed md:text-[1.3rem] lg:text-[1.5rem] ">
            The times I&apos;m not worrying about deadlines and tasks, I{" "}
            <span className="text-accent font-medium text-start  md:text-[1.3rem] lg:text-[1.5rem]">
              {text}
              <Cursor cursorBlinking cursorColor="#252422" />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
