import {
  Box,
  Button,
  Grid,
  Heading,
  HStack,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React from 'react';
import cursor1 from '../../../assets/images/cursor2.png';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';

const Users = () => {
  const users = [
    {
      _id: 'jhfjhfv834r786387bvdhj',
      name: 'Sayan',
      email: 'sayan@gmail.com',
      role: 'admin',
      subscription: {
        status: 'active',
      },
    },
  ];
  const updateHandler=(userId)=>{
    console.log(userId);
  }
  const deleteButtonHandler=(userId)=>{
    console.log(userId);
  }



  return (
    <Grid
      templateColumns={['1fr', '5fr 1fr']}
      minH={'100vh'}
      css={{
        cursor: `url(${cursor1}) 16 16, pointer`, // Ensuring fallback and hot spot
      }}
    >
      <Box p={['0', '16']} overflowX={'auto'} >
        <Heading
          children={'All Users'}
          textTransform={'uppercase'}
          textAlign={['center', 'left']}
          my={'16'}
        />
        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size={'lg'}>
            <TableCaption>All available users in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>Subscription</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map(item => (
                <Row item={item} key={item._id} updateHandler={updateHandler} deleteButtonHandler={deleteButtonHandler} />
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

function Row({ item, updateHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>{item.subscription.status === 'active' ? 'Active' : 'Not Active'}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            variant={'outline'}
            color={'purple.500'}
            onClick={() => updateHandler(item._id)}
          >
            Change Role
          </Button>
          <Button
            color={'purple.600'}
            onClick={() => deleteButtonHandler(item._id)}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}
