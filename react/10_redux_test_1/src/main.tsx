import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {Provider} from 'react-redux';
import countReducer,{State} from './reducers/countReducer';
import {Store,AnyAction,createStore} from 'redux';

const store:Store<State,AnyAction> = createStore(countReducer);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </React.StrictMode>,
)
