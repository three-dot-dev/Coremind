"use client";
import { GitbookIcon, TeleIcon, TwitterIcon } from "@/src/utils/Icon/socials";
import { DextoolsIcon } from "@/src/utils/Icon/dex";
import { findUsLink, socialsLink } from "@/src/constants/links";
import Link from "next/link";
export const Footer = () => {
  return (
    <footer className="m-0 sm:m-6 lg:m-8 p-4 sm:p-6 lg:p-10 rounded-none lg:rounded-3xl">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 text-[#F9FAFB]">
        <div className="flex items-center gap-2 mb-12 sm:m-0">
          <img src="/logo.png" alt="Logo" className="h-12 w-12" />
          <span className="text-lg font-bold">Coremind </span>
        </div>
        <div className="flex flex-row gap-6">
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
            href={socialsLink.whitepaper}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitbookIcon
              className="fill-white hover:fill-primaryColor transform transition-all duration-300 hover:scale-110 hover:rotate-12"
              style={{ fontSize: "1.5em" }}
            />
          </Link>

          <Link
            href={findUsLink.dextools}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DextoolsIcon
              className="fill-white hover:fill-primaryColor transform transition-all duration-300 hover:scale-110 hover:rotate-12"
              style={{ fontSize: "1.5em" }}
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 text-[#F9FAFB]">
        <p className="font-thin text-white text-center lg:text-left">
          &copy; 2024 Coremind .
        </p>
        <p className="font-thin text-white text-center lg:text-left">
          All rights reserved
        </p>
      </div>
    </footer>
  );
};
