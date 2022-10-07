import { render, cleanup, fireEvent } from "@testing-library/react"
import { Form } from "."

describe("Form", () => {
  beforeEach(() => {
    cleanup()
  })

  it("should change from fields and submit to create a new book", () => {
    const mockBook = {
      title: "title 1",
      description: "description 1"
    }

    const createBook = jest.fn()

    const { getByTestId, getByLabelText } = render(<Form createBook={createBook} />)

    const titleInput = getByLabelText("Title")
    fireEvent.change(titleInput, { target: { value: mockBook.title } })
    expect(titleInput.value).toBe(mockBook.title)

    const descriptionInput = getByLabelText("Description")
    fireEvent.change(descriptionInput, { target: { value: mockBook.description } })
    expect(descriptionInput.value).toBe(mockBook.description)

    const form = getByTestId("form")
    fireEvent.submit(form)

    expect(createBook).toHaveBeenCalled()
    expect(createBook).toHaveBeenCalledWith(mockBook.title, mockBook.description)
    expect(titleInput.value).toBe("")
    expect(descriptionInput.value).toBe("")
  })
})