import axios from "axios";
import type { IconType } from "react-icons";
import { BsNintendoSwitch } from "react-icons/bs";
import {
  FaAndroid,
  FaApple,
  FaAppStore,
  FaGlobe,
  FaLinux,
  FaPlaystation,
  FaWindows,
  FaXbox,
} from "react-icons/fa6";
import env from "./env";
import bullsEye from "../assets/bulls-eye.webp";
import meh from "../assets/meh.webp";
import thumbsUp from "../assets/thumbs-up.webp";

export const axiosInstance = axios.create({
  baseURL: env.baseUrl,
  params: {
    key: env.apiKey,
  },
});

export const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  linux: FaLinux,
  mac: FaApple,
  nintendo: BsNintendoSwitch,
  web: FaGlobe,
  android: FaAndroid,
  ios: FaAppStore,
};

export const generateBadgeColor = (metacritic: number): string => {
  if (metacritic >= 80) return "green";
  else if (metacritic > 60) return "yellow";

  return "red";
};

export const generateGameIcon = (rating: number) => {
  if (rating > 4) return { src: bullsEye, alt: "Bulls Eye", width: "30px" };
  else if (rating > 3)
    return { src: thumbsUp, alt: "Thumbs Up", width: "20px" };

  return { src: meh, alt: "Meh", width: "20px" };
};
