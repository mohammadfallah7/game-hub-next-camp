import { axiosInstance } from "../lib/utils";
import type { GameModel } from "../types/game.model";
import type { GetAllResponseModel } from "@/types/response.model";
import { useQuery } from "@tanstack/react-query";

function useGames() {
  return useQuery<GetAllResponseModel<GameModel>>({
    queryKey: ["games"],
    queryFn: () => axiosInstance.get("/games").then((res) => res.data),
    staleTime: 10 * 60 * 1000, // 10min
  });
}

export default useGames;
