import { server } from './src/mocks/node'

beforeAll(() => {
  // Start the interception.
  server.listen()
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: query === '(min-width: 545px)',
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  })
})

afterEach(() => {
  // Remove any handlers you may have added
  // in individual tests (runtime handlers).
  server.resetHandlers()
})

afterAll(() => {
  // Disable request interception and clean up.
  server.close()
})
