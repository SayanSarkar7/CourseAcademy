import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
    const params=useParams();

    console.log(params.token);
    

  return (
    <Container py={'16'} h={'90vh'}>
      <form>
        <Heading
          children={'Reset Passsword'}
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            id="password"
            value={password}
            onChange={e => {
              setPassword(e.target.value);
            }}
            placeholder={'New Password'}
            type={'password'}
            focusBorderColor={'yellow.500'}
          />
          <Button w={'full'} type={'submit'} colorScheme={'yellow'}>
            Reset Password
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ResetPassword;
