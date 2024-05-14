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
  },

 messagesPage: {
  postData: [
    {id: 1, message: 'Hi', like: '33',},
    {id: 2, message: 'I am fine', like: '14',},
    {id: 3, message: 'I am learn JS', like: '55',},
  ]
 },
 newPage: {
  newPost: [
    {id: 1, new: 'I started learning JS'},
    {id: 2, new:`I've been teaching JS for three years.`},
    {id: 3, new:'My salary is 3000$;'},
  ]
 },
}
export let addNewPost = (postMessage) => {
  let newPost = {
    id: 4,
    message: postMessage,
  };
  state.profile.messages.push(newPost);
  rerenderEntireTree(state);

}
export let newMessagesPage = (postMessagePage) => {
  let newMessages = {
    id: 4,
    message: postMessagePage,
    like: '77',
  };
  state.messagesPage.postData.push(newMessages);
  rerenderEntireTree(state);
}
//observer патерн проектирования который позволяет компонентам подписыватся на изменения состояния или данных и реагировать на них
//В реакт observer заменяет хук (useEffect),или  контекст(Context API) это помогает сделать компоненты реактивными отзывчивыми на изменения данных


export const subscribe = (observer) => {
  rerenderEntireTree = observer; //наблюдатель патерн 
}
export default state;