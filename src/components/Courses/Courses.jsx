import {
  Button,
  Container,
  Heading,
  HStack,
  Image,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';

const Course = ({
  views,
  title,
  imgSrc,
  id,
  addToPlaylistHandler,
  creator,
  description,
  lectureCount,
}) => {
  return (
    <VStack className={'course'} alignItems={['center', 'flex-start']}>
      <Image src={imgSrc} boxSize={'60'} objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW={'200px'}
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text
        fontWeight={'bold'}
        textTransform={'uppercase'}
        children={'creator'}
      />
      <Text
        fontFamily={'body'}
        textTransform={'uppercase'}
        children={creator}
      />
      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Lectures - ${lectureCount}`}
        textTransform={'uppercase'}
      />
      <Heading
        textAlign={'center'}
        size={'xs'}
        children={`Views - ${views}`}
        textTransform={'uppercase'}
      />
      <Stack direction={['column', 'row']} alignItems={'center'}>
        <Link to={`course/${id}`}>
          <Button colorScheme={'yellow'}>Watch Now</Button>
        </Link>
        <Button
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add To Playlist
        </Button>
      </Stack>
    </VStack>
  );
};

const Courses = () => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const categories = [
    'Web Development',
    'App Development',
    'Data Science',
    'Artificial Intelligence',
    'Data Structure & Algorithm',
    'Game Development',
  ];

  const addToPlaylistHandler = () => {
    console.log('added to playlist');
  };

  return (
    <Container minH={'95vh'} maxW={'container.lg'} paddingY={'8'}>
      <Heading children={'all courses'} m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        type="text"
        borderColor={'yellow.200'}
        focusBorderColor={'yellow.500'}
        placeholder={'Search a course...'}
      />
      <HStack style={{ flexWrap: 'wrap' }} paddingY={'8'}>
        {categories.map((item, index) => {
          return (
            <Button
              key={index}
              onClick={() => {
                setCategory(index);
              }}
              minW={'60'}
            >
              <Text children={item} />
            </Button>
          );
        })}
      </HStack>
      <Stack
        direction={['column', 'row']}
        flexWrap={'wrap'}
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        <Course
          views={23}
          title={'sample'}
          imgSrc={
            'https://cdn.pixabay.com/photo/2024/10/26/14/12/ai-generated-9151277_1280.jpg'
          }
          id={'sample'}
          creator={'sample boy'}
          description={'sample'}
          lectureCount={2}
          addToPlaylistHandler={addToPlaylistHandler}
        />
      </Stack>
    </Container>
  );
};

export default Courses;
