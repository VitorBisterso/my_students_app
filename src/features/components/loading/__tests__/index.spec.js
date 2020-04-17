import React from 'react';
import renderer from 'react-test-renderer';

import Loading from '..';

it('renders correctly', () => {
  renderer.create(<Loading />);
});
