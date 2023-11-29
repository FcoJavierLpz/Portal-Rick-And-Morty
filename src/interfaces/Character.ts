interface Location {
  name: string
  url: string
}

interface Episode {
  name: string
  url: string
}

interface Character {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Location
  location: Location
  image: string
  episode: Episode[]
  url: string
  created: string
}

export default Character
