//import { rerenderEntireTree } from "../render";
let rerenderEntireTree = () => {
  console.log('state changed')
}

const state = {
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
}

window.state = state;
export let addNewPost = () => {
  let newPost = {
    id: 4,
    message: state.profile.newPostTextDialogs,
  };
  state.profile.messages.push(newPost);
  state.profile.newPostTextDialogs = ' ';
  rerenderEntireTree(state);

}
export let updateNewPostText = (newText) => {
  state.profile.newPostTextDialogs = newText;
  rerenderEntireTree(state);

}

export let newMessagesPage = () => {
  let newMessages = {
    id: 4,
    message: state.messagesPage.messagesprofile.newPostTextMessages ,
    like: '77',
  };
  state.messagesPage.messagesprofile.postData.push(newMessages);
  rerenderEntireTree(state);
}
export let updateNewMessageText = (newText) => {
  state.messagesPage.messagesprofile.newPostTextMessages = newText;
  rerenderEntireTree(state);
}
//observer патерн проектирования который позволяет компонентам подписыватся на изменения состояния или данных и реагировать на них
//В реакт observer заменяет хук (useEffect),или  контекст(Context API) это помогает сделать компоненты реактивными отзывчивыми на изменения данных


export const subscribe = (observer) => {
  rerenderEntireTree = observer; //наблюдатель патерн 
}
export default state;