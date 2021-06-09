import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import { replaceCamelCaseWithSpaces } from './App';

test('button has correct initial color', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(button).toHaveStyle({backgroundColor: 'Medium Violet Red'});
});

test('button turns blue when clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  fireEvent.click(button);
  expect(button).toHaveStyle({backgroundColor: 'Midnight Blue'});
  expect(button.textContent).toBe('Change to Medium Violet Red');
});

test('initial conditions', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  expect(button).toBeEnabled();

  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('checkbox disables button', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  
  fireEvent.click(checkbox);
  expect(button).toBeDisabled();

  fireEvent.click(checkbox);
  expect(button).toBeEnabled();
});

test('button is gray when disabled', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'Change to Midnight Blue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'Medium Violet Red' });

  fireEvent.click(button);
  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'gray' });

  fireEvent.click(checkbox);
  expect(button).toHaveStyle({ backgroundColor: 'Midnight Blue' });
});

describe('replace camel case with spaces', () => {
  it('Works for no inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('Red')).toBe('Red');
  });

  it('Works for one inner capital letter', () => {
    expect(replaceCamelCaseWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  it('Works for multiple inner capital letters', () => {
    expect(replaceCamelCaseWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});