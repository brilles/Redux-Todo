import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from "../actions/index";

const initialState = {
  todos: [
    {
      task: "example todo",
      id: 1528817077286,
      completed: false
    },
    {
      task: "example completed todo",
      id: 1528817084358,
      completed: true
    }
  ]
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      const newTodo = {
        task: action.payload,
        id: Date.now(),
        completed: false
      };
      return {
        ...state,
        todos: [...state.todos, newTodo]
      };

    case TOGGLE_TODO:
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            };
          }
          return todo;
        })
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      };
    default:
      return state;
  }
}

export default reducer;
