import { getByTestId, render } from "@testing-library/react";
import { Book } from ".";

describe("Book", () => {
  it("shloud render correctly", () => {

    const mockData = {
      title: "title 1",
      description: "description 1",
      votes: 0
    }

    const { getByText, getByTestId } = render(
      <Book
        title={mockData.title}
        description={mockData.description}
        votes={mockData.votes}
      />
    )

    const elementTitle = getByText(mockData.title)
    const elementDescription = getByText(mockData.description)
    const elementVotes = getByTestId("votes")

    expect(elementTitle).toBeInTheDocument()
    expect(elementTitle.tagName).toBe("H2")
    expect(elementDescription).toBeInTheDocument()
    expect(elementDescription.tagName).toBe("P")
    expect(elementVotes).toBeInTheDocument()
  })
})