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
