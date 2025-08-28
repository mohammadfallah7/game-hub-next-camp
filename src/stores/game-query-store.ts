import { create } from "zustand";

interface GameQueryStoreType {
  search?: string;
  platforms?: { id: number; slug: string; name: string };
  genres?: { id: number; slug: string; name: string };
  page?: number;
  onSearch: (searchTerm: string) => void;
  onSelectPlatform: (platform: {
    id: number;
    slug: string;
    name: string;
  }) => void;
  onSelectGenre: (genre: { id: number; slug: string; name: string }) => void;
  onChangePage: (value?: number) => void;
}

const useGameQueryStore = create<GameQueryStoreType>((set) => ({
  onSearch: (searchTerm) => set(() => ({ search: searchTerm })),
  onSelectPlatform: (platform) => set(() => ({ platforms: platform })),
  onSelectGenre: (genre) => set(() => ({ genres: genre })),
  onChangePage: (value) => set(() => ({ page: value })),
}));

export default useGameQueryStore;
