import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { StatusBar, Platform, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Container,
  Header,
  HeaderTitle,
  Menu,
  MenuItemText,
  MenuItem,
  Input,
  ActionButton,
  ActionButtonText,
  LoadingArea
} from './styled';

import useDevsUberAPi from '../../useDevsUberAPi';

export default () => {

  const api = useDevsUberAPi();
  const navigation = useNavigation();
  const user = useSelector(state => state.userReducer.name);

  const dispatch = useDispatch();

  const [activeMenu, setActiveMenu] = useState('signin');
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSignIn = async () => {
    if (email && password) {
      setLoading(true);
      const res = await api.signin(email, password);
      setLoading(false);

      if (res.error) {
        alert(res.error);
      } else {

        dispatch({
          type: 'SET_TOKEN',
          payload: {
            token: res.token
          }
        });

        navigation.navigate('Home');

      }

    }
  }

  const handleSignUp = async () => {
    if (name && email && password) {
      setLoading(true);
      const res = await api.signup(name, email, password);
      setLoading(false);

      if (res.error) {
        alert(res.error);
      } else {

        dispatch({
          type: 'SET_TOKEN',
          payload: {
            token: res.token,
          }
        });

        console.log(res.name);

        dispatch({
          type: 'SET_NAME',
          payload: {
            token: res.name,
          }
        });

        navigation.navigate('Home');

      }

    }
  }

  useEffect(() => {

    console.log('sd ' + user);

  }, []);

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
          editable={!loading}
          onChangeText={txt => setName(txt)}
          placeholder="Nome"
          placeholderTextColor="#999" />
      }

      <Input
        value={email}
        editable={!loading}
        onChangeText={txt => setEmail(txt)}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="E-mail"
        placeholderTextColor="#999"
      />

      <Input
        value={password}
        editable={!loading}
        onChangeText={txt => setPassword(txt)}
        placeholder="Senha"
        placeholderTextColor="#999"
        keyboardType="password"
      />

      {activeMenu == 'signin' &&
        <ActionButton
          disabled={!loading}
          onPress={handleSignIn}
          underlayColor="transparent"
        >
          <ActionButtonText>Login</ActionButtonText>
        </ActionButton>
      }

      {activeMenu == 'signup' &&
        <ActionButton
          disabled={!loading}
          onPress={handleSignUp}
          underlayColor="transparent"
        >
          <ActionButtonText>Cadastrar</ActionButtonText>
        </ActionButton>
      }


      {loading &&
        <LoadingArea>
          <ActivityIndicator size="large" color="#FFF" />
        </LoadingArea>
      }


    </Container>
  );
}
