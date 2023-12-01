import { render, screen, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider } from '@chakra-ui/react'
import CharacterList from '../../components/CharacterList'
import ErrorBoundary from '../../components/ErrorBoundary'
import theme from '../../theme'

const queryClient = new QueryClient()

describe('CharacterList', () => {
  it('renders characters correctly', async () => {
    render(
      <ErrorBoundary>
        <ChakraProvider theme={theme}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <CharacterList />
            </BrowserRouter>
          </QueryClientProvider>
        </ChakraProvider>
      </ErrorBoundary>
    )

    await waitFor(() => {
      expect(screen.getByText('Rick Sanchez')).toBeTruthy()
    })
  })
})
