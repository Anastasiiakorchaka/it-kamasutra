import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const dialogsData = [
    {
      id: 1,
      name: 'Anastasiia'
    },
    {
      id: 2,
      name: 'Ivan'
    },
    {
      id: 3, 
      name: 'Valeria'
    },
    {
      id: 4, 
      name: 'Andrey'
    }
  ];

  const messages = [
    {
      id: 1,
      message:'Hi'
    },
    {
      id: 2,
      message:'How is your language.'
    },
    {
      id: 3,
      message:'Everything fine.'
    },
    {
      id: 4,
      message:'Yo'
    },
  ];

  const postData = [
    {id: 1, message: 'Hi', like: '33',},
    {id: 2, message: 'I am fine', like: '14',},
    {id: 3, message: 'I am learn JS', like: '55',},
  ]
  
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <App dialogsData={dialogsData} messages={messages} postData={postData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
