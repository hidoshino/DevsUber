import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Container, Text } from './styled';

export default () => {

    const navigation = useNavigation();

    return (
      <Container>
        <Text>Preload</Text>
      </Container>
    );
  }

