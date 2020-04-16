import React from 'react';
import renderer from 'react-test-renderer';

import Text from '..';

it('renders correctly', () => {
  renderer.create(<Text>Test text</Text>);
});
