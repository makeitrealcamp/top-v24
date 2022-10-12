import axios from "axios";

import { POSTS_ERROR, POSTS_SUCCESS, POSTS_LOADING } from "../reducers/posts.reducer";


export const getPost = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: POSTS_LOADING, payload: true })
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
      dispatch({ type: POSTS_SUCCESS, payload: res.data })
    } catch (err) {
      dispatch({ type: POSTS_ERROR, payload: err })
    } finally {
      dispatch({ type: POSTS_LOADING, payload: false })
    }
  }
}