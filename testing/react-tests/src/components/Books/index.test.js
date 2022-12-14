import { cleanup, render } from "@testing-library/react";
import { Books } from ".";

const mockBooks = [
  {
    id: 1,
    title: "title 1",
    description: "description 1",
    votes: 10,
  },
  {
    id: 2,
    title: "title 2",
    description: "description 2",
    votes: 20,
  },
  {
    id: 3,
    title: "title 3",
    description: "description 3",
    votes: 30,
  },
  {
    id: 4,
    title: "title 4",
    description: "description 4",
    votes: 40,
  },
];

describe("Books", () => {
  beforeEach(() => {
    cleanup()
  })

  it("should render a list of books", () => {
    const { getAllByTestId } = render(<Books books={mockBooks} />)

    expect(getAllByTestId("book")).toHaveLength(mockBooks.length)
  })

  it("should render meessage if there are no books", () => {
    const { getByText } = render(<Books books={[]} />)

    expect(getByText("No books created!")).toBeInTheDocument()
  })

})