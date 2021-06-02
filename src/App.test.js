import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

test('canary test', () => {
  expect(true).toBe(true);
});

test('a textbox appears on screen', () => {
  render(<App />);
  expect(screen.getByRole('textbox')).toBeVisible();
});

test('a button appears on screen', () => {
  render(<App />);
  expect(screen.getByRole('button')).toBeVisible();
});

test('can type the word "hello" into the textbox', () => {
  render(<App />);
  const textField = screen.getByRole('textbox');
  userEvent.type(textField, 'hello');
  expect(textField).toHaveValue('hello');
});

test('after typing "hello" in textbox, will print "HELLO" after clicking button', () => {
  render(<App />);
  const textField = screen.getByRole('textbox');
  userEvent.type(textField, 'hello');
  userEvent.click(screen.getByRole('button'));
  expect(screen.getByText(/HELLO/)).toBeVisible();
  userEvent.click(screen.getByRole('button'));
  expect(textField).not.toHaveValue('hello');
});

test('after clicking clear, textbox is empty', () => {
  render(<App />);
  const textField = screen.getByRole('textbox');
  userEvent.type(textField, 'hello');
  userEvent.click(screen.getByRole('button'));
  userEvent.click(screen.getByRole('button'));
  expect(textField).not.toHaveValue('hello');
});
