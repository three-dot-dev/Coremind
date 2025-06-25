"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { contractAddress } from "../constants/links";
import { CopyIcon } from "lucide-react";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export const Tokenomics = () => {
  const chartRef = useRef<ChartJS | null>(null);

  const data = {
    labels: ["LP", "Marketing", "Team", "CEX Listings"],
    datasets: [
      {
        data: [85, 5, 5, 5],
        backgroundColor: ["#226bcf", "#4DC3E3", "#0a2576", "#0E4F8C"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true, // Ensure tooltip is enabled..
        backgroundColor: "#1a1f24",
        titleColor: "#ffffff",
        bodyColor: "#ffffff",
        borderColor: "#00FF00",
        borderWidth: 1,
        callbacks: {
          label: function (tooltipItem: any) {
            const label = tooltipItem.label || "";
            const value = tooltipItem.raw || 0;
            return `${label}: ${value}%`;
          },
        },
      },
      datalabels: {
        color: "#ffffff",
        font: {
          size: 12,
          weight: 700,
        },
        align: "end" as const,
        anchor: "end" as const,
        formatter: (value: number, context: any) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${label}: ${value}%`;
        },
      },
    },
    maintainAspectRatio: false,
  };

  const createGradient = (
    ctx: CanvasRenderingContext2D,
    colorStart: string,
    colorEnd: string
  ): CanvasGradient => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);
    return gradient;
  };

  if (typeof window !== "undefined") {
    const cachedImage = new Image();
    cachedImage.src = "/logo.png";

    const centerImagePlugin = {
      id: "centerImage",
      beforeDraw: (chart: ChartJS) => {
        const ctx = chart.ctx;
        const { width, height } = chart;
        const imgSize = Math.min(width, height) * 0.5;

        // load dari cache
        ctx.save();
        ctx.drawImage(
          cachedImage,
          width / 2 - imgSize / 2,
          height / 2 - imgSize / 2,
          imgSize,
          imgSize
        );
        ctx.restore();
      },
    };
    ChartJS.register(centerImagePlugin);
  }

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.canvas.getContext("2d");

      if (ctx) {
        const gradients = [
          createGradient(ctx, "#BBFBBB", "#7AB87A"),
          createGradient(ctx, "#50DA58", "#2A9831"),
          createGradient(ctx, "#11590E", "#339033"),
          createGradient(ctx, "#172117", "#394B39"),
        ];

        const chartInstance = chartRef.current;
        chartInstance.data.datasets[0].backgroundColor = gradients;
        chartInstance.update(); // Re-render the chart
      }
    }
  }, []);

  return (
    <section
      className="relative bg-black text-white px-6 py-12 lg:py-24 mx-12 my-12 lg:my-24"
      id="tokenomics"
    >
      {/* Background Effects */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#00ff66] blur-[150px] opacity-20"></div>
      <div className="absolute -bottom-28 right-0 w-[400px] h-[400px] bg-[#1aff75] blur-[150px] opacity-20"></div>
      <motion.div
        className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-24 justify-center items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, staggerChildren: 0.3 },
          },
        }}
      >
        {/* Left Content */}
        <motion.div
          className="space-y-6 lg:space-y-8"
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
          }}
        >
          <h2 className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-white">
            TOKENOMICS
          </h2>
          <motion.ul
            className="space-y-4 text-lg leading-relaxed"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              `CA: ${contractAddress}`,
              "Zenithon: $CID",
              "Tax: 5% BUY/SELL",
              "Total Supply: 100M Tokens",
              "Network: ETHEREUM",
            ].map((item, index) => {
              const type = item.split(":")[0];
              const desc = item.split(":")[1];

              return (
                <motion.li
                  key={index}
                  className="font-bold text-primaryColor flex items-center gap-2"
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: {
                      opacity: 1,
                      x: 0,
                      transition: { duration: 0.5 },
                    },
                  }}
                >
                  {type}
                  <span className="text-white font-light">: {desc}</span>
                  {type === "CA" && (
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(contractAddress);
                      }}
                      className="ml-2 bg-primaryColorLight/15 hover:bg-primaryColor/30 text-white p-2 rounded-md transition focus:outline-none focus:ring-2 focus:ring-primaryColor"
                      aria-label="Copy Contract Address"
                    >
                      <CopyIcon size={16} />
                    </button>
                  )}
                </motion.li>
              );
            })}
          </motion.ul>
        </motion.div>

        {/* Chart Content */}
        <motion.div
          className="relative w-full max-w-lg"
          style={{ height: "400px" }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
          }}
        >
          <Doughnut
            ref={(chartInstance) => {
              if (chartInstance) chartRef.current = chartInstance;
            }}
            data={data}
            options={options}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
