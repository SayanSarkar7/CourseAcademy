import {
  Avatar,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/Sachin Tendulkar driving the ball to all parts.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';
import termsandconditions from "../../assets/docs/termsandconditions";



const VideoPlayer = () => {
  const videoCss = {
    position: 'absolute', // Position it in the center
    top: '50%', // Center vertically
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -50%)', // Center it precisely
    width: ['90%', '80%', '60%'], // Different widths for mobile, tablet, and desktop
    height: ['auto', 'auto', '80%'], // Auto height for smaller screens, 80% for desktop
    maxHeight: '100%',
    objectFit: 'contain',
    borderRadius: '5px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  const containerCss = {
    position: 'relative', // Needed for absolute positioning within this container
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Optional, helps to manage overflow
  };

  return (
    <Box style={containerCss}>
      <video
        src={introVideo}
        controls
        autoPlay
        muted
        controlsList="nodownload nofullscreen noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        style={videoCss}
      ></video>
    </Box>
  );
};

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar
          src={'https://avatars.githubusercontent.com/u/59470407?v=4'}
          boxSize={['40', '48']}
        />
        <Text children={'Co-Founder'} opacity={'0.7'} />
      </VStack>
      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children={'Sayan Sarkar'} size={['md', 'xl']} />
        <Text
          children={`Hi, I am a full-stack developer.`}
          textAlign={['center', 'left']}
        />
      </VStack>
    </Stack>
  );
};
const TandC = ({ termsAndCondition }) => {
  return (
    <Box>
      <Heading
        children={'Terms & Conditions'}
        size={'md'}
        textAlign={['center', 'left']}
        my={'4'}
      />
      <Box p={'4'} h={'sm'} overflowY={'scroll'} >
        <Text
          letterSpacing={'widest'}
          textAlign={['center', 'left']}
          fontFamily={'heading'}
        >
          {termsAndCondition}
        </Text>
        <Heading
          children={'Refund only applicable for cancellation with in 7 days.'}
          my={'4'}
          size={'xs'}
        />
      </Box>
    </Box>
  );
};
const About = () => {
  return (
    <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
      <Heading children={'About Page'} textAlign={['center', 'left']} />
      <Founder />
      <Stack m={'8'} direction={['column', 'row']} alignItems={'center'}>
        <Text fontFamily={'cursive'} m={'8'} textAlign={['center', 'left']}>
          We are a video streaming platform with some premium courses available
          only for premium users.
        </Text>
        <Link to={'/subscribe'}>
          <Button colorScheme={'yellow'} variant={'ghost'}>
            Checkout Our Plan
          </Button>
        </Link>
      </Stack>
      <VideoPlayer />
      <TandC termsAndCondition={termsandconditions} />
      <HStack my={'4'} p={'4'}>
        <RiSecurePaymentFill />
        <Heading
          children={'Payment is secured by RazorPay'}
          textTransform={'uppercase'}
          size={'xs'}
          fontFamily={'sans-serif'}
        />
      </HStack>
    </Container>
  );
};

export default About;
