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

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: API_KEY,
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
