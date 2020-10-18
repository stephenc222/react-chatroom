import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders successfully', () => {
  const wrapper = render(<App />);
  expect(!!wrapper).toEqual(true);
});
