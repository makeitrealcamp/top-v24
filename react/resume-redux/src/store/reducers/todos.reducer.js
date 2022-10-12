export const TODOS_SUCCESS = "TODOS_SUCCESS"

const initialState = {
  todo: [],
  loading: false,
  error: null
}

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODOS_SUCCESS:
      return {
        ...state,
        todo: action.payload
      }
    default:
      return state
  }
}

export default todoReducer