import React from 'react';
import renderer from 'react-test-renderer';

import BackButton from '..';

it('renders correctly', () => {
  renderer.create(<BackButton navigation={undefined} />);
});
