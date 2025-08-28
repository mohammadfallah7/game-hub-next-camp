import { axiosInstance } from "../lib/utils";
import type { GameModel } from "../types/game.model";
import type { GetAllResponseModel } from "../types/response.model";
import { useQuery } from "@tanstack/react-query";
import useGameQueryStore from "../stores/game-query-store";

function useGames() {
  const { search, platforms, genres, page } = useGameQueryStore();

  return useQuery<GetAllResponseModel<GameModel>>({
    queryKey: ["games", search, platforms?.slug, genres?.slug, page],
    queryFn: () =>
      axiosInstance
        .get("/games", {
          params: {
            page,
            search,
            platforms: platforms?.id,
            genres: genres?.id,
          },
        })
        .then((res) => res.data),
    staleTime: 10 * 60 * 1000, // 10min
  });
}

export default useGames;
