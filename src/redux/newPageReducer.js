
let initialState = {
  newPost: [
    {id: 1, new: 'I started learning JS'},
    {id: 2, new:`I've been teaching JS for three years.`},
    {id: 3, new:'My salary is 3000$;'},
  ]
}

const newPageReducer = (state = initialState, action) => {
  return state;
}
export default newPageReducer;