import type { PlatformModel } from "./platform.model";

export type GameModel = {
  id: number;
  slug: string;
  name: string;
  background_image?: string;
  rating: number;
  added?: number;
  metacritic?: number;
  parent_platforms: { platform: PlatformModel; released_at?: string | null }[];
};
