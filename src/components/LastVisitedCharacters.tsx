import React from 'react'
import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem
} from '@chakra-ui/react'
import { useLastVisitedCharactersStore } from '../store'
import { Link } from 'react-router-dom'

const LastVisitedCharacters: React.FC = () => {
  const lastVisitedCharacters = useLastVisitedCharactersStore(
    s => s.lastVisitedCharacters
  )

  return (
    <>
      <Heading fontSize="2xl" marginTop={9} marginBottom={3}>
        Últimos Visitados
      </Heading>
      <List>
        {lastVisitedCharacters.map(character => (
          <ListItem key={character.id} paddingY="5px">
            <HStack>
              <Image
                boxSize="64px"
                borderRadius={8}
                objectFit="cover"
                src={character.image}
              />
              <Link to={`/character/${character.id}`}>
                <Button
                  whiteSpace="normal"
                  textAlign="left"
                  fontSize="md"
                  variant="link"
                >
                  {character.name}
                </Button>
              </Link>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default LastVisitedCharacters
