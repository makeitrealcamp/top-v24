import { useParams, useSearchParams } from "react-router-dom"

const Product = () => {
  let params = useParams();

  let [searchParams, setSearchParams] = useSearchParams();


  return (
    <>
      <h1>{`Esta es la página de producto, esta es la marca de vehículo que buscas ${params.brand} y carrocería ${searchParams.get("bodywork")}`}</h1>
      <h2>{searchParams.get("year")}</h2>
    </>
  )
}

export default Product