import { render, screen } from '@testing-library/react'
import CharacterCard from '../../components/CharacterCard'
import { Character } from '../../interfaces/Character'

describe('CharacterCard', () => {
  const mockCharacter: Character = {
    id: 1,
    name: 'Rick Sanchez',
    image: 'rick.jpg',
    species: 'Human'
  }

  it('renders character information correctly', () => {
    render(<CharacterCard character={mockCharacter} />)

    expect(screen.getByText('Rick Sanchez')).toBeTruthy()

    expect(screen.getByText('Human')).toBeTruthy()

    const characterImage: HTMLImageElement = screen.getByAltText('Rick Sanchez')
    expect(characterImage.src).toContain('rick.jpg')
    expect(characterImage.alt).toBe('Rick Sanchez')
  })
})
