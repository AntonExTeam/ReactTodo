import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import TodoPages from './pages/TodoPage';

import { store } from './configureStore';
import { persistor } from './configureStore';


const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TodoPages/>
      </PersistGate>
    </Provider>
  );
};

export default App;
