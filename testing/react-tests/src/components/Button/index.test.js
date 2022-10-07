import { Button } from ".";
import { render } from "@testing-library/react";

describe("Button", () => {

  it("should render correctly", () => {
    const { getByText } = render(<Button type="button">Crear</Button>)
    const buttonElement = getByText("Crear")

    expect(buttonElement.type).toMatch(/button/i)
    expect(buttonElement).toBeInTheDocument()
  })

  it("should match snapshot", () => {
    const { container } = render(<Button type="button">Crear</Button>)

    expect(container).toMatchSnapshot()
  })

})