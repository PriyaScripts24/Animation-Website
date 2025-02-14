"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

export default function AnimatedText() {
  const typewriterRef = useRef(null);
  const splitTextRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(TextPlugin);

    // Typewriter effect
    gsap.to(typewriterRef.current, {
      text: "",
      duration: 20,
      ease: "power1.in",
    });

    // Manually splitting text into spans
    const textElement = splitTextRef.current;
    const letters = textElement.innerText
      .split("")
      .map((char, i) => {
        return `<span style="opacity: 0">${char}</span>`;
      })
      .join("");

    textElement.innerHTML = letters;

    gsap.to(textElement.children, {
      opacity: 1,
      stagger: 0.05,
    });
  }, []);

  return (
    <div className="wrapper">
      <p ref={typewriterRef} className="typewriter"></p>
      <p ref={splitTextRef} className="split-text">
        I am a seeker of the knowledge and wisdom underpinning Indian dance
        traditions. In weaving its spoken and unspoken elements I am empowered
        to render universal significance to my poetic experience. Hence, I
        dance.
      </p>
    </div>
  );
}
