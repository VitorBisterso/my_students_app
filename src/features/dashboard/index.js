import React from 'react';

import StudentListItem from './components/studentListItem';

import { Container } from './styles';

const Dashboard = () => (
  <Container>
    <StudentListItem
      name="Maria Aparecida"
      classday="Wednesday"
      level="Intermediate"
      onPress={() => undefined}
    />
  </Container>
);

export default Dashboard;
