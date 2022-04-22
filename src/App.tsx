import {Provider} from 'react-redux';
import React from 'react';

import store from './state/store';
import Main from './Main';

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
};

export default App;
