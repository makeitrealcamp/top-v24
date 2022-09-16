const { createStore } = require("redux")


///// Store
const initialState = {
  count: 0,
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        count: state.count + action.payload.number
      }
    case "decrement":
      return {
        ...state,
        count: state.count - action.payload.number
      }
    default:
      return state
  }
}

const store = createStore(reducer)

////// fin store

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: "increment", payload: { name: "Esteban", number: 5 } })
store.dispatch({ type: "increment", payload: { name: "Esteban", number: 5 } })
store.dispatch({ type: "increment", payload: { name: "Esteban", number: 5 } })
store.dispatch({ type: "decrement", payload: { name: "Esteban", number: 8 } })

