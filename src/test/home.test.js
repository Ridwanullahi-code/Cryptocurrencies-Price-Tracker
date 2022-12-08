import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../pages/Home'


afterEach(cleanup);

// testing the header component
describe('Home component', () => {
  test('renders home page component', () => {
    // Rendering the component we want to test
    render(<Home />);
  });
  test('renders image logo', () => {
    const result = render(<Header />);
    const some = result.container.querySelector('#Logo');
    expect(some).toBeInTheDocument();
  });
  test('renders font awesome icons', () => {
    const result = render(<Header />);
    const icons = result.container.querySelectorAll('i');
    icons.forEach((icon) => {
      expect(icon).toBeInTheDocument();
    });
  });
});

// testing the crypto component
describe('Crypto component', () => {
  test('renders cryto component', () => {
    // Rendering the component we want to test
    render(<Crypto />);
  });
  test('renders total crypto', () => {
    render(<Crypto />);
    const total = screen.getByText(/100 Cryptos/i);
    expect(total).toBeInTheDocument();
  });
});
