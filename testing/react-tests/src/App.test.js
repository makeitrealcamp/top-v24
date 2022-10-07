/* import { cleanup, render } from '@testing-library/react';
import App from './App';

describe("App", () => {

  beforeEach(() => {
    cleanup()
  })
  // beforeAll
  // afterEach
  // afterAll

  test('renders learn react link', () => {
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
  });

}) */