import React, { useState } from 'react';
import { Container, Header, HeaderTitle, Menu, MenuItemText, MenuItem } from './styled';

export default () => {

  const [activeMenu, setActiveMenu] = useState('signin');

  return (
    <Container>
      <Header>
        <HeaderTitle>DevUber</HeaderTitle>
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
    </Container>
  );
}
