import axios from "axios";
import { applyMiddleware, legacy_createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import postsReducer from "./reducers/posts.reducer";
import todoReducer from "./reducers/todos.reducer";



const rootReducer = combineReducers({
  postsReducer,
  todoReducer
})

const middleware = applyMiddleware(thunk)

export const store = legacy_createStore(rootReducer, middleware)