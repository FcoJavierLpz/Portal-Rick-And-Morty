import { create } from 'zustand'
import { Character } from './interfaces/Character'

interface CharacterQuery {
  searchText?: string
}

interface CharacterQueryStore {
  characterQuery: CharacterQuery
  setSearchText: (searchText: string) => void
}

const useCharacterQueryStore = create<CharacterQueryStore>(set => ({
  characterQuery: {},
  setSearchText: searchText => set(() => ({ characterQuery: { searchText } }))
}))

interface LastVisitedCharactersStore {
  lastVisitedCharacters: Character[]
  addLastVisitedCharacter: (character: Character) => void
}

const useLastVisitedCharactersStore = create<LastVisitedCharactersStore>(
  set => {
    const storedCharacters = JSON.parse(
      localStorage.getItem('lastVisitedCharacters') || '[]'
    )

    return {
      lastVisitedCharacters: storedCharacters,
      addLastVisitedCharacter: character =>
        set(state => {
          const filteredCharacters = state.lastVisitedCharacters.filter(
            existingCharacter => existingCharacter.id !== character.id
          )

          const updatedCharacters = [character, ...filteredCharacters]

          const limitedCharacters = updatedCharacters.slice(0, 5)

          localStorage.setItem(
            'lastVisitedCharacters',
            JSON.stringify(limitedCharacters)
          )

          return { lastVisitedCharacters: limitedCharacters }
        })
    }
  }
)

export { useCharacterQueryStore, useLastVisitedCharactersStore }
