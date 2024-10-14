import React from 'react';
import newPageReducer from "../../redux/newPageReducer";
import store from '../../redux/redux-store';
import New from "./New";


const NewsContainer = (props) => {
  let state = store.getState();
  
  const render = () => {
    props.store.dispatch(newPageReducer); 
  }
  
  return (
  <div>
     <New newPageReducer newData={state.newPage.newPost}></New>
  </div>)
}

export default NewsContainer;