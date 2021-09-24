import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import hardSet from 'redux-persist/lib/stateReconciler/hardSet';

import Reducers from './Reducers';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist:['userReducer']
}

const pReducer = persistReducer(persistConfig, Reducers);

export const store = createStore(pReducer);

export const persistor = persistStore(store);