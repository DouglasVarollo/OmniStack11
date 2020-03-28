import 'react-native-gesture-handler';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import RNBootSplash from 'react-native-bootsplash';

import Routes from './routes';

function App() {
  useEffect(() => {
    RNBootSplash.hide({ duration: 250 });
  }, []);

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#E02041" />
      <Routes />
    </>
  );
}

export default App;
