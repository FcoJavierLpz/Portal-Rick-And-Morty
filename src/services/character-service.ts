import Character from '../interfaces/Character'
import createHttpService from './http-service'

const characterService = createHttpService('/character')

export const getAllCharacters = () =>
  characterService
    .getAll<{ results?: Character[] }>()
    .then(response => response.data)

export const getCharacterById = (id: number) =>
  characterService.getById<Character>(id).then(response => response.data)
