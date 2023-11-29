import { Link } from 'react-router-dom'
import { Box, Stack, Text, Spinner } from '@chakra-ui/react'

import useCharacters from '../hooks/useCharacters'

const CharacterList: React.FC = () => {
  const { characters, isLoading, isError } = useCharacters()

  if (isLoading) return <Spinner size="xl" />
  if (isError) return <Text>Error loading characters</Text>

  return (
    <Box p={4}>
      <Stack spacing={4} mt={4}>
        {characters.map(character => (
          <Link key={character.id} to={`/character/${character.id}`}>
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
              _hover={{ shadow: 'md' }}
            >
              <Text fontWeight="bold" fontSize="xl">
                {character.name}
              </Text>
              <Text>{character.species}</Text>
              <Text>{character.gender}</Text>
            </Box>
          </Link>
        ))}
      </Stack>
    </Box>
  )
}

export default CharacterList
