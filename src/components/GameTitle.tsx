import useGameQueryStore from "../stores/game-query-store";
import { HStack, Text } from "@chakra-ui/react";

const GameTitle = () => {
  const { genres, platforms } = useGameQueryStore();

  return (
    <HStack mb={5} fontSize="4xl" fontWeight="bold">
      <Text>{genres ? genres.name : "All"}</Text>
      {platforms?.name && <Text>{platforms.name}</Text>}
      <Text>Games</Text>
    </HStack>
  );
};

export default GameTitle;
