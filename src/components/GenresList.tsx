import { Avatar, Flex, HStack, Image, Link, Text } from "@chakra-ui/react";
import HideAndShowSideItems from "./HideAndShowSideItems";
import { useState } from "react";
import useGenres from "../hooks/use-genres";
import type { GenreModel } from "../types/genre.model";
import useGameQueryStore from "../stores/game-query-store";

const GenresList = () => {
  const { data: genres } = useGenres();
  const [expand, setExpand] = useState(false);

  return (
    <Flex flexDir="column" gap={3}>
      <Text fontSize="xl" fontWeight="bold">
        Genres
      </Text>
      <Flex flexDir="column" gap={2}>
        {genres?.results.slice(0, expand ? 6 : 3).map((genre) => (
          <Genre key={genre.id} genre={genre} />
        ))}
      </Flex>
      {genres?.results && (
        <HideAndShowSideItems
          expand={expand}
          onClick={() => setExpand(!expand)}
        />
      )}
    </Flex>
  );
};

const Genre = ({ genre }: { genre: GenreModel }) => {
  const onSelectGenre = useGameQueryStore((s) => s.onSelectGenre);

  return (
    <Link onClick={() => onSelectGenre(genre)}>
      <HStack>
        <Avatar.Root shape="rounded" size="sm" overflow="hidden">
          <Image
            src={genre.image_background}
            alt={genre.slug}
            objectFit="cover"
            width="full"
            height="full"
          />
        </Avatar.Root>
        <Text>{genre.name}</Text>
      </HStack>
    </Link>
  );
};

export default GenresList;
