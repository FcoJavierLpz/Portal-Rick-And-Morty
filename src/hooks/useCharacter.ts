import { useQuery } from '@tanstack/react-query'
import characterService from '../services/character-service'

const useCharacter = (slug: string) =>
  useQuery({
    queryKey: ['character', slug],
    queryFn: () => characterService.get(slug)
  })

export default useCharacter
