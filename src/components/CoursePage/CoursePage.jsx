import { Box, Grid, Heading, Text, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import introVideo from '../../assets/videos/Sachin Tendulkar driving the ball to all parts.mp4';
import { disableContextMenu } from '../../App';

const CoursePage = () => {
  disableContextMenu();
  const [lectureNumber, setLectureNumber] = useState(0);

  const lectures = [
    {
      _id: 'eiijuri',
      title: 'sample dilulu solulu',
      description: 'giarueigeq descriptional de spanial',
      video: {
        url: 'skjrabuierbgugiuergi',
      },
    },
    {
      _id: 'eiijuri_2',
      title: 'sample dilulu solulu 2',
      description: 'giarueigeq descriptional de spanial la ros',
      video: {
        url: 'skjrabuierbgugiuergi',
      },
    },
    {
      _id: 'eiijuri_3',
      title: 'sample dilulu solulu 3',
      description: 'giarueigeq descriptional de spanial hala madrid',
      video: {
        url: 'skjrabuierbgugiuergi',
      },
    },
  ];
  return (
    <Grid templateColumns={['1fr', '3fr 1fr']} minH={'90vh'}>
      <Box>
        <video
          width={'100%'}
          src={introVideo}
          controls
          autoPlay
          muted
          controlsList="nodownload noremoteplayback"
          disablePictureInPicture
          disableRemotePlayback
        ></video>
        <Heading
        noOfLines={1}
          m={'4'}
          children={`#${lectureNumber + 1} ${lectures[lectureNumber].title}`}
        />
        <Heading m={'4'} children={'Description'} />
        <Text m={'4'} children={lectures[lectureNumber].description} />
      </Box>
      <VStack>
        {lectures.map((element, index) => (
          <button
            onClick={()=>setLectureNumber(index)}
            key={element._id}
            style={{
              width: '100%',
              padding: '1rem',
              textAlign: 'center',
              margin: '0',
              borderBottom: '1px solid rgba(0,0,0,0.2)',
            }}
          >
            <Text noOfLines={1}>
              #{index + 1} {element.title}
            </Text>
          </button>
        ))}
      </VStack>
    </Grid>
  );
};

export default CoursePage;
