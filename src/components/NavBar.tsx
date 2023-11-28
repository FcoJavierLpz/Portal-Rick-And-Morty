import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="100px" margin={5} />
      <Text fontSize="2xl">Navbar</Text>
    </HStack>
  )
}

export default NavBar
