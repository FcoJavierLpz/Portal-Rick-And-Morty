import { create } from 'zustand'

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

export default useCharacterQueryStore
