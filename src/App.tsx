import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import GamesList from "./components/GamesList";

const App = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }}
      gap={5}
      px={5}
    >
      <GridItem colSpan={12} as="header">
        <Header />
      </GridItem>
      <GridItem display={{ base: "none", md: "block" }} colSpan={3} as="aside">
        Sidebar
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 9 }} as="aside">
        <GamesList />
      </GridItem>
    </Grid>
  );
};

export default App;
