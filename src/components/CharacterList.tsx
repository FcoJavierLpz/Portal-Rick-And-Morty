import { Link } from 'react-router-dom'
import { Text, SimpleGrid } from '@chakra-ui/react'

import useCharacters from '../hooks/useCharacters'
import CharacterCard from './CharacterCard'
import CharacterCardSkeleton from './CharacterCardSkeleton'
import CharacterCardContainer from './CharacterCardContainer'

const CharacterList: React.FC = () => {
  const { data: characters, isLoading, error } = useCharacters({ page: 1 })
  const skeletons = Array.from({ length: 5 }, (_, i) => i)
  if (error)
    return (
      <Text fontSize="3xl" color="orangered">
        {error?.message}
      </Text>
    )

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      padding="10px"
      spacing={6}
    >
      {isLoading &&
        skeletons.map(skeleton => (
          <CharacterCardContainer key={skeleton}>
            <CharacterCardSkeleton />
          </CharacterCardContainer>
        ))}
      {characters?.results?.map(character => (
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
