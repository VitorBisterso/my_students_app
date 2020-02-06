import React from 'react';
import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Text = styled.Text`
  font-size: 20px;
`;

const App = () => (
  <Container>
    <Text>My students app</Text>
  </Container>
);

export default App;
