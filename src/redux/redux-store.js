import { combineReducers, createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesPageReducer from "./messagesPageReducer";
import newPageReducer from "./newPageReducer";
// У нас ключ не является чистым ключем как мы привыкли в предидущей версии стора в profile, messagesPage, newPage... хранились нужные нам данные 
// по этому нам нужно про инициализировать ключ значением по умолчанию
// combineReducers функция редакса мы в нее передаем наши редюсоры. Редюсор это чистая функция котрая меняет state

let reducers = combineReducers({
  profile: profileReducer,
  messagesPage: messagesPageReducer,
  newPage: newPageReducer

});
// функция редакса которая помогает создать стор мы в нее отдаем редюсоры котрые мы закомбайнили
let store = createStore(reducers);

export default store;