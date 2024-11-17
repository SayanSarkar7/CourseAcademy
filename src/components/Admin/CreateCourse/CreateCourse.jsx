import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import cursor1 from '../../../assets/images/cursor2.png';
import Sidebar from '../Sidebar';
import { fileUploadCss } from '../../Auth/Register';



export const changeImageHandler = (e, setImagePrev, setImage) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setImagePrev(reader.result);
    setImage(file);
  };
};



const CreateCourse = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [createdBy, setCreatedBy] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');
  const categories = [
    'Web Development',
    'App Development',
    'Data Science',
    'Artificial Intelligence',
    'Data Structure & Algorithm',
    'Game Development',
  ];

  return (
    <Grid
      templateColumns={['1fr', '5fr 1fr']}
      minH={'100vh'}
      css={{
        cursor: `url(${cursor1}) 16 16, pointer`, // Ensuring fallback and hot spot
      }}
    >
      <Container py={'16'}>
        <form>
          <Heading
            textTransform={'uppercase'}
            children={'Create Course'}
            my={'16'}
            textAlign={['center', 'left']}
          />
          <VStack m={'auto'} spacing={'8'}>
            <Input
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder={'Name'}
              type={'text'}
              focusBorderColor={'purple.300'}
            />
            <Input
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder={'Description'}
              type={'text'}
              focusBorderColor={'purple.300'}
            />
            <Input
              value={createdBy}
              onChange={e => setCreatedBy(e.target.value)}
              placeholder={'Creator Name'}
              type={'text'}
              focusBorderColor={'purple.300'}
            />
            <Select
              focusBorderColor={'purple.300'}
              value={category}
              onChange={e => setCategory(e.target.value)}
            >
              <option value={''}>Category</option>
              {categories.map((item, index) => (
                <option key={index} value={item}>
                  {item}
                </option>
              ))}
            </Select>
            <Input
              accept={'image/*'}
              required
              id={'chooseAvatar'}
              type="file"
              focusBorderColor="purple.300"
              css={{
                '&::file-selector-button': {
                  ...fileUploadCss,
                  color: 'purple',
                },
              }}
              onChange={(e) => changeImageHandler(e, setImagePrev, setImage)}
            />
            {imagePrev && (
              <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
            )}
            <Button w={'full'} colorScheme={'purple'} type={'submit'} >Create</Button>
          </VStack>
        </form>
      </Container>
      <Sidebar />
    </Grid>
  );
};

export default CreateCourse;
