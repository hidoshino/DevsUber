import React from 'react'
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './src/store';



import { View, Text } from 'react-native';

const Main = () => {

  return (
    <View>
      <Text>OK</Text>
    </View>
  )

}

export default () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Main/>
    </PersistGate>
  </Provider>
)