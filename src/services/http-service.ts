import apiClient from './api-client'
import { Info } from '../interfaces/Character'
import { AxiosRequestConfig } from 'axios'

export interface FetchResponse<T> {
  info: Info
  results: T[]
}

class HttpService<T> {
  endpoint: string

  constructor(endpoint: string) {
    this.endpoint = endpoint
  }

  getAll = (config: AxiosRequestConfig) => {
    return apiClient
      .get<FetchResponse<T>>(this.endpoint, config)
      .then(res => res.data)
  }

  get = (id: number | string) => {
    return apiClient.get<T>(this.endpoint + '/' + id).then(res => res.data)
  }
}

const create = <T>(endpoint: string) => new HttpService<T>(endpoint)

export default create
