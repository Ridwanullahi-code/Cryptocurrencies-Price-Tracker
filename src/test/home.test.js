import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../components/Header';

afterEach(cleanup);
// testing the header component
describe('Home component', () => {
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
