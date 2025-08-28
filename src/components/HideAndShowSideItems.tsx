import { Avatar, HStack, Icon, Text } from "@chakra-ui/react";
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const HideAndShowSideItems = ({
  expand,
  onClick,
}: {
  expand: boolean;
  onClick: () => void;
}) => {
  return (
    <HStack onClick={onClick} opacity={0.6} cursor="pointer">
      <Avatar.Root shape="rounded" size="sm">
        <Icon size="md">{expand ? <LuChevronUp /> : <LuChevronDown />}</Icon>
      </Avatar.Root>
      <Text>{expand ? "Hide" : "Show"}</Text>
    </HStack>
  );
};

export default HideAndShowSideItems;
