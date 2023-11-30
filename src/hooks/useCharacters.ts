import { useInfiniteQuery } from '@tanstack/react-query'
import { Character } from '../interfaces/Character'
import { FetchResponse } from '../services/http-service'
import characterService from '../services/character-service'
import { useCharacterQueryStore } from '../store'

const useCharacters = () => {
  const characterQuery = useCharacterQueryStore(s => s.characterQuery)

  return useInfiniteQuery<FetchResponse<Character>, Error>({
    queryKey: ['characters', characterQuery],
    queryFn: ({ pageParam }) =>
      characterService.getAll({
        params: { name: characterQuery.searchText, page: pageParam }
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.info.next ? allPages.length + 1 : undefined
    },
    initialPageParam: 1,
    staleTime: 24 * 60 * 60 * 1000
  })
}

export default useCharacters
