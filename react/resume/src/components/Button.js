const Button = ({ setCount, count, children }) => {

  return (
    <button onClick={
      () => {
        setCount(count + 1)
      }}>{children}</button>
  )
}

export default Button