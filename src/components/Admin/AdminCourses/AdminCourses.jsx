import { Box, Grid } from '@chakra-ui/react';
import React from 'react';
import cursor1 from '../../../assets/images/cursor2.png';
import Sidebar from "../Sidebar";


const AdminCourses = () => {
  return (
    <Grid
      templateColumns={['1fr', '5fr 1fr']}
      minH={'100vh'}
      css={{
        cursor: `url(${cursor1}) 16 16, pointer`, // Ensuring fallback and hot spot
      }}
    >
      <Box></Box>
      <Sidebar />
    </Grid>
  );
};

export default AdminCourses;