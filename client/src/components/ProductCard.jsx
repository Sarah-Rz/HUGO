import { 
    Flex,
     Circle, 
     Box, 
     Image, 
     Badge, 
     useColorModeValue, 
     Icon, 
     Button, 
     Tooltip, 
     Stack, 
     Link, 
     HStack, 
     Text,
} from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link as ReactLink } from 'react-router-dom';
import { StarIcon } from '@chakra-ui/icons';
import { useState } from 'react';

const Rating = ({ rating, numReviews }) => {
  const { iconSize, setIconSize } = useState('14px');
  return (
    <Flex>
      <HStack spacing='2px'>
        <StarIcon size={iconSize} w='14px' color='yellow.500' />
        <StarIcon size={iconSize} w='14px' color={rating >=2 ? 'yellow.500' : 'gray.200'} />
        <StarIcon size={iconSize} w='14px' color={rating >=3 ? 'yellow.500' : 'gray.200'} />
        <StarIcon size={iconSize} w='14px' color={rating >=4 ? 'yellow.500' : 'gray.200'} />
        <StarIcon size={iconSize} w='14px' color={rating >=5 ? 'yellow.500' : 'gray.200'} />
      </HStack>
      <Text fontSize='md' fontWeight='bold' ml='4px'>
        {`${numReviews} ${numReviews === 1 ? 'Review' : 'Reviews'}`}
      </Text>
    </Flex>
  )
}

const ProductCard = ({product}) => {
  return (
    <Stack
    p='2'
    spacing='3px'
    bg={useColorModeValue('white', 'gray.800')}
    minW= '240px'
    h='450px'
    borderWidth='1px'
    rounded='lg'
    shadow='lg'
    position='relative'>

    {product.isNew && <Circle size='10px' position='absolute' top={2} right={2} bg='green.300' />}
    {product.stock <= 0 && <Circle size='10px' position='absolute' top={2} right={2} bg='red.300' />}

    <Image src={product.image} alt={product.name} roundedTop='lg' />
  
    <Box flex={1} maxH={5} alignItems='baseline'>
      {product.stock <= 0 && (
        <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='red'>
          Sold out
        </Badge>
      )}
      {product.isNew && (
        <Badge rounded='full' px='2' fontSize='0.8em' colorScheme='green'>
          New
        </Badge>
      )}
    </Box>  

    <Flex mt='1' justifyContent='space-between' alignContent='center'>
        <Link as={ReactLink} to={`/product${product._id}`} pt='2' cursor='pointer' _hover={{ textDecoration: 'none', color: 'gray.600'}}>
          <Box fontSize='2xl' fontWeight='semibold' lineHeight='tight'>
            {product.name}
          </Box>
        </Link>
    </Flex>

    <Flex justifyContent='space-between' alignContent='center' py='2'>
      <Rating rating={product.rating} numReviews={product.numReviews} />
    </Flex>

    <Box flex={1} maxH={5} alignItems='baseline' fontSize='2xl' color={useColorModeValue('gray.800', 'white')}>
          <Box as='span' textDecoration='line-through' color={'red.200'} fontSize='md'>
            {product.compare_at_price && '$'}
            {product.compare_at_price}
          </Box>
    </Box>

    <Flex justify='space-between' pt={2}>
        <Box fontSize='2xl' color={useColorModeValue('gray.800', 'gray.100')}>
          <Box as='span' color={'gray.600'} fontSize='lg'>
             $
          </Box>
          {product.price.toFixed(2)}
        </Box>
        {product.stock > 0 && (  
        <Tooltip label='Add to cart' bg='green.100' placement='top' color='gray.800' fontSize='1em'>  
          <Button variant='ghost' display='flex'>
            <Icon as={FiShoppingCart} h={6} w={6} alignSelf='center' color='green.300'/>
          </Button>
        </Tooltip> 
        )}   
    </Flex>

    </Stack>
  );
}

export default ProductCard
