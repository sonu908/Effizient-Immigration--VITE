import PropTypes from 'prop-types'; // Import PropTypes
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


const NavLink = (props) => {
  const { children } = props;

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}
    >
      {children}
    </Box>
  );
};

// Add PropTypes validation for the children prop
NavLink.propTypes = {
  children: PropTypes.node, // Use PropTypes.node to specify that children can be any valid JSX
};

function Simple() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} className=' rounded-lg'>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Box>
                 <img src="https://effizient.ca/assets/img/logo.png" alt="" />

            </Box>
            
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}
              >
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Link 1</MenuItem>
                <MenuItem>Link 2</MenuItem>
                <MenuDivider />
                <MenuItem>Link 3</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>


      <p className=" text-2xl font-serif  font-bold tracking-wide">ABOUT US</p>
        <h6 className="tracking-wider font-seriff">
          Effizient Immigration is a proud Canadian company serving people
          around the world to achieve their goals to immigrate to and succeed in
          Canada. The company takes pride in helping people navigate the complex
          and intimidating task of making a big life move and helps clients
          along the way.
        </h6>

      </Box>
    </>
  );
}

export default Simple;
