import {
  HStack,
  Image,
  Input,
  Group,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { ColorModeButton } from "./ui/color-mode";

const Header = () => {
  return (
    <HStack gap={5} py={3}>
      <Image src="/logo.webp" alt="Logo" width={16} />
      <Group attached w="full" mr={2}>
        <Input placeholder="Search games..." />
        <IconButton>
          <Icon size="sm">
            <FaSearch />
          </Icon>
        </IconButton>
      </Group>
      <ColorModeButton />
    </HStack>
  );
};

export default Header;
