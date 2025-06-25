"use client";

import { motion } from "framer-motion";

export const Roadmaps = () => {
  const FAQ_LIST = [
    {
      question: "Foundation & Data Integration",
      answer: [
        "Build partnerships for domain-specific data.",
        "Develop the foundational framework for decentralized data management.",
      ],
    },
    {
      question: "Beta Testing & Early Adoption",
      answer: [
        "Launch beta programs with select enterprises.",
        "Collect feedback to refine data processing and model integration features.",
      ],
    },
    {
      question: "Full Launch & Expansion",
      answer: [
        "Full-scale deployment for businesses in regulated industries.",
        "Enhance compliance tools and real-time data access features.",
      ],
    },
    {
      question: "Growth & Continuous Optimization",
      answer: [
        "Expand globally and integrate new use cases.",
        "Continuously improve AI-driven insights and data security features.",
      ],
    },
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  return (
    <section
      className="relative bg-black text-white mx-4 sm:mx-8 my-24 sm:my-48 p-6 lg:p-24 rounded-3xl"
      id="roadmaps"
    >
      {/* Heading */}
      <motion.h2
        className="text-center text-4xl lg:text-6xl font-bold mb-8 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        Our Roadmaps
      </motion.h2>

      <motion.p
        className="text-lg text-center text-gray-400 mb-12 max-w-3xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        transition={{ delay: 0.2 }}
      >
        As we continuously strive to innovate and enhance our offerings, our
        roadmap represents a strategic vision for Coremind’s evolution.
      </motion.p>

      {/* FAQ Items */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {FAQ_LIST.map((item, index) => (
          <motion.div
            key={index}
            className="relative p-6 flex flex-col"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            transition={{ delay: index * 0.2 }}
          >
            {/* Question Number */}
            <div className="flex items-center gap-4 mb-4">
              <div className="text-3xl font-bold text-primaryColor">{`0${
                index + 1
              }`}</div>
              <h3 className="text-xl font-semibold text-white">
                {item.question}
              </h3>
            </div>
            {/* Answer */}
            <ul className="text-gray-400 list-disc list-inside">
              {item.answer.map((point, pointIndex) => (
                <li key={pointIndex} className="mb-2">
                  {point}
                </li>
              ))}
            </ul>
            {/* Fixed Divider */}
            <div className="mt-4 h-[2px] w-full bg-primaryColor"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
