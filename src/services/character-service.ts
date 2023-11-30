import { Character } from '../interfaces/Character'
import createHttpService from './http-service'

export default createHttpService<Character>('/character')
