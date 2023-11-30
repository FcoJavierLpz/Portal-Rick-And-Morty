import { useEffect } from 'react'
import {
  Box,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
  Spinner,
  Text
} from '@chakra-ui/react'
import { useParams } from 'react-router-dom'
import useCharacter from '../hooks/useCharacter'
import { Location } from '../interfaces/Character'
import { useLastVisitedCharactersStore } from '../store'

const DetailSection = ({ title, data }: { title: string; data: Location }) => (
  <>
    <Heading mt={4} size="md" color="brand.green">
      {title}:
    </Heading>
    <Box>
      {Object.entries(data).map(([key, value]) => (
        <Text key={key} mb={2} color="gray.600">
          <strong>{key}:</strong> {value || 'N/A'}
        </Text>
      ))}
    </Box>
  </>
)

const CharacterDetailPage = () => {
  const { slug } = useParams()
  const { data: character, isLoading, error } = useCharacter(slug!)
  const addLastVisitedCharacter = useLastVisitedCharactersStore(
    state => state.addLastVisitedCharacter
  )

  useEffect(() => {
    if (character) {
      addLastVisitedCharacter(character)
    }
  }, [addLastVisitedCharacter, character])

  if (isLoading) return <Spinner />

  if (error || !character) throw error

  return (
    <SimpleGrid
      templateColumns={{ base: '1fr', md: '1fr 1fr' }}
      gap={5}
      p={5}
      maxW="800px"
      margin="auto"
    >
      <GridItem>
        <Image src={character.image} alt={character.name} borderRadius="md" />
      </GridItem>
      <GridItem>
        <Heading mb={4} color="brand.green">
          {character.name}
        </Heading>
        <Box>
          <Text mb={2} color="gray.600">
            <strong>Estado:</strong> {character.status}
          </Text>
          <Text mb={2} color="gray.600">
            <strong>Especie:</strong> {character.species}
          </Text>
          <Text mb={2} color="gray.600">
            <strong>Tipo:</strong> {character.type || 'N/A'}
          </Text>
          <Text mb={2} color="gray.600">
            <strong>Género:</strong> {character.gender}
          </Text>
        </Box>
        <DetailSection title="Origen" data={character.origin} />
        <DetailSection title="Ubicación" data={character.location} />
      </GridItem>
    </SimpleGrid>
  )
}

export default CharacterDetailPage
