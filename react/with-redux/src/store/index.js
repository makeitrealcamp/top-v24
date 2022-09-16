import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import countReducer from "./reducers/Count.reducer";
import textReducer from "./reducers/Text.reducer";
import postsReducer from "./reducers/Posts.reducer";


// const logger = (store) => {
//   console.log("Store", store)

//   return (next) => {
//     // next permite pasar al siguiente
//     return (action) => {
//       next(action)
//     }
//   }
// }

const rootReducer = combineReducers({
  countReducer,
  textReducer,
  postsReducer
})

const middleware = applyMiddleware(thunk)


export const store = legacy_createStore(rootReducer, middleware)