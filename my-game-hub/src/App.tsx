import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr'
        }}
      >
        <GridItem pl="2" area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem pl="2"  area="aside" paddingX={5}>
            <GenreList />
          </GridItem>
        </Show>
        <GridItem pl="2" bg="green.300" area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
