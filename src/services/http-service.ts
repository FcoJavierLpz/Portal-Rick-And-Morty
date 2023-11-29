import apiClient from './api-client'

class HttpService {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll<T>() {
    return apiClient.get<T[]>(this.endpoint)
  }

  getById<T>(id: number) {
    return apiClient.get<T>(`${this.endpoint}/${id}`)
  }
}

const create = (endpoint: string) => new HttpService(endpoint)

export default create
