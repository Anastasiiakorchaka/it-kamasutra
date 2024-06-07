import './index.css';
//import state from './redux/state';
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={store.getState()} dispatch={store.dispatch.bind(store)}/>
    </React.StrictMode>
  );
}

rerenderEntireTree(store.getState());

//rerenderEntireTree в данном случае это сall back так как она приходит в другую функцию в качесве аргумента и мы ее вызываем в опеределенный момент. 
store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state)
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
