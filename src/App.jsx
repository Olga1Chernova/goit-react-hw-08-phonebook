import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Navbar from 'modules/Navbar/Navbar';

import UserRoutes from './UserRoutes';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Navbar />
          <UserRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
