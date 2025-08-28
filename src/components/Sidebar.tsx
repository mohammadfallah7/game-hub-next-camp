import { Flex } from "@chakra-ui/react";
import PlatformsList from "./PlatformsList";

const Sidebar = () => {
  return (
    <Flex as="aside" flexDir="column" gap={4}>
      <PlatformsList />
    </Flex>
  );
};

export default Sidebar;
