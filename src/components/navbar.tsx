"use client";

import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GitbookIcon, TeleIcon, TwitterIcon } from "@/src/utils/Icon/socials";
import { DextoolsIcon } from "@/src/utils/Icon/dex";
import { findUsLink, socialsLink } from "@/src/constants/links";

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MENU_LIST = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Tokenomics", href: "#tokenomics" },
    { name: "Roadmaps", href: "#roadmaps" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black/90 text-white z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="h-12 w-12" />
          <span className="text-lg font-bold">Coremind </span>
        </div>

        {/* Menu List */}
        <div className="hidden md:flex items-center gap-8">
          {MENU_LIST.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="hover:text-primaryColor transition-colors duration-300 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Button */}
        <div className="hidden md:block">
          <div className="flex flex-row items-center gap-6">
            <Link
              href={socialsLink.telegram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TeleIcon
                className="fill-white hover:fill-primaryColor transform transition-all duration-300 hover:scale-110 hover:rotate-12"
                style={{ fontSize: "1.5em" }}
              />
            </Link>
            <Link
              href={socialsLink.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon
                className="fill-white hover:fill-primaryColor transform transition-all duration-300 hover:scale-110 hover:rotate-12"
                style={{ fontSize: "1.4em" }}
              />
            </Link>
            <Link
              href={findUsLink.uniswap}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                className="rounded-full !border-none !bg-primaryColor text-black hover:text-white px-6 py-2 font-extrabold"
              >
                $CID
              </Button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-16 left-0 w-full bg-black/90 shadow-md flex flex-col items-center gap-4 py-4"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {MENU_LIST.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-primaryColor transition-colors duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <div className="flex flex-row items-center gap-6">
              <Link
                href={socialsLink.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TeleIcon
                  className="fill-white hover:fill-primaryColor transform transition-all duration-300 hover:scale-110 hover:rotate-12"
                  style={{ fontSize: "1.5em" }}
                />
              </Link>
              <Link
                href={socialsLink.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon
                  className="fill-white hover:fill-primaryColor transform transition-all duration-300 hover:scale-110 hover:rotate-12"
                  style={{ fontSize: "1.4em" }}
                />
              </Link>
            </div>

            <Button
              variant="outline"
              className="rounded-full w-full max-w-xs !border-none !bg-primaryColor text-black px-6 py-2 font-extrabold"
            >
              $CID
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
