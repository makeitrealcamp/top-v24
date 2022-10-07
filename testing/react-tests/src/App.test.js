import { cleanup, render, fireEvent } from '@testing-library/react';
import App from './App';

describe("App", () => {

  beforeEach(() => {
    cleanup()
  })
  // beforeAll
  // afterEach
  // afterAll

  it("should create a new book", () => {
    const mockBook = {
      title: "title 1",
      description: "description 1"
    }

    const { getByLabelText, getByTestId, getAllByTestId } = render(<App />)

    const titleInput = getByLabelText("Title")
    fireEvent.change(titleInput, { target: { value: mockBook.title } })

    const descriptionInput = getByLabelText("Description")
    fireEvent.change(descriptionInput, { target: { value: mockBook.description } })

    const buttonElement = getByTestId("button")
    fireEvent.click(buttonElement)

    const booksElement = getAllByTestId("book")

    expect(booksElement).toHaveLength(1)
  })


  /*   test('renders learn react link', () => {
      const {
        //debug,
        getByText,
        getByTestId
      } = render(<App />);
  
      //debug()
      const testIdElement = getByTestId("custom-element")
      //const linkElement = getByText(/learn react/i);
      //console.log(linkElement)
      // expect(linkElement).toBeInTheDocument();
      expect(testIdElement).toBeInTheDocument()
    }); */
}) 
