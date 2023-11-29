import Character from '../interfaces/Character'
import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'

interface Props {
  character: Character
}

const CharacterCard = ({ character }: Props) => {
  return (
    <Card>
      <Image src={character.image} />
      <CardBody>
        <Heading fontSize="2xl">{character.name}</Heading>
        <Text color="gray.300">{character.species}</Text>
      </CardBody>
    </Card>
  )
}

export default CharacterCard
