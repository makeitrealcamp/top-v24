import axios from "axios";

import { TODOS_SUCCESS } from "../reducers/todos.reducer";

export const getTodo = (value) => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
      const todoComplete = res.data.filter((item) => item.completed === value)
      dispatch({ type: TODOS_SUCCESS, payload: todoComplete })
    } catch (error) {
      console.log("Ups!")
    }
  }
}