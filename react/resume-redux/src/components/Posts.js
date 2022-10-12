import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPost } from "../store";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state)

  useEffect(() => {
    dispatch(getPost())
  }, [])

  if (error) {
    return <p>Ups! ocurrió un error. Error: {error}</p>
  }

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        posts.map((item) => {
          return (
            <div key={item.id}>
              <h5>Post Número: {item.id}</h5>
              <h6>{item.title}</h6>
            </div>
          )
        })
      )}
    </div>
  )
}

export default Posts