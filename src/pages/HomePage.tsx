import { Grid, GridItem } from '@chakra-ui/react'
import CharacterList from '../components/CharacterList'

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
      <GridItem area="main">
        <CharacterList />
      </GridItem>
    </Grid>
  )
}

export default HomePage
