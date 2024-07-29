import newPageReducer from "./newPageReducer"
import messagesPageReducer from "./messagesPageReducer"
import profileReducer from "./profileReducer"

let store = {
  
  getState () {
    return this._state
  },
  rerenderEntireTree () {
  },
  subscribe (observer) {
    this._rerenderEntireTree = observer; //наблюдатель патерн 
  },
  // action это объект который описывает какое дейсвие нужно совершить у это объекта обязательно должно быть свойсво тип который прописываеся в формате строки
  // там мы указываем глагол что мы должны сделать.
  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profile, action);
    this._state.messagesPageReducer = messagesPageReducer(this._state.messagesPage, action);
    this._state.newPageReducer = newPageReducer(this._state.newPage, action);
    this._rerenderEntireTree(this._state)
  }
}
export default store;