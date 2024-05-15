import './index.css';
import state, { addNewPost } from './redux/state';
import {updateNewPostText} from './redux/state';
import { subscribe } from './redux/state';
import {newMessagesPage} from './redux/state'
import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App state={state} addNewPost={addNewPost}  newMessagesPage={newMessagesPage} updateNewPostText={updateNewPostText} />
    </React.StrictMode>
  );
}

rerenderEntireTree(state);

//rerenderEntireTree в данном случае это сall back так как она приходит в другую функцию в качесве аргумента и мы ее вызываем в опеределенный момент. 
subscribe(rerenderEntireTree);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
