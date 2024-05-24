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
      if(action.type === 'ADD-NEW-POST') {
        let newPost = {
          id: 4,
          message: this._state.profile.newPostTextDialogs,
        };
        this._state.profile.messages.push(newPost);
        this._state.profile.newPostTextDialogs = ' ';
        this._rerenderEntireTree(this._state);
      
      } else if (action.type === 'UPDATE_NEW_POST_TEXT') {
        this._state.profile.newPostTextDialogs = action.newText;
        this._rerenderEntireTree(this._state);
      } else if (action.type === 'NEW_MESSAGESPAGES_PAGE') {
        let newMessages = {
          id: 4,
          message: this._state.messagesPage.messagesprofile.newPostTextMessages ,
          like: '77',
        };
        this._state.messagesPage.messagesprofile.postData.push(newMessages);
        this._rerenderEntireTree(this._state);
      } else if (action.type === 'UPDATE_NEW_MESSAGE_TEXT') {
        this._state.messagesPage.messagesprofile.newPostTextMessages = action.newText;
        this._rerenderEntireTree(this._state);
      }
  }
}

export default store;