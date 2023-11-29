import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import CharacterList from './components/CharacterList' // Asegúrate de la ruta correcta

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          aside
        </GridItem>
      </Show>
      <GridItem area="main">
        <CharacterList />
      </GridItem>
    </Grid>
  )
}

export default App
