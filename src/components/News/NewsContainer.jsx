import React from 'react';
import newPageReducer from "../../redux/newPageReducer";
import store from '../../redux/redux-store';
import New from "./New/New";


const NewsContainer = (props) => {
  //console.log('jjj', store.store.newPage)
  let state = store.getState();

  const render = () => {
    props.store.dispatch(newPageReducer); 
  }
  
  return (
  <div>
     <New newPageReducer></New>
  </div>)
}

export default NewsContainer;