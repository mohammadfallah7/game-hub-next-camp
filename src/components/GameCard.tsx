import type { GameModel } from "@/types/game.model";
import { Badge, Card, HStack, Icon, Image } from "@chakra-ui/react";
import { LuPlus } from "react-icons/lu";
import imagePlaceholder from "../assets/image-placeholder.webp";
import { generateBadgeColor, generateGameIcon, iconMap } from "../lib/utils";

const GameCard = ({ game }: { game: GameModel }) => {
  return (
    <Card.Root overflow="hidden" mb={5}>
      <Image src={game.background_image || imagePlaceholder} alt={game.slug} />
      <Card.Body alignItems="flex-start">
        <HStack justifyContent="space-between" width="full">
          <HStack>
            {game.parent_platforms.map(({ platform }) => {
              const PlatformIcon = iconMap[`${platform.slug}`];

              return (
                <Icon key={platform.id} size="sm">
                  <PlatformIcon />
                </Icon>
              );
            })}
          </HStack>
          {game.metacritic && (
            <Badge
              px={2}
              py={1}
              colorPalette={generateBadgeColor(game.metacritic)}
            >
              {game.metacritic}
            </Badge>
          )}
        </HStack>
        <Card.Title my={3} fontSize="2xl" fontWeight="bold">
          {game.name}
          <Image ml={2} display="inline" {...generateGameIcon(game.rating)} />
        </Card.Title>

        {game.added && (
          <Badge py={1} px={2}>
            <Icon size="md">
              <LuPlus />
            </Icon>
            {game.added.toLocaleString()}
          </Badge>
        )}
      </Card.Body>
    </Card.Root>
  );
};

export default GameCard;
