import { Grid, GridItem } from "@chakra-ui/react";

const App = () => {
  return (
    <Grid templateColumns={{ base: "1fr", md: "repeat(12, 1fr)" }} gap={5}>
      <GridItem colSpan={12} border="1px solid" as="header">
        Header
      </GridItem>
      <GridItem
        display={{ base: "none", md: "block" }}
        colSpan={3}
        border="1px solid"
        as="aside"
      >
        Sidebar
      </GridItem>
      <GridItem colSpan={{ base: 12, md: 9 }} border="1px solid" as="aside">
        Games
      </GridItem>
    </Grid>
  );
};

export default App;
