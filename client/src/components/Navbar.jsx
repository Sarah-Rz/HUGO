 import {
    Box, 
    Flex, 
    HStack, 
    Link, 
    IconButton, 
    Icon, 
    Text, 
    useDisclosure, 
    Button, 
    Stack, 
    useColorModeValue, 
    useColorMode
} from '@chakra-ui/react';
 import {Link as ReactLink} from 'react-router-dom';
 import {HamburgerIcon, CloseIcon, MoonIcon, SunIcon} from '@chakra-ui/icons';
 import {SiStylelint} from 'react-icons/si';

 const Navbar = () => {
    const {isOpen, onClose, onOpen} = useDisclosure()
    const {colorMode, toggleColorMode} = useColorMode()
   return (
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
       <Flex h={16} alignItems='center' justifyContent='space-between'>
            <IconButton 
            size='md' 
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen}
            />
            <HStack>
                <Link as={ReactLink} to='/'>
                    <Flex>
                        <Icon as={SiStylelint} h={6} w={6}/>
                        <Text fontWeight='bold' color='red.700'>HUGO SHOP</Text>
                    </Flex>
                </Link>
            </HStack>

       </Flex>

    </Box>
   )
 }
 
 export default Navbar
 