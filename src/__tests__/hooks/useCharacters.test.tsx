import { ReactNode } from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import useCharacters from '../../hooks/useCharacters'

const queryClient = new QueryClient()

const wrapper = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
)

describe('useCharacters', () => {
  it('fetches characters correctly', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useCharacters(), {
      wrapper
    })

    // Ensure that the hook is in the loading state initially
    expect(result.current.isLoading).toBe(true)

    // Wait for the initial data to be loaded
    await waitForNextUpdate()

    // Assert that the hook is not in the loading state anymore
    expect(result.current.isLoading).toBe(false)

    // Esperado primer personaje en la primera página
    const expectedCharacter = {
      id: 1,
      name: 'Rick Sanchez',
      image: 'rick.jpg',
      species: 'Human'
    }

    // Obtén la primera página de datos
    const firstPage = result.current.data?.pages[0]

    // Verifica si la página existe y contiene resultados
    expect(firstPage).toBeDefined()
    expect(firstPage?.results).toBeDefined()

    // Verifica si el personaje esperado está presente en los resultados
    const isCharacterPresent = firstPage?.results.some(
      character => character.name === expectedCharacter.name
    )

    expect(isCharacterPresent).toBe(true)
  })
})
