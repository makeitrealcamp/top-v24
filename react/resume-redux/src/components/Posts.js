import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPost } from "../store/actions/posts.action";
import { getTodo } from "../store/actions/todos.action";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.postsReducer)
  const { todo } = useSelector((state) => state.todoReducer)

  useEffect(() => {
    dispatch(getPost())
  }, [])

  if (error) {
    return <p>Ups! ocurrió un error. Error: {error}</p>
  }

  const styles = {
    container: {
      display: "flex",
    },
    content: {
      width: "50%"
    }
  }

  return (
    <>
      <button onClick={() => dispatch(getTodo(true))}>Traer todo</button>
      <div style={styles.container}>
        <div style={styles.content}>
          {loading ? (
            <p>Loading...</p>
          ) : (
            posts.map((item) => {
              return (
                <div key={item.id} style={{ border: "2px white solid" }}>
                  <h5>{item.title}</h5>
                  <h6>{item.body}</h6>
                </div>
              )
            })
          )}
        </div>
        <div style={styles.content}>
          {todo.map((item) => {
            return (
              <div key={item.id} style={{ border: "2px white solid" }}>
                <h5>{item.title}</h5>
                <h6>Todo: {item.id}</h6>
              </div>
            )
          })

          }
        </div>
      </div>
    </>
  )
}

export default Posts