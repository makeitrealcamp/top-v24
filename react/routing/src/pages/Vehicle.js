import { useParams, useSearchParams } from "react-router-dom"

const Vehicles = () => {
  const params = useParams()
  let [searchParams, setSearchParams] = useSearchParams();

  console.log("querys", searchParams.get("bodywork"))
  console.log("querys", searchParams.get("price"))

  return (
    <h1>{`Esta página es la de vehiculos ${params.brand} y año ${params.model}`}</h1>
  )
}

export default Vehicles