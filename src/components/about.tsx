"use client";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Image from "next/image";

export const About = () => {
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section
      className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-16 pt-12 md:pt-12 px-12 lg:px-20 mx-auto max-w-7xl text-white"
      id="about"
    >
      {/* Left Content */}
      <div className="flex-1 flex flex-col gap-6 text-center md:text-left z-10">
        <motion.h1
          className="text-4xl lg:text-5xl font-bold leading-tight text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          Why choose <span className="text-primaryColor">Coremind </span>
        </motion.h1>

        <Image
          src={"/mascot.svg"}
          alt="mascot coremind"
          width={100}
          height={100}
          className="w-full h-auto animate-updown block md:hidden"
          priority
        />

        <motion.p
          className="text-lg lg:text-xl text-gray-300 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          Contextual intelligence makes unstructured data actionable and
          insightful. Decentralized security ensures your data is encrypted and
          stored across multiple networks, providing safety and privacy.
          Real-time decision-making is possible through tailored, relevant data
          that’s always up-to-date. Scalability and compliance ensure that
          Coremind grows with your business and keeps pace with evolving
          regulatory demands.
        </motion.p>

        {/* Bullet Points */}
        {/* <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-4">
            <Image
              src="/icons/right-arrow.png" // Replace this with the actual image path or URL
              alt="Globe Icon"
              height={32}
              width={32}
              className="h-8 w-8"
            />
            <p className="text-gray-300">
              Empower creators to design sophisticated{" "}
              <span className="font-bold text-white">AI agents</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="/icons/right-arrow.png" // Replace this with the actual image path or URL
              alt="Globe Icon"
              height={32}
              width={32}
              className="h-8 w-8"
            />
            <p className="text-gray-300">
              Enhance efficiency and innovation in the{" "}
              <span className="font-bold text-white">Web3 landscape</span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="/icons/right-arrow.png" // Replace this with the actual image path or URL
              alt="Globe Icon"
              height={32}
              width={32}
              className="h-8 w-8"
            />
            <p className="text-gray-300">
              Enable seamless{" "}
              <span className="font-bold text-white">
                discovery, integration, and deployment.
              </span>
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Image
              src="/icons/right-arrow.png" // Replace this with the actual image path or URL
              alt="Globe Icon"
              height={32}
              width={32}
              className="h-8 w-8"
            />
            <p className="text-gray-300">
              Tailor <span className="font-bold text-white">AI solutions </span>
              to diverse user needs.
            </p>
          </div>
        </motion.div> */}
      </div>

      {/* Right Image */}
      <motion.div
        className="relative flex-1 flex justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        {/* <video
          src="/1.mp4" // Replace this with the actual video URL
          autoPlay
          loop
          muted
          playsInline
          webkit-playsinline="true"
          className="rounded-3xl shadow-lg"
        /> */}

        <Image
          src={"/mascot.svg"}
          alt="mascot coremind"
          width={100}
          height={100}
          className="w-full h-auto animate-updown hidden md:block"
          priority
        />
        {/* Glowing Effect */}
        <div className="absolute inset-0 rounded-3xl border-[3px] border-primaryColor opacity-30 blur-md"></div>
      </motion.div>

      {/* Background Glow */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-primaryColor blur-[150px] opacity-50"></div>
      {/* <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-primaryColorLight blur-[150px] opacity-20"></div> */}
    </section>
  );
};
