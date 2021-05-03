import React, { Component, useEffect } from 'react';

import * as SQLite from 'expo-sqlite';
import { Provider } from 'react-redux'
import configureStore from './Store/configureStore';

import Main from './Component/Route'

const store = configureStore()

const App = () => {

  useEffect(() => {

    const db = SQLite.openDatabase('invest.db')
    db.transaction(tx => {
      tx.executeSql(
        "create table if not exists invest (id text primary key not null,amount text,type text,descrption text,paymentType text,date text);"
      );
    })

  }, [])

  return (
    <Provider store={store}>
      <Main></Main>
    </Provider>
  );
}
export default App


