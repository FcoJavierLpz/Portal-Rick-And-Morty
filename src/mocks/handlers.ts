// handlers.ts
import { http, HttpResponse } from 'msw'
import config from '../config.json'

export const handlers = [
  http.get(config.baseURL + '/character', () => {
    const response = HttpResponse.json({
      info: { count: 1, pages: 1, next: null, prev: null },
      results: [
        { id: 1, name: 'Rick Sanchez', image: 'rick.jpg', species: 'Human' }
      ]
    })

    return response
  })
]
