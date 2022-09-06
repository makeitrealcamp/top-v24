import { CardContainer, CardTitle } from "./CardStyles";
import Button from "./Button";

const Card = () => {
  return (
    <CardContainer>
      <CardTitle>Make It Real</CardTitle>
      <Button color={"primary-color"}>Enviar</Button>
    </CardContainer>
  )
}

export default Card;