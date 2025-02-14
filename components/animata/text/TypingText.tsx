// "use client";
// import { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// export default function TypingText() {
//   const textRef = useRef(null);
//   const typingTextRef = useRef(null);
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     const textElem = textRef.current as HTMLElement | null;
//     const typingElem = typingTextRef.current as HTMLElement | null;

//     if (textElem) {
//       gsap.to(typingElem, {
//         text: {
//           value: textElem.innerText, // Fetch text dynamically
//         },
//         scrollTrigger: {
//           trigger: ".section-typing_text",
//           pin: ".typing_text-heading",
//           start: "center center",
//           end: "center top",
//           scrub: true,
//         },
//       });
//     }
//   }, []);

//   return (
//     <>
//       <section className="section-typing_text">
//         <h2 ref={textRef} className="text"></h2>
//         <h2 className="typing_text-heading">
//           <span ref={typingTextRef} className="typing_text"></span>
//           <span ref={cursorRef} className="cursor"></span>
//         </h2>
//       </section>
//     </>
//   );
// }
