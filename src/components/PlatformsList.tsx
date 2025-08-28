import usePlatforms from "../hooks/use-platforms";
import { Avatar, Flex, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { iconMap } from "../lib/utils";
import type { PlatformModel } from "../types/platform.model";
import { useState } from "react";
import HideAndShowSideItems from "./HideAndShowSideItems";

const PlatformsList = () => {
  const { data: platforms } = usePlatforms();
  const [expand, setExpand] = useState(false);

  return (
    <Flex flexDir="column" gap={3}>
      <Text fontSize="xl" fontWeight="bold">
        Platforms
      </Text>
      <Flex flexDir="column" gap={2}>
        {platforms?.results.slice(0, expand ? 6 : 3).map((platform) => (
          <Platform key={platform.id} platform={platform} />
        ))}
      </Flex>
      {platforms?.results && (
        <HideAndShowSideItems
          expand={expand}
          onClick={() => setExpand(!expand)}
        />
      )}
    </Flex>
  );
};

const Platform = ({ platform }: { platform: PlatformModel }) => {
  const PlatformIcon = iconMap[`${platform.slug}`];

  return (
    <Link>
      <HStack key={platform.id}>
        <Avatar.Root shape="rounded" size="sm">
          <Icon size="md">
            <PlatformIcon />
          </Icon>
        </Avatar.Root>
        <Text>{platform.name}</Text>
      </HStack>
    </Link>
  );
};

export default PlatformsList;
