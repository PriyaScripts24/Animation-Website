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
        People drink tea for its health benefits, gentle caffeine boost, and
        relaxation. It is a part of many cultures, from Chinese ceremonies to
        British afternoon tea. With endless flavors, tea is enjoyed for both
        comfort and taste. 🍵
      </p>
    </div>
  );
}
