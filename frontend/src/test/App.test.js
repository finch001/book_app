import React from 'react';
import ReactDOM from 'react-dom';
import App from '../container/BookContent';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookContent />, div);
});
