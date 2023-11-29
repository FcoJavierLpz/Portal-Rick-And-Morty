import { Link } from 'react-router-dom'
import { Text, SimpleGrid } from '@chakra-ui/react'

import useCharacters from '../hooks/useCharacters'
import CharacterCard from './CharacterCard'
import CharacterCardSkeleton from './CharacterCardSkeleton'
import CharacterCardContainer from './CharacterCardContainer'

const CharacterList: React.FC = () => {
  const { characters, isLoading, isError } = useCharacters()
  const skeletons = Array.from({ length: 5 }, (_, i) => i)

  if (isError) return <Text>Error loading characters</Text>

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
      padding="10px"
      spacing={10}
    >
      {isLoading &&
        skeletons.map(skeleton => (
          <CharacterCardContainer key={skeleton}>
            <CharacterCardSkeleton />
          </CharacterCardContainer>
        ))}
      {characters.map(character => (
        <Link key={character.id} to={`/character/${character.id}`}>
          <CharacterCardContainer>
            <CharacterCard character={character} />
          </CharacterCardContainer>
        </Link>
      ))}
    </SimpleGrid>
  )
}

export default CharacterList
