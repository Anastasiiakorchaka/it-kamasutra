import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesPageReducer from "./messagesPageReducer";
import newPageReducer from "./newPageReducer";
// У нас ключ не является чистым ключем как мы привыкли в предидущей версии стора в profile, messagesPage, newPage... хранились нужные нам данные 
// по этому нам нужно про инициализировать ключ значением по умолчанию

let reducers = combineReducers({
  profile: profileReducer,
  messagesPage: messagesPageReducer,
  newPage: newPageReducer

});
let store = createStore(reducers);

export default store;