"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Typing from "../../components/Typing";
// import TestimonialSlider from "../../components/TestimonialSlider";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";

// import { title } from "process";
export default function Home() {
  const zoomImgRef = useRef(null);
  const zoomImg2Ref = useRef(null);
  const zoomImg3Ref = useRef(null);
  const zoomImg13Ref = useRef(null);
  const zoomImg14Ref = useRef(null);

  // const Image=[
  //   {
  //     title:"Books Published",
  //     decription:"edgjk",
  //     img:"/img1.jfif"
  //   }
  // ]

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
          scale: 1.2,
          scrollTrigger: {
            trigger: zoomImg2Ref.current,
            start: "top 20%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }

    if (zoomImg3Ref.current) {
      gsap.fromTo(
        zoomImg3Ref.current,
        { scale: 1 },
        {
          scale: 1.2,
          scrollTrigger: {
            trigger: zoomImg3Ref.current,
            start: "top 20%",
            end: "bottom 60%",
            scrub: true,
          },
        }
      );
    }

    if (zoomImg13Ref.current) {
      gsap.fromTo(
        zoomImg13Ref.current,
        { scale: 1 },
        {
          scale: 1.2,
          scrollTrigger: {
            trigger: zoomImg13Ref.current,
            start: "top 20%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }

    if (zoomImg14Ref.current) {
      gsap.fromTo(
        zoomImg14Ref.current,
        { scale: 1 },
        {
          scale: 1.2,
          scrollTrigger: {
            trigger: zoomImg14Ref.current,
            start: "top 60%",
            end: "bottom 20%",
            scrub: true,
          },
        }
      );
    }
  }, []);

  return (
    <div>
      <div>
        {/* Other sections... */}
        <section>
          <div className="flex justify-center mt-2 ">
            <Image
              src="/logo-1.jpg"
              alt="logo"
              width={150}
              height={150}
              className="rounded-full"
            />
          </div>
          <div className="flex justify-center items-center">
            <p className="font-play text-[42px] font-bold italic ">
              Aadhi Priya Tea
            </p>
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
                White Tea – Light and delicate
              </p>
            </div>
            <div className="flex gap-4">
              <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
              <p className="font-play font-[300px] text-[20px]">
                Green Tea – Fresh and grassy
              </p>
            </div>
            <div className="flex gap-4">
              <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
              <p className="font-play font-[300px] text-[20px]">
                {" "}
                Oolong Tea – Semi-oxidized, between green and black
              </p>
            </div>
            <div className="flex gap-4">
              <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
              <p className="font-play font-[300px] text-[20px]">
                Black Tea – Fully oxidized and robust
              </p>
            </div>
            <div className="flex gap-4">
              <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
              <p className="font-play font-[300px] text-[20px]">
                Pu-erh Tea – Aged and fermented
              </p>
            </div>
            <div className="flex gap-4">
              <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
              <p className="font-play font-[300px] text-[20px]">
                Yellow Tea – Rare and slightly fermented{" "}
              </p>
            </div>
            <div className="flex gap-4">
              <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
              <p className="font-play font-[300px] text-[20px]">
                Herbal Tea – Made from herbs, flowers, or fruits
              </p>
            </div>
            <div className="flex gap-4">
              <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
              <p className="font-play font-[300px] text-[20px]">
                Rooibos Tea – Caffeine-free, from South Africa.
              </p>
            </div>
            <div className="flex gap-4">
              <p className="w-2 h-2 rounded-full border border-red-600 bg-red-600 mt-3"></p>
              <p className="font-play font-[300px] text-[20px]">
                {" "}
                Yerba Mate – Caffeinated herbal infusion from South America.
              </p>
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
                <p className="text-[32px] font-play font-[400] ">
                  Why Do People Drink Tea
                </p>
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
        <section className="relative overflow-hidden px-20 w-full mt-20">
          <div className=" w-full flex items-start">
            <div className=" relative gap-24 flex items-end h-auto">
              <Image
                src="/img2.jfif"
                alt="img"
                width={600}
                height={390}
                ref={zoomImg2Ref}
                className="zoom-img2"
                style={{
                  maxWidth: "50%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
              <div className=" max-w-[500px]">
                <p className="font-play font-[400] text-[22px]">
                  Tea is enjoyed worldwide for its health benefits, soothing
                  properties, and cultural significance. Rich in antioxidants,
                  it supports immunity, digestion, and heart health. With a mild
                  caffeine boost, tea enhances focus without the jitters of
                  coffee. Many drink it for relaxation, as herbal teas like
                  chamomile and peppermint promote calmness. From Chinese tea
                  ceremonies to Indian masala chai and British afternoon tea, it
                  holds deep cultural value. With a wide range of flavors, from
                  earthy green tea to spiced chai, tea remains a beloved
                  beverage for both wellness and enjoyment. 🍵
                </p>
              </div>
            </div>

            <div className="ml-28">
              <Image
                src="/img3.jfif"
                alt="img"
                width={600}
                height={390}
                ref={zoomImg3Ref}
                className="zoom-img3"
                style={{
                  maxWidth: "80%",
                  height: "auto",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </section>
        {/* section7... */}
        <section className="bg-red-800 p-14 flex justify-center items-center mt-10 gap-8">
          <div className="text-white text-center w-[550px] flex gap-16">
            <div>
              <Image
                src="comma.svg"
                alt="comma"
                width={270}
                height={270}
                className="mt-5"
              />
            </div>
            <div>
              <div data-aos="fade-left">
                <div className="font-play font-[400] text-[42px]">
                  Dance to me is an authentic expression of who I am and who I
                  can become.
                </div>
              </div>
              <hr className="mt-5" />
              <div data-aos="fade-righ  t">
                <div className="font-play font-[400] text-[34px] mt-5">
                  Anita Vallabh
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section8... */}
        <section className="flex justify-around mt-4 w-full items-start">
          <div className="font-play font-medium text-[42px]">
            Books <br /> Published
          </div>
          <div className=" flex flex-col items-center justify-center gap-10">
            <div data-aos="fade-up">
              {" "}
              <hr className="border-t-2 border-gray-200 w-full mt-2" />
              <div className="relative flex flex-col items-center justify-center   ">
                <div className="group flex flex-col gap-6 text-center ">
                  <div className="flex  gap-28 w-[1200px]  mt-5 justify-around">
                    <div className="flex gap-16 -ml-[170px]">
                      <hr className="border-t-2 border-gray-500" />
                      <div>
                        <p className="font-play text-[28px]">01</p>
                      </div>
                      <div className="flex flex-col gap-5 items-start">
                        <p className="font-play font-semibold text-[20px] hover:underline hover:underline-red-500">
                          Message in Movements
                        </p>
                        <div data-aos="fade-right">
                          <hr className="border border-red-300 w-[210px] -mt-5" />
                        </div>
                        <p className="font-play font-semibold text-[20px] -mt-5">
                          (2008)
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="font-play font-semibold text-[14px] text-gray-500">
                        Essence of Bharatanātyam
                      </p>
                      <p className="font-play font-semibold text-[18px]">
                        Samata Books, Chennai
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-20 transform -translate-y-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -ml-[300px]">
                    <Image
                      src="/img8.jfif"
                      alt="Hover Image"
                      className="w-64 h-auto rounded-lg shadow-lg"
                      width={120}
                      height={250}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div data-aos="fade-up">
              {" "}
              <hr className="border-t-2 border-gray-200 w-full mt-2" />
              <div className="relative flex flex-col items-center justify-center   ">
                <div className="group flex flex-col gap-6 text-center ">
                  <div className="flex  gap-28 w-[1200px] mt-5 justify-around">
                    <div className="flex gap-16 -ml-[70px]">
                      <div>
                        <p className="font-play text-[28px]">02</p>
                      </div>
                      <div className="flex flex-col items-start gap-5">
                        <p className="font-play font-semibold text-[20px] hover:underline hover:underline-red-500">
                          Message in Movements
                        </p>
                        <div data-aos="fade-right">
                          <hr className="border border-red-300 w-[210px] -mt-5" />
                        </div>

                        <p className="font-play font-semibold text-[20px] -mt-5">
                          (2013,2020, 2024)
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="font-play font-semibold text-[14px] text-gray-500">
                        Abhinaya Darpanam, An Illustrated Translation
                      </p>
                      <p className="font-play font-semibold text-[18px]">
                        B.R. Rhythms, New Delhi
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-20 transform -translate-y-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -ml-[300px]">
                    <Image
                      src="/img9.jfif"
                      alt="Hover Image"
                      className="w-64 h-auto rounded-lg shadow-lg"
                      width={120}
                      height={250}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up">
              {" "}
              <hr className="border-t-2 border-gray-200 w-full mt-2" />
              <div className="relative flex flex-col items-center justify-center   ">
                <div className="group flex flex-col gap-6 text-center ">
                  <div className="flex  gap-28 w-[1200px] text-center mt-5 justify-around">
                    <div className="flex gap-16 -ml-[60px]">
                      <div>
                        <p className="font-play text-[28px]">03</p>
                      </div>
                      <div className="flex flex-col items-start gap-5">
                        <p className="font-play font-semibold text-[20px] hover:underline hover:underline-red-500">
                          Abhinaya Darpanam
                        </p>
                        <div data-aos="fade-right">
                          <hr className="border border-red-300 w-[210px] -mt-5" />
                        </div>
                        <p className="font-play font-semibold text-[20px] -mt-5">
                          (2021)
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="font-play font-semibold text-[14px] text-gray-500">
                        Mudrā-s: Single Hand Gestures
                      </p>
                      <p className="font-play font-semibold text-[18px]">
                        Vedathek Publishing House, Bangalore
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-20 transform -translate-y-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -ml-[300px]">
                    <Image
                      src="/img10.jfif"
                      alt="Hover Image"
                      className="w-64 h-auto rounded-lg shadow-lg"
                      width={120}
                      height={250}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up">
              {" "}
              <hr className="border-t-2 border-gray-200 w-full mt-2" />
              <div className="relative flex flex-col items-center justify-center   ">
                <div className="group flex flex-col gap-6 text-center ">
                  <div className="flex  gap-28 w-[1200px] text-center mt-5 justify-around">
                    <div className="flex gap-16 -ml-[120px]">
                      <hr className="border-t-2 border-gray-500" />
                      <div>
                        <p className="font-play text-[28px]">04</p>
                      </div>
                      <div className="flex flex-col items-start gap-5">
                        <p className="font-play font-semibold text-[20px] hover:underline hover:underline-red-500">
                          Hasta Mudrā-s
                        </p>
                        <div data-aos="fade-right">
                          <hr className="border border-red-300 w-[210px] -mt-5" />
                        </div>
                        <p className="font-play font-semibold text-[20px] -mt-5">
                          (2023)
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="font-play font-semibold text-[14px] text-gray-500">
                        Hand Gestures of Indian Dance
                      </p>
                      <p className="font-play font-semibold text-[18px]">
                        Vedathek Publishing House, Bangalore
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-20 transform -translate-y-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -ml-[300px]">
                    <Image
                      src="/img11.jfif"
                      alt="Hover Image"
                      className="w-64 h-auto rounded-lg shadow-lg"
                      width={120}
                      height={250}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="fade-up">
              {" "}
              <hr className="border-t-2 border-gray-200 w-full mt-2" />
              <div className="relative flex flex-col items-start justify-center   ">
                <div className="group flex flex-col gap-6 text-start ">
                  <div className="flex  gap-28 w-[1200px] text-center mt-5 justify-around">
                    <div className="flex gap-16 -ml-[95px]">
                      <hr className="border-t-2 border-gray-500" />
                      <div>
                        <p className="font-play text-[28px]">05</p>
                      </div>
                      <div className="flex flex-col items-start gap-5">
                        <p className="font-play font-semibold text-[20px] hover:underline hover:underline-red-500">
                          You Are Your Desires
                        </p>
                        <div data-aos="fade-right">
                          <hr className="border border-red-300 w-[210px] -mt-5" />
                        </div>
                        <p className="font-play font-semibold text-[20px] -mt-5">
                          (2024)
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <p className="font-play font-semibold text-[14px] text-gray-500">
                        How An Ancient Indian wisdom template will help you tap
                        into <br />
                        your desires and shape your destiny
                      </p>
                      <p className="font-play font-semibold text-[18px]">
                        Notion Press, Chennai
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-20 transform -translate-y-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -ml-[300px]">
                    <Image
                      src="/img12.jfif"
                      alt="Hover Image"
                      className="w-64 h-auto rounded-lg shadow-lg"
                      width={120}
                      height={250}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* section9... */}
        <section>
          <div>
            <div className="flex mt-60 justify-center items-end">
              <div className=" relative  flex items-end h-auto">
                <Image
                  src="/img13.jfif"
                  alt="img"
                  width={1200}
                  height={790}
                  ref={zoomImg13Ref}
                  className="zoom-img13"
                  style={{
                    maxWidth: "50%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                />
              </div>
              <div className="max-w-[500px] -ml-[450px]">
                <div data-aos="fade-left">
                  {" "}
                  <p className="font-play font-semibold text-[52px]">
                    Performance <br /> & Dance Workshops
                  </p>
                </div>

                <p className="font-play font-[300px] text-[16px]">
                  Practicing philosophical orchestration of body, mind and soul,
                  on a fruitful voyage in the vast sea of Bharatanatyam.
                </p>
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
          </div>
        </section>
        {/* section10... */}
        <section>
          <div className="flex mt-60 justify-center items-end gap-36 ml-[300px]">
            <div className="max-w-[500px]">
              <div data-aos="fade-left">
                {" "}
                <p className="font-play font-semibold text-[42px]">
                  Academic <br />
                  Presentations
                </p>
              </div>

              <p className="font-play font-[300px] text-[16px]">
                Navigating new horizons in Bharatanatyam, by presenting various
                analyses through comparative studies.
              </p>
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
            <div className=" relative  flex items-end h-50%">
              <Image
                src="/img14.jfif"
                alt="img"
                width={960}
                height={620}
                ref={zoomImg14Ref}
                className="zoom-img14"
                style={{ maxWidth: "50%", height: "50%", objectFit: "cover" }}
              />
            </div>
          </div>
        </section>
        {/* section11... */}
        <section className="flex flex-col justify-center items-center">
          <div className="flex justify-center mt-36 flex-col ">
            <p className="font-play font-medium text-[42px] my-4">Blog</p>
            <div className="relative flex flex-col items-center justify-center  ">
              <div className="group flex flex-col gap-6  ">
                <div className="flex  gap-28 w-[1200px]  mt-2 justify-around">
                  <div className="w-full text-start">
                    <hr className="border-t-2 border-gray-200 " />

                    <div className="flex gap-36 justify-start items-center my-10">
                      <p className="font-play font-medium text-red-600 text-[24px]">
                        February 15, 2025
                      </p>
                      <p className="font-play font-medium text-[32px]">
                        Writing As Performance
                      </p>
                    </div>
                  </div>

                  <div className="absolute top-20 transform -translate-y-20 opacity-0 group-hover:opacity-60 transition-opacity duration-500 -ml-[300px]">
                    <Image
                      src="/img15.jpg"
                      alt="Hover Image"
                      className="w-64 h-auto rounded-lg shadow-lg"
                      width={270}
                      height={320}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative flex flex-col items-center justify-center   ">
              <div className="group flex flex-col gap-6 text-center ">
                <div className="flex  gap-28 w-[1200px]  mt-5 justify-around">
                  <div className=" w-full text-start ">
                    <hr className=" border-gray-200  mb-10" />
                    <div className="flex gap-36 my-10">
                      <p className="font-play font-medium text-red-600 text-[24px]">
                        January 31, 2025
                      </p>
                      <p className="font-play font-medium text-[32px]">
                        Transitioning from dancer to dance critic
                      </p>
                    </div>
                    <hr className="border-t-2 border-gray-200  mt-20 " />
                  </div>

                  <div className="absolute top-20 transform -translate-y-20 opacity-0 group-hover:opacity-80 transition-opacity duration-500 -ml-[300px]">
                    <Image
                      src="/img16.jfif"
                      alt="Hover Image"
                      className="w-64 h-auto rounded-lg shadow-lg"
                      width={270}
                      height={320}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mt-16 gap-4 ">
              <p className="font-play font-[300] text-[16px] hover:text-red-600">
                View All
              </p>
              <div className="mt-1 ">
                <Image
                  src="/rightarrow.svg"
                  alt="arrow"
                  width={20}
                  height={0}
                />
              </div>
            </div>
          </div>
        </section>
        {/* section12... */}
      </div>

      <ParallaxProvider>
        <Parallax scale={[1, 0]}>
          <section>
            <div>
              <div className="flex h-screen items-center justify-center p-20  bg-red-100 mt-10 flex-row relative">
                <div className="relative flex flex-col items-center  justify-center mt-10 ">
                  <p className="text-blue-600 font-semibold text-lg transform rotate-180 [writing-mode:vertical-lr]">
                    Testimonial
                  </p>
                  <div className="w-[2px] h-64 bg-red-600 -mt-32 ml-12"></div>
                </div>

                <div className="flex flex-col gap-8 px-40">
                  <Image src="/comma.svg" alt="comma" width={60} height={60} />
                  <p className="font-play font-[300px] text-gray-400 text-[24px]">
                    You Are Your Desires
                  </p>
                  <p className="font-play font-[500px] text-[30px]">
                    Very simply written, this slim volume draws from the author
                    own life and that of the people around her, to offer
                    significant insights into simple life philosophies. A
                    touching book and one that you will refer to again and
                    again, especially when you need guidance. It is for
                    everyone.
                  </p>
                  <p className="font-play font-[400px] text-red-500 text-[22px]">
                    Sandhya Sridhar
                  </p>
                </div>
              </div>
              <div className="flex absolute -mt-10 ml-[290px] gap-6">
                <button className="font-play font-[400px] text-[24px] underline text-gray-500">
                  Pre
                </button>
                <button className="font-play font-[400px] text-[24px] underline ">
                  Next
                </button>
              </div>
            </div>
          </section>
        </Parallax>
        <Parallax speed={-10}>
          <section>
            <div>
              <div className="flex h-screen items-center justify-center p-20 bg-gray-100  flex-row relative">
                <div className="relative flex flex-col items-center  justify-center mt-10 ">
                  <p className="text-blue-600 font-semibold text-lg transform rotate-180 [writing-mode:vertical-lr]">
                    Testimonial
                  </p>
                  <div className="w-[2px] h-64 bg-red-600 -mt-32 ml-12"></div>
                </div>

                <div className="flex flex-col gap-8 px-40">
                  <Image src="/comma.svg" alt="comma" width={60} height={60} />
                  <p className="font-play font-[300px] text-gray-400 text-[24px]">
                    You Are Your Desires
                  </p>
                  <p className="font-play font-[500px] text-[30px]">
                    Very simply written, this slim volume draws from the author
                    own life and that of the people around her, to offer
                    significant insights into simple life philosophies. A
                    touching book and one that you will refer to again and
                    again, especially when you need guidance. It is for
                    everyone.
                  </p>
                  <p className="font-play font-[400px] text-red-500 text-[22px]">
                    Sandhya Sridhar
                  </p>
                </div>
              </div>
              <div className="flex absolute -mt-10 ml-[290px] gap-6">
                <button className="font-play font-[400px] text-[24px] underline text-gray-500">
                  Pre
                </button>
                <button className="font-play font-[400px] text-[24px] underline ">
                  Next
                </button>
              </div>
            </div>
          </section>
        </Parallax>
        {/* <Parallax speed={-10}>
          <section>
            <div>
              <div className="flex h-screen items-center justify-center p-20  bg-red-100 mt-10 flex-row relative">
                <div className="relative flex flex-col items-center  justify-center mt-10 ">
                  <p className="text-blue-600 font-semibold text-lg transform rotate-180 [writing-mode:vertical-lr]">
                    Testimonial
                  </p>
                  <div className="w-[2px] h-64 bg-red-600 -mt-32 ml-12"></div>
                </div>

                <div className="flex flex-col gap-8 px-40">
                  <Image src="/comma.svg" alt="comma" width={60} height={60} />
                  <p className="font-play font-[300px] text-gray-400 text-[24px]">
                    You Are Your Desires
                  </p>
                  <p className="font-play font-[500px] text-[30px]">
                    Very simply written, this slim volume draws from the author
                    own life and that of the people around her, to offer
                    significant insights into simple life philosophies. A
                    touching book and one that you will refer to again and
                    again, especially when you need guidance. It is for
                    everyone.
                  </p>
                  <p className="font-play font-[400px] text-red-500 text-[22px]">
                    Sandhya Sridhar
                  </p>
                </div>
              </div>
              <div className="flex absolute -mt-10 ml-[290px] gap-6">
                <button className="font-play font-[400px] text-[24px] underline text-gray-500">
                  Pre
                </button>
                <button className="font-play font-[400px] text-[24px] underline ">
                  Next
                </button>
              </div>
            </div>
          </section>
        </Parallax> */}
      </ParallaxProvider>
    </div>
  );
}
