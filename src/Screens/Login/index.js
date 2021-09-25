import React, { useState } from 'react';
import { StatusBar, Platform } from 'react-native';
import {
  Container,
  Header,
  HeaderTitle,
  Menu,
  MenuItemText,
  MenuItem,
  Input,
  ActionButton,
  ActionButtonText
} from './styled';

export default () => {

  const [activeMenu, setActiveMenu] = useState('signin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container behavior={Platform.OS == 'ios' ? 'padding' : null}>
      <StatusBar barStyle="light-content" />
      <Header>
        <HeaderTitle>DevsUber</HeaderTitle>
      </Header>
      <Menu>
        <MenuItem
          onPress={() => setActiveMenu('signin')}
          active={activeMenu == 'signin'}
          underlayColor="transparent"
        >
          <MenuItemText>Login</MenuItemText>
        </MenuItem>
        <MenuItem
          onPress={() => setActiveMenu('signup')}
          active={activeMenu == 'signup'}
          underlayColor="transparent"
        >
          <MenuItemText>Cadastrar</MenuItemText>
        </MenuItem>
      </Menu>

      {activeMenu == 'signup' &&
        <Input
          value={name}
          onChangeText={txt => setName(txt)}
          placeholder="Nome"
          placeholderTextColor="#999" />
      }

      <Input
        value={email}
        onChangeText={txt => setEmail(txt)}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="E-mail"
        placeholderTextColor="#999"
      />

      <Input
        value={password}
        onChangeText={txt => setPassword(txt)}
        placeholder="Senha"
        placeholderTextColor="#999"
      />

      {activeMenu == 'signin' &&
        <ActionButton underlayColor="transparent">
          <ActionButtonText>Login</ActionButtonText>
        </ActionButton>
      }

      {activeMenu == 'signup' &&
        <ActionButton underlayColor="transparent" >
          <ActionButtonText>Cadastrar</ActionButtonText>
        </ActionButton>
      }

    </Container>
  );
}
