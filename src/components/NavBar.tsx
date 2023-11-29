import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/logo.jpeg'
import ColorModeSwitch from './ColorModeSwitch'

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image
        src={logo}
        boxSize="100px"
        margin={5}
        borderRadius="full"
        transition="transform 0.2s ease-in-out"
        _hover={{ transform: 'scale(1.1)' }}
      />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
