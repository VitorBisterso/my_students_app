import React from 'react';
import renderer from 'react-test-renderer';

import TextInput from '..';

it('renders correctly', () => {
  renderer.create(<TextInput value="Test" onChangeText={() => undefined} />);
});
