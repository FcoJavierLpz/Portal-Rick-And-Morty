export interface Location {
  name: string
  url: string
}

interface Episode {
  name: string
  url: string
}

export interface Character {
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

export interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}
