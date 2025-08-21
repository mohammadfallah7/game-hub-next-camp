import type { GameModel } from "@/types/game.model";
import { axiosInstance } from "../lib/utils";
import { useEffect, useState } from "react";
import type { GetAllResponseModel } from "@/types/response.model";

const GamesList = () => {
  const [games, setGames] = useState<GameModel[]>([]);

  useEffect(() => {
    const controller = new AbortController();

    axiosInstance
      .get<GetAllResponseModel<GameModel>>("/games", {
        signal: controller.signal,
      })
      .then((res) => {
        setGames(res.data.results);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <ul>
      {games.map((game) => (
        <li key={game.id}>{game.name}</li>
      ))}
    </ul>
  );
};

export default GamesList;
