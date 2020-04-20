import React from 'react';
import renderer from 'react-test-renderer';

import StudentListItem from '..';

it('renders correctly', () => {
  renderer.create(
    <StudentListItem
      name="Test name"
      classday="Test classday"
      level="Test level"
      onPress={() => undefined}
    />
  );
});
