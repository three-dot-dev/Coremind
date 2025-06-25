import { Teko } from "next/font/google";
import localFont from "next/font/local";

export const kanit = Teko({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const kanitBold = Teko({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const coolvetica = localFont({
  src: "./coolvetica.ttf",
  weight: "700",
  display: "swap",
  preload: true,
});
