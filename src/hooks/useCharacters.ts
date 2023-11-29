import { useEffect, useState } from 'react'
import Character from '../interfaces/Character'
import { UseQueryResult, useQuery } from 'react-query'
import { getAllCharacters } from '../services/character-service'

const useCharacters = () => {
  const [characters, setCharacters] = useState<Character[]>([])

  const {
    data,
    isLoading,
    isError
  }: UseQueryResult<{ results: Character[] }, Error> = useQuery(
    'characters',
    getAllCharacters
  )

  useEffect(() => {
    if (data) {
      setCharacters(data?.results ?? [])
    }
  }, [data])

  return { characters, isLoading, isError }
}

export default useCharacters
