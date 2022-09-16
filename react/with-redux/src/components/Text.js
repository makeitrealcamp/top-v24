import { useSelector } from "react-redux"

const Text = () => {
  const username = useSelector(state => state.textReducer.username)

  return (
    <h2>{username}</h2>
  )
}

export default Text