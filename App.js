import React from 'react';
import { Provider } from 'react-redux';
import Store from './store';
import AppNavigation from './src/modules/navigation';

const App = () => (
  <Provider store={Store}>
      <AppNavigation />
  </Provider>
);

export default App;
