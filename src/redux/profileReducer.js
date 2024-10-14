const ADD_NEW_POST ='ADD_NEW_POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT'

let initialState = {
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
}


const profileReducer = (state = initialState, action) => {
  console.log('action', action, 'state', state)
  switch(action.type){
    case ADD_NEW_POST: 
      let newPost = {
        id: 4,
        message: state.newPostTextDialogs,
      };
      state.messages.push(newPost);
      state.newPostTextDialogs = ' ';
      return state;
    case UPDATE_NEW_POST_TEXT: 
      state.newPostTextDialogs = action.newText;
      return state;
    default: return state;
  }
}

export const addNewPostActionCreator = () => {
  return {
    type: ADD_NEW_POST
  }
}
export const UpdateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
  }
}
export default profileReducer