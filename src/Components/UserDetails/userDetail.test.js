import React from 'react';
import ReactDOM from 'react-dom';
import userDetail from './userDetail';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserDetail />, div);
  ReactDOM.unmountComponentAtNode(div);
});