import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// add custom jest matchers from jest-dom
import '@testing-library/jest-dom';
import Input from '../components/Input';

const store = () => ({
  cryptos: [
    {
      id: 1,
      name: 'bitcoin',
      price: '291010',
    },
    {
      id: 2,
      name: 'ethereum',
      price: '29939',
    },
  ],
});

afterEach(cleanup);

describe('Input component', () => {
  test('search bar should be render ', () => {
    render(<Input change={store} />);
    expect(screen.getByPlaceholderText('search...')).toBeInTheDocument();
  });
  test('input should be initially empty', () => {
    render(<Input change={store} />);
    const searchInputElement = screen.getByRole('textbox');
    expect(searchInputElement.value).toBe('');
  });
  test('should be able to search', async () => {
    // ARRANGE
    const user = userEvent.setup();
    render(<Input change={store} />);
    // ACT
    const searchInputElement = screen.getByRole('textbox');
    await user.type(searchInputElement, 'bitcoin');
    // ASSERT
    expect(searchInputElement.value).toBe('bitcoin');
  });
  test('should be able to filter crypto by name', async () => {
    // ARRANGE
    const user = userEvent.setup();
    render(<Input change={store} />);
    // ACT
    const searchInputElement = screen.getByRole('textbox');
    await user.type(searchInputElement, 'bitcoin');
    // filter only crypto met condition
    const re = store().cryptos.filter(
      (crypto) => crypto.name === searchInputElement.value,
    );
    // ASSERT
    expect(re).toHaveLength(1);
  });
});
