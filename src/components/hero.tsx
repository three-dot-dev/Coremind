"use client";

import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { findUsLink, socialsLink } from "../constants/links";

export const Hero = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 }); // Trigger animation when 20% of the component is in view

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const fadeInOutVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  const glowingButtonVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1, delay: 0.3 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center text-white"
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/bg-gradient-cid.mp4" // Replace with your video path
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
      />

      {/* Background Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"
        variants={fadeInOutVariants}
      ></motion.div>

      {/* Glowing Particles */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
      >
        {/* Particle Animation */}
        <div className="absolute w-[150px] h-[150px] bg-white rounded-full blur-3xl opacity-40 animate-pulse top-[20%] left-[10%]"></div>
        <div className="absolute w-[200px] h-[200px] bg-white rounded-full blur-3xl opacity-30 animate-pulse top-[50%] left-[60%]"></div>
        <div className="absolute w-[100px] h-[100px] bg-white rounded-full blur-3xl opacity-50 animate-pulse top-[70%] left-[30%]"></div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 lg:px-16 max-w-screen-xl"
        variants={fadeInOutVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5rem] leading-tight font-bold tracking-tight text-white">
          Unlock Intelligent Insights with{" "}
          <span className="text-primaryColor"> Coremind </span>
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          For industries that need to meet compliance
        </p>
        <p className="text-lg text-gray-300">
          standards and protect sensitive information
        </p>
        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4 p-4"
          variants={glowingButtonVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
        >
          <Link
            href={socialsLink.bot}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 bg-primaryColor text-black font-semibold rounded-full shadow-lg hover:scale-105 transition-transform duration-300 hover:shadow-lg hover:shadow-primaryColorLight/20">
              Launch App
            </button>
          </Link>

          <Link
            href={socialsLink.whitepaper}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-3 border border-primaryColor text-primaryColor font-semibold rounded-full shadow-lg hover:bg-primaryColorLight transition-transform duration-300">
              Documentation
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
