import {
  Box,
  Button,
  Grid,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { RiCloseFill, RiCloseLine, RiDeleteBin7Fill } from 'react-icons/ri';
import { fileUploadCss } from '../../Auth/Register';

export const changeVideoHandler = (e, setVideoPrev, setVideo) => {
  const file = e.target.files[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onloadend = () => {
    setVideoPrev(reader.result);
    setVideo(file);
  };
};

const CourseModal = ({
  isOpen,
  onClose,
  id,
  deleteButtonHandler,
  courseTitle,
  addLectureHandler,
  lectures = [1,2,3,4,5,6,7,8],
}) => {
  // console.log(onClose);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [video, setVideo] = useState('');
  const [videoPrev, setVideoPrev] = useState('');

  const closeHandler=()=>{
    setTitle('');
    setDescription('');
    setVideo('');
    setVideoPrev('');
    onClose();
  }

  return (
    <Modal isOpen={isOpen} size={'full'} onClose={closeHandler} scrollBehavior={'outside'} >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{courseTitle}</ModalHeader>
        <ModalCloseButton  />
        {/* <Button w={'5%'} alignItems={'center'} borderRadius={'2xl'} ml={'auto'} onClick={onClose}>
          <RiCloseFill />
        </Button> */}
        <ModalBody>
          <Grid templateColumns={['1fr', '3fr 1fr']}>
            <Box px={['0', '16']}>
              <Box my={'5'}>
                <Heading children={courseTitle} />
                <Heading children={`#${id}`} size={'sm'} opacity={0.4} />
              </Box>
              <Heading children={'Lectures'} size={'lg'} />
              
              {lectures.map((item,index)=>(
                <VideoCard
                key={index}
                title="React Intro"
                description={
                  'This is a intro lecture, where you will know the basics of react'
                }
                num={index+1}
                lectureId="vfhbd78888gnjfbj8kjbgn"
                courseId={id}
                deleteButtonHandler={deleteButtonHandler}
              />  
              ))}
            </Box>
            <Box>
              <form
                onSubmit={e =>
                  addLectureHandler(e, id, title, description, video)
                }
              >
                <VStack spacing={'4'}>
                  <Heading
                    children={'Add Lecture'}
                    size={'md'}
                    textTransform={'uppercase'}
                  />
                  <Input
                    placeholder={'Title'}
                    focusBorderColor={'purple.300'}
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                  />
                  <Input
                    placeholder={'Description'}
                    focusBorderColor={'purple.300'}
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                  />
                  <Input
                    accept={'video/mp4'}
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
                    onChange={e =>
                      changeVideoHandler(e, setVideoPrev, setVideo)
                    }
                  />
                  {videoPrev && (
                    <video
                      controlsList="nodownload"
                      controls
                      src={videoPrev}
                    ></video>
                  )}
                  <Button w={'full'} colorScheme={'purple'} type={'submit'}>
                    Upload
                  </Button>
                </VStack>
              </form>
            </Box>
          </Grid>
        </ModalBody>
        <ModalFooter>
          <Button onClick={closeHandler}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default CourseModal;

function VideoCard({
  title,
  description,
  num,
  lectureId,
  courseId,
  deleteButtonHandler,
}) {
  return (
    <Stack
      direction={['column', 'row']}
      my={'8'}
      borderRadius={'lg'}
      boxShadow={'0 0 10px rgba(107,70,193,0.5) '}
      justifyContent={['flex-start', 'space-between']}
      p={['4', '8']}
    >
      <Box>
        <Heading size={'sm'} children={`#${num} ${title}`} />
        <Text children={description} />
      </Box>
      <Button
        color={'purple.600'}
        onClick={() => deleteButtonHandler(courseId, lectureId)}
      >
        <RiDeleteBin7Fill />
      </Button>
    </Stack>
  );
}
