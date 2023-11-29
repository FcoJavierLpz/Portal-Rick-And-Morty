import { Link } from 'react-router-dom'
import { Text, Spinner, SimpleGrid } from '@chakra-ui/react'

import useCharacters from '../hooks/useCharacters'
import CharacterCard from './CharacterCard'

const CharacterList: React.FC = () => {
  const { characters, isLoading, isError } = useCharacters()

  if (isLoading) return <Spinner size="xl" />
  if (isError) return <Text>Error loading characters</Text>

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding="10px"
      spacing={10}
    >
      {characters.map(character => (
        <Link key={character.id} to={`/character/${character.id}`}>
          <CharacterCard character={character} />
        </Link>
      ))}
    </SimpleGrid>
  )
}

export default CharacterList
