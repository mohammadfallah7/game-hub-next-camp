import { iconMap } from "../lib/utils";
import type { GameModel } from "@/types/game.model";
import { Card, HStack, Icon, Image } from "@chakra-ui/react";

const GameCard = ({ game }: { game: GameModel }) => {
  return (
    <Card.Root overflow="hidden" mb={5}>
      <Image src={game.background_image} alt={game.slug} />
      <Card.Body>
        <HStack mb={3}>
          {game.parent_platforms.map(({ platform }) => {
            const PlatformIcon = iconMap[`${platform.slug}`];

            return (
              <Icon size="sm">
                <PlatformIcon />
              </Icon>
            );
          })}
        </HStack>
        <Card.Title fontSize="2xl" fontWeight="bold">
          {game.name}
        </Card.Title>
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
