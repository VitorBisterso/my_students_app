import React from 'react';
import renderer from 'react-test-renderer';

import Home from '..';

it('renders correctly', () => {
  renderer.create(<Home />);
});
