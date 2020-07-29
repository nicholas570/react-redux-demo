import React from 'react';
import { Provider } from 'react-redux';

import './App.css';
import CakeContainer from './component/CakeContainer';
import store from './redux/store';
import HookCakeContainer from './component/HookCakeContainer';
import IceCreamContainer from './component/IceCreamContainer';
import UserContainer from './component/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <HookCakeContainer />
        <IceCreamContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
