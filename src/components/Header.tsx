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
import { useRef } from "react";
import useGameQueryStore from "../stores/game-query-store";

const Header = () => {
  const onSearch = useGameQueryStore((s) => s.onSearch);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    if (searchRef.current && searchRef.current.value) {
      onSearch(searchRef.current.value);

      searchRef.current.value = "";
    }
  };

  return (
    <HStack gap={5} py={3}>
      <Image src="/logo.webp" alt="Logo" width={16} />
      <Group attached w="full" mr={2}>
        <Input ref={searchRef} placeholder="Search games..." />
        <IconButton onClick={handleSearch}>
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
