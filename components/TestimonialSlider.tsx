"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    name: "John Doe",
    text: "This service was fantastic! Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Jane Smith",
    text: "Amazing experience, will definitely come back again.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Michael Lee",
    text: "Top-notch support and great results!",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

export default function TestimonialSlider() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="p-6"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={64}
              height={64}
              className="w-16 h-16 mx-auto rounded-full mb-4"
            />
            <p className="text-lg font-medium text-gray-800">
              {testimonial.text}
            </p>
            <h3 className="mt-4 text-sm font-semibold text-gray-600">
              - {testimonial.name}
            </h3>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
