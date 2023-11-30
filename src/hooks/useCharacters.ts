import { Character } from '../interfaces/Character'
import { useQuery } from '@tanstack/react-query'
import { FetchResponse, CharacterQuery } from '../services/http-service'
import characterService from '../services/character-service'

const useCharacters = (characterQuery: CharacterQuery) => {
  return useQuery<FetchResponse<Character>, Error>({
    queryKey: ['characters', characterQuery],
    queryFn: () => characterService.getAll({ params: characterQuery })
  })
}

export default useCharacters
