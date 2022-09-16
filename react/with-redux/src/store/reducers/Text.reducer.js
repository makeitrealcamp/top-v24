const CHANGE_TEXT = "CHANGE_TEXT"

//action creator
export const changeText = (value) => {

  return {
    type: CHANGE_TEXT,
    payload: value
  }
}

const initialState = {
  username: ""
}

const textReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        username: action.payload
      }
    default:
      return state
  }
}

export default textReducer