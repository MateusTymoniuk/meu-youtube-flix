import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import Home from './pages/Home';
import GlobalStyles from './styles/global';

export default function App() {
  return (
    <Provider store={store}>
      <Home />
      <GlobalStyles />
    </Provider>
  );
}
