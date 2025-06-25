"use client";

import { Globe } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar, Autoplay } from "swiper/modules";
import Image from "next/image";
import DecentralIcon from "@/public/icons/big-data-ai.png";
import SclabelIcon from "@/public/icons/blockchain-3.png";
import MarketPlaceIcon from "@/public/icons/time-fast.png";
import AnalyzeIcon from "@/public/icons/productivity.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "../app/globals.css";

export const Features: React.FC = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const features = [
    {
      title: "Contextual Intelligence",
      description:
        "Turn raw, unstructured data into smart insights by adding meaningful context. Your data isn’t just stored—it’s made useful, helping you make smarter decisions.",
      icon: DecentralIcon,
      delay: 0,
    },
    {
      title: "Decentralized Security",
      description:
        "Your data is encrypted and distributed across multiple networks, ensuring maximum security and privacy, with no single point of failure.",
      icon: SclabelIcon,
      delay: 0.1,
    },
    {
      title: "Real-Time Insights",
      description:
        "Access up-to-date data at any time. Get the most relevant information, when you need it, to stay ahead of the competition.",
      icon: MarketPlaceIcon,
      delay: 0.2,
    },
    {
      title: "Scalable & Compliant",
      description:
        "Coremind grows with your business. It’s designed to scale easily and stay compliant with industry regulations as your data needs evolve.",
      icon: AnalyzeIcon,
      delay: 0.3,
    },
  ];

  return (
    <section
      className="relative py-12 bg-black text-white overflow-hidden scrollbar-custom"
      id="features"
    >
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-[10%] left-[20%] w-[150px] h-[150px] rounded-full bg-primaryColor blur-[100px] opacity-20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ repeat: Infinity, duration: 5 }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[20%] w-[200px] h-[200px] rounded-full bg-primaryColorLight blur-[120px] opacity-20"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
      </div>

      <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl lg:text-5xl font-bold text-white mb-2 text-center leading-tight">
          Futuristic solutions designed for tomorrow.
        </h2>
      </div>

      <div className="relative z-10 p-12">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={true}
          loop={true}
          modules={[Autoplay, Scrollbar]}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {features.map((feature, index) => (
            <SwiperSlide key={index} className="mb-8">
              <motion.div
                className="p-8 bg-gradient-to-br from-primaryColor to-white/10 backdrop-blur-md rounded-3xl shadow-lg border border-primaryColorLight hover:scale-105 transition-transform duration-300 min-h-[370px]"
                initial="hidden"
                whileInView="visible"
                variants={fadeInUp}
                transition={{ delay: feature.delay }}
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    height={50}
                    width={50}
                    className="h-[50px] w-[50px] mb-4"
                  />

                  <h3 className="text-xl font-semibold text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
