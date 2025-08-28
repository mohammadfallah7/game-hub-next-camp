import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import GamesList from "./components/GamesList";
import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(6, 1fr)" }}
      gap={5}
      px={5}
    >
      <GridItem colSpan={6} as="header">
        <Header />
      </GridItem>
      <GridItem display={{ base: "none", md: "block" }} colSpan={1} as="aside">
        <Sidebar />
      </GridItem>
      <GridItem colSpan={{ base: 6, md: 5 }} as="aside">
        <GamesList />
      </GridItem>
    </Grid>
  );
};

export default App;
