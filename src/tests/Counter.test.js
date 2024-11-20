// import necessary react testing library helpers here
import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

// import the Counter component here
import Counter from "../components/Counter";

beforeEach(() => {
  // Render the Counter component here
  render(<Counter/>)
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  expect(screen.getByRole('heading')).toHaveTextContent('Counter')

});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above

  const incrementButton = screen.getByText('+');
  const countElement = screen.getByTestId('count');

  expect(countElement).toHaveTextContent('0');

  fireEvent.click(incrementButton);

  expect(countElement).toHaveTextContent('1');

});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above

  const decrementButton = screen.getByText('-');
  const countElement = screen.getByTestId('count');

  expect(countElement).toHaveTextContent('0');

  fireEvent.click(decrementButton);

  expect(countElement).toHaveTextContent('-1');
});
