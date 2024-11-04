import { Button, Container, Heading, Input, VStack } from '@chakra-ui/react';
import React, { useState } from 'react';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  return (
    <Container py={'16'} h={'90vh'}>
      <form>
        <Heading
          children={'Forget Passsword'}
          textTransform={'uppercase'}
          my={'16'}
          textAlign={['center', 'left']}
        />
        <VStack spacing={'8'}>
          <Input
            required
            id="email"
            value={email}
            onChange={e => {
              setEmail(e.target.value);
            }}
            placeholder={'abc@gmail.com'}
            type={'email'}
            focusBorderColor={'yellow.500'}
          />
          <Button w={'full'} type={'submit'} colorScheme={'yellow'}>
            Send Reset Link
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default ForgetPassword;
