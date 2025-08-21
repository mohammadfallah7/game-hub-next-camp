import { Box } from "@chakra-ui/react";
import useGames from "../hooks/use-games";
import GameCard from "./GameCard";

const GamesList = () => {
  const { data } = useGames();

  return (
    <Box columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
      {data?.results.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </Box>
  );
};

export default GamesList;
