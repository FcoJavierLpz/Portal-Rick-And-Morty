import { HStack, Image } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpeg'
import ColorModeSwitch from './ColorModeSwitch'
import SearchInput from './SearchInput'

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image
          src={logo}
          boxSize="100px"
          margin={5}
          borderRadius="full"
          transition="transform 0.2s ease-in-out"
          _hover={{ transform: 'scale(1.1)' }}
          objectFit="cover"
        />
      </Link>
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
