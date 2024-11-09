import { Box, Button, Container, Heading, Text, VStack } from '@chakra-ui/react';
import React from 'react'

const Subscribe = () => {
  return (
    <Container p={'16'} minH={'90vh'}>
        <Heading children={'Welcome'} my={'8'} textAlign={'center'}/>
        <VStack boxShadow={'lg'} alignItems={'stretch'} borderRadius={'lg'} spacing={'0'} >
            <Box bg={'yellow.400'} p={'4'} css={{borderRadius:"8px 8px 0 0"}} >
                <Text children={`Pro Pack- ₹299.00`} color={'black'}/>
            </Box>
            <Box p={'4'}>
                <VStack textAlign={'center'} px={'8'} mt={'4'} spacing={'8'} >
                    <Text  children={`Join pro pack to access all content.`}/>
                    <Heading children={'₹299 Only'} size={'md'} />
                </VStack>
                <Button colorScheme={'yellow'} my={'8'} w={'full'} >Buy Now</Button>
            </Box>
            <Box color={'white'} bg={'blackAlpha.600'} css={{borderRadius:"0 0 8px 8px"}}  p={'4'} >
            <Heading children={'100% refundable on cancellation'} size={'sm'} textTransform={'uppercase'} />
                <Text size={'xs'} children={'*Terms & Conditions Apply'} />
            </Box>
        </VStack>
    </Container>
  )
}

export default Subscribe;