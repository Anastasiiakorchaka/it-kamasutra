const NEW_MESSAGESPAGES_PAGE = 'NEW_MESSAGESPAGES_PAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT'


let initialState = {
  messagesprofile: {
    postData: [
      {id: 1, message: 'Hi', like: '33',},
      {id: 2, message: 'I am fine', like: '14',},
      {id: 3, message: 'I am learn JS', like: '55',},
    ],
    newPostTextMessages:'IT-kamasutra review',
   },
}

const messagesPageReducer = (state = initialState, action) => {
  switch(action.type){
    case NEW_MESSAGESPAGES_PAGE:
      let newMessages = {
        id: 4,
        message: state.messagesprofile.newPostTextMessages,
        like: '77',
      };
      state.messagesprofile.postData.push(newMessages);
      state.messagesprofile.newPostTextMessages = ' ';
      return state;
    case UPDATE_NEW_MESSAGE_TEXT: 
      state.messagesprofile.newPostTextMessages = action.newText;
      return state;
    default: return state;
  } }
  
  export const newMessagesPageActionCreator = () => {
    return {
      type: NEW_MESSAGESPAGES_PAGE
    }
  }
  export const updateNewMessageTextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_MESSAGE_TEXT,
      newText: text
    }
  }
  
export default messagesPageReducer;