"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Typing from "../../components/Typing";
export default function Home() {
  const zoomImgRef = useRef(null);
  const zoomImg2Ref = useRef(null);

  useEffect(() => {
    AOS.init();
    gsap.registerPlugin(ScrollTrigger);

    if (zoomImgRef.current) {
      gsap.fromTo(
        zoomImgRef.current,
        { scale: 0.9 },
        {
          scale: 2.2,
          scrollTrigger: {
            trigger: zoomImgRef.current,
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );
    }

    if (zoomImg2Ref.current) {
      gsap.fromTo(
        zoomImg2Ref.current,
        { scale: 1 },
        {
          scale: 2.2,
          scrollTrigger: {
            trigger: zoomImg2Ref.current,
            start: "top 50%",
            end: "bottom 50%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div>
      {/* Other sections... */}
      <section>
        <div className="flex justify-center mt-2">
          <Image src="/logo.png" alt="logo" width={400} height={20} />
        </div>
        <div className="flex justify-end  gap-3 m-4">
          <p className="font-play font-[300px] text-[18px] -mt-2">Menu</p>
          <div className="w-[50px] flex flex-col gap-2 ">
            <div data-aos="fade-right">
              <hr className="border border-black" />
            </div>
            <div data-aos="fade-left">
              <hr className="border border-black" />
            </div>
          </div>
        </div>
      </section>
      {/* section2... */}
      <marquee width="full" direction="left" height="" scrollamount="20">
        <div className="flex gap-6 mt-2">
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">
              Affiliate Faculty, University of Hawaii
            </p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">
              Visiting Scholar, MGR J2naki College of Arts and Science, Chennai
            </p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">
              {" "}
              Certified 500hr Yoga instructor
            </p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">Dancer</p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">Teacher</p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">Author</p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">
              Affiliate Faculty, University of Hawaii
            </p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">
              Visiting Scholar, MGR J2naki College of Arts and Science, Chennai
            </p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">
              {" "}
              Certified 500hr Yoga instructor
            </p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">Dancer</p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">Teacher</p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">Author</p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">
              Affiliate Faculty, University of Hawaii
            </p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">
              Visiting Scholar, MGR J2naki College of Arts and Science, Chennai
            </p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">
              {" "}
              Certified 500hr Yoga instructor
            </p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">Dancer</p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">Teacher</p>
          </div>
          <div className="flex gap-4">
            <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <p className="font-play font-[300px] text-[20px]">Author</p>
          </div>
        </div>
      </marquee>
      {/* section3... */}
      <section className="">
        <div className="flex flex-col justify-center mt-6 items-center  ">
          <div className="animate-bounce animate-infinite">
            <div
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              <p className="w-[2px] h-[50px] border border-black"></p>
            </div>
          </div>
          <div className="">
            <Image
              src="/arrow.svg"
              className=""
              alt="arrow"
              width={20}
              height={20}
            />
          </div>
          <div className="flex flex-col items-center justify-center group hover:text-red-600 ">
            <p className="font-play font-[400] text-16px ">SCROLL DOWN</p>
            <div className="hover:animate-shake ">
              <p className="w-[100px] mt-1 border border-black transition-all duration-300 group-hover:w-[150px] hover:border-red-600"></p>
            </div>
          </div>
        </div>
      </section>
      {/* section4... */}
      {/* Section with Zoom-in Scroll Effect */}
      <section className="relative overflow-hidden flex justify-center mt-20">
        <div className="relative w-full max-w-[960px] h-auto">
          <Image
            src="/img1.jfif"
            alt="img"
            width={1300}
            height={390}
            ref={zoomImgRef}
            className="zoom-img"
            style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }}
          />
        </div>
      </section>

      {/* Another Zoom Image */}

      {/* section5... */}
      <section className="mt-20">
        <div className="flex  justify-between gap-5 mt-10 px-20">
          <div className="flex justify-center items-center gap-3 -mt-[240px]">
            <p className="w-3 h-3 rounded-full border border-red-600 bg-red-600 mt-3"></p>
            <div data-aos="fade-left">
              <p className="text-[32px] font-play font-[400] ">Why I dance</p>
            </div>
          </div>
          <div className="flex justify-center flex-col items-start ">
            <div className=" font-play w-[800px] font-medium text-[32px]">
              <Typing />
            </div>

            <div className="flex mt-16 gap-4 ">
              <p className="font-play font-[300] text-[22px] hover:text-red-600">
                EXPLORE
              </p>
              <div className="mt-1">
                <Image
                  src="/rightarrow.svg"
                  alt="arrow"
                  width={30}
                  height={0}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* section6.. */}
      <section className="relative overflow-hidden flex justify-center mt-20">
        <div>
          <div className="relative max-w-[580px] h-auto">
            <Image
              src="/img2.jfif"
              alt="img"
              width={600}
              height={890}
              ref={zoomImg2Ref}
              className="zoom-img2"
              style={{ maxWidth: "80%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
