import newPageReducer from "./newPageReducer"
import messagesPageReducer from "./messagesPageReducer"
import profileReducer from "./profileReducer"

let store = {
  _state: {
    profile: {
      dialogsData: [
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
      ],
    
      messages: [
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
      ],
      newPostTextDialogs:'IT-kamasutra.com',
    },
  
   messagesPage: {
    messagesprofile: {
      postData: [
        {id: 1, message: 'Hi', like: '33',},
        {id: 2, message: 'I am fine', like: '14',},
        {id: 3, message: 'I am learn JS', like: '55',},
      ],
      newPostTextMessages:'IT-kamasutra review',
     },
    },
  
   newPage: {
    newPost: [
      {id: 1, new: 'I started learning JS'},
      {id: 2, new:`I've been teaching JS for three years.`},
      {id: 3, new:'My salary is 3000$;'},
    ]
   },
  },
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