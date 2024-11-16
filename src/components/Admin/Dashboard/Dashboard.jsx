import {
  Box,
  Grid,
  Heading,
  HStack,
  Progress,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import cursor1 from '../../../assets/images/cursor2.png';
import Sidebar from '../Sidebar';
import { RiArrowDownLine, RiArrowUpLine } from 'react-icons/ri';
import { DoughnutChart, LineChart } from './Chart';

const Databox = ({ title, qty, qtyPercentage, profit }) => (
  <Box
    w={['full', '20%']}
    boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
    p={'8'}
    borderRadius={'lg'}
  >
    <Text children={title} />
    <HStack spacing={'6'}>
      <Text children={qty} fontWeight={'bold'} fontSize={'2xl'} />

      <HStack>
        <Text children={`${qtyPercentage}%`} />
        {profit ? (
          <RiArrowUpLine color="green" />
        ) : (
          <RiArrowDownLine color="red" />
        )}
      </HStack>
    </HStack>
    <Text children={'Since Last Month'} opacity={0.6} />
  </Box>
);

const Bar = ({ title, value, profit }) => (
  <Box py={'4'} px={['0', '20']}>
    <Heading children={title} size={'sm'} mb={'2'} />
    <HStack w={'full'} alignItems={'center'}>
      <Text children={profit?'0%':`-${value}%`} />
      <Progress w={'full'} value={profit?value:0} colorScheme={'purple'} />
      <Text children={`${value>100?value:100}%`} />
    </HStack>
  </Box>
);

const Dashboard = () => {
  return (
    <Grid
      templateColumns={['1fr', '5fr 1fr']}
      minH={'100vh'}
      css={{
        cursor: `url(${cursor1}) 16 16, pointer`, // Ensuring fallback and hot spot
      }}
    >
      <Box boxSizing={'border-box'} py={'16'} px={['4', '0']}>
        <Text
          textAlign={'center'}
          opacity={0.5}
          children={`Last change was on ${String(new Date()).split('G')[0]}`}
        />
        <Heading
          children={'Dashboard'}
          ml={['0', '16']}
          mb={'16'}
          textAlign={['center', 'left']}
        />
        <Stack
          direction={['column', 'row']}
          minH={'24'}
          justifyContent={'space-evenly'}
          flexWrap={'wrap'}
          // spacing={'4'}
        >
          <Databox title={'Views'} qty={123} qtyPercentage={30} profit={true} />
          <Databox title={'Users'} qty={28} qtyPercentage={78} profit={true} />
          <Databox
            title={'Subscription'}
            qty={12}
            qtyPercentage={20}
            profit={false}
          />
        </Stack>
        <Box
          m={['0', '16']}
          borderRadius={'lg'}
          p={['0', '16']}
          mt={['0', '16']}
          boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}
        >
          <Heading
            children={'Viwes Graph'}
            size={'md'}
            textAlign={['center', 'left']}
            pt={["8", "0"]}
            ml={["0", "16"]}
          />
          {/* Line Graph Here */}
          <LineChart />
        </Box>
        <Grid templateColumns={['1fr', '2fr 1fr']}>
          <Box p={'4'}>
            <Heading
              children={'Progress Bar'}
              size={'md'}
              my={'8'}
              ml={['0', '16']}
              textAlign={['center', 'left']}
            />
            <Box>
              <Bar title={'Views'} value={30} profit={true} />
              <Bar title={'Users'} value={78} profit={true} />
              <Bar title={'Subscription'} value={20} profit={false} />
            </Box>
          </Box>
          <Box boxSizing={'border-box'} py={'4'} p={['0','16']} >
            <Heading children={'Users'} textAlign={'center'} size={'md'} mb={'4'} />
            {/* Doughnut Graph */}
            <DoughnutChart />
          </Box>
        </Grid>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Dashboard;
