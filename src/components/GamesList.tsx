import { Box, Flex } from "@chakra-ui/react";
import useGames from "../hooks/use-games";
import GameCard from "./GameCard";
import GameTitle from "./GameTitle";
import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";
import useGameQueryStore from "../stores/game-query-store";
import { useState } from "react";

const GamesList = () => {
  const { data } = useGames();
  const onChangePage = useGameQueryStore((s) => s.onChangePage);
  const [selectedPage, setSelectedPage] = useState(1);

  return (
    <Box>
      <GameTitle />
      <Box columns={{ base: 1, md: 2, lg: 3 }} gap={5}>
        {data?.results.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Box>
      {data?.results && (
        <Flex justifyContent="center" my={8}>
          <Pagination.Root
            count={data?.count}
            pageSize={20}
            defaultPage={selectedPage}
          >
            <ButtonGroup variant="ghost" size="sm">
              <Pagination.PrevTrigger asChild>
                <IconButton
                  onClick={() => {
                    onChangePage(Number(data.previous?.split("&")[1][5]));
                    setSelectedPage((prev) => prev - 1);
                  }}
                >
                  <LuChevronLeft />
                </IconButton>
              </Pagination.PrevTrigger>

              <Pagination.Items
                render={(page) => (
                  <IconButton
                    onClick={() => {
                      setSelectedPage(page.value);
                      onChangePage(page.value);
                    }}
                    variant={{ base: "ghost", _selected: "outline" }}
                  >
                    {page.value}
                  </IconButton>
                )}
              />

              <Pagination.NextTrigger asChild>
                <IconButton
                  onClick={() => {
                    onChangePage(Number(data.next?.split("&")[1][5]));
                    setSelectedPage((prev) => prev + 1);
                  }}
                >
                  <LuChevronRight />
                </IconButton>
              </Pagination.NextTrigger>
            </ButtonGroup>
          </Pagination.Root>
        </Flex>
      )}
    </Box>
  );
};

export default GamesList;
