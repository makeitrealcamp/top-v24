import axios from "axios";
import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";


const initialState = {
  posts: [],
  loading: false,
  error: null
}

// const action = {
//   type: "post_success",
//   payload: [{}, {}, {}]
// }

//action creator
export const getPost = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "post_loading", payload: true })
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
      dispatch({ type: "post_success", payload: res.data })
    } catch (err) {
      dispatch({ type: "post_error", payload: err })
    } finally {
      dispatch({ type: "post_loading", payload: false })
    }
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "post_success":
      return {
        ...state,
        posts: action.payload
      }
    case "post_loading":
      return {
        ...state,
        loading: action.payload
      }
    case "post_error":
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

const middleware = applyMiddleware(thunk)

export const store = legacy_createStore(reducer, middleware)