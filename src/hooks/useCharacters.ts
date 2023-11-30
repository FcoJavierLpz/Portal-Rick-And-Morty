import { useInfiniteQuery } from '@tanstack/react-query'
import { Character } from '../interfaces/Character'
import { FetchResponse, CharacterQuery } from '../services/http-service'
import characterService from '../services/character-service'

const useCharacters = (characterQuery: CharacterQuery) => {
  return useInfiniteQuery<FetchResponse<Character>, Error>({
    queryKey: ['characters', characterQuery],
    queryFn: ({ pageParam }) =>
      characterService.getAll({
        params: { ...characterQuery, page: pageParam }
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.info.next ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000
  })
}

export default useCharacters
