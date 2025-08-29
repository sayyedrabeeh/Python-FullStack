import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
// import Counter from './react1/pratical/counter'
// import InputDisplay from './react1/pratical/inputdisplay';
// import Parent from './react1/pratical/parent_child';
// import Useeffect1 from './react1/pratical/useffeect';
// import Test from './react1/pratical/classcomponent';
// import Upper from './react1/pratical/customhook';
// import Todo from './react1/pratical/Todo';
// import Match from './react1/pratical/match-field';
// import Time from './react1/pratical/time';
// import Timer from './react1/pratical/timer';
// import Parent from './react1/pratical/child_parent';
// import Add from './react2/usecontext';
// import Add from './react2/usereducer';
// import Calc from './react2/calculator_usereducer';
// import Calc from './react2/calculator_usecontext';
// import Addtwonum from './react2/usememo';
// import Todo from './react2/todolist';
import App from './react3/pratical/counter';

import { Provider } from 'react-redux'


// import Display,{store} from './react3/pratical/autocounter';
// import Calculator,{store} from './react3/pratical/calculator_redux';

import CounterDisplay,{persistor,store} from './react3/pratical/counter_redux_persist';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <CounterDisplay/>
      </PersistGate>
    </Provider> */}
    <App/>

  </React.StrictMode>
);
 
 
