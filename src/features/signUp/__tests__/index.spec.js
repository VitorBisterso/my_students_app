import React from 'react';
import renderer from 'react-test-renderer';

import SignUp from '..';

it('renders correctly', () => {
  renderer.create(<SignUp navigation={{}} />);
});
