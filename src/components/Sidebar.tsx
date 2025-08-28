import { Flex } from "@chakra-ui/react";
import PlatformsList from "./PlatformsList";
import GenresList from "./GenresList";

const Sidebar = () => {
  return (
    <Flex as="aside" flexDir="column" gap={8}>
      <PlatformsList />
      <GenresList />
    </Flex>
  );
};

export default Sidebar;
