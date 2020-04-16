import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
  background-color: white;
`;

const Row = styled.View`
  width: 300px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.View``;

export default { Container, Row, Content };
