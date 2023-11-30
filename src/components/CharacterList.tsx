import { Link } from 'react-router-dom'
import { Text, SimpleGrid, Spinner } from '@chakra-ui/react'

import useCharacters from '../hooks/useCharacters'
import CharacterCard from './CharacterCard'
import CharacterCardSkeleton from './CharacterCardSkeleton'
import CharacterCardContainer from './CharacterCardContainer'
import InfiniteScroll from 'react-infinite-scroll-component'
import React from 'react'

const CharacterList: React.FC = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage } = useCharacters()
  const skeletons = Array.from({ length: 5 }, (_, i) => i)

  if (error)
    return (
      <Text fontSize="3xl" color="red.500">
        {error?.message}
      </Text>
    )

  const fetchedCharactersCount =
    data?.pages.reduce((total, page) => total + page.results.length, 0) ?? 0

  return (
    <InfiniteScroll
      dataLength={fetchedCharactersCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={6}
      >
        {isLoading &&
          skeletons.map(skeleton => (
            <CharacterCardContainer key={skeleton}>
              <CharacterCardSkeleton />
            </CharacterCardContainer>
          ))}

        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map(character => (
              <Link key={character.id} to={`/character/${character.id}`}>
                <CharacterCardContainer key={character.id}>
                  <CharacterCard character={character} />
                </CharacterCardContainer>
              </Link>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  )
}

export default CharacterList
