import { Box, Heading, HStack, Stack, VStack } from '@chakra-ui/react';
import React from 'react';
import {
  TiSocialYoutubeCircular,
  TiSocialInstagramCircular,
  TiSocialFacebookCircular,
} from 'react-icons/ti';

const Footer = () => {
  return (
    <Box backgroundColor={'blackAlpha.900'} padding={'4'} minH={'10vh'}>
      <Stack direction={['column', 'row']}>
        <VStack alignItems={['center', 'flex-start']} width={'full'}>
          <Heading children={'All Rights Reserved'} color={'white'} />
          <Heading
            children={'@Sayan Sarkar'}
            color={'yellow.400'}
            fontFamily={'body'}
            size={'sm'}
          />
        </VStack>
        <HStack
          spacing={['2', '10']}
          justifyContent={'center'}
          color={'white'}
          fontSize={'50'}
        >
          <a href={'https://www.youtube.com/'} target={'_blank'}>
            <TiSocialYoutubeCircular />
          </a>
          <a href={'https://www.instagram.com/'} target={'_blank'}>
            <TiSocialInstagramCircular />
          </a>
          <a href={'https://www.facebook.com/'} target={'_blank'}>
            <TiSocialFacebookCircular />
          </a>
        </HStack>
      </Stack>
    </Box>
  );
};

export default Footer;
