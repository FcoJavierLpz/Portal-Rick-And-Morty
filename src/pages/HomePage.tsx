import { Box, Grid, GridItem, Heading, Show } from '@chakra-ui/react'
import CharacterList from '../components/CharacterList'
import LastVisitedCharacters from '../components/LastVisitedCharacters'

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`
      }}
      templateColumns={{
        base: '1fr',
        lg: '250px 1fr'
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <LastVisitedCharacters />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Heading as="h1" marginY={5} fontSize="5xl">
          <Box paddingLeft={2}>Personajes</Box>
        </Heading>
        <CharacterList />
      </GridItem>
    </Grid>
  )
}

export default HomePage
