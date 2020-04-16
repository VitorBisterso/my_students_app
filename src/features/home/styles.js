import styled from 'styled-components/native';

const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  padding: 20px 0;
  background-color: white;
`;

const Row = styled.View`
  flex: 2;
  width: 300px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Form = styled.View`
  flex: 3;
  width: 300px;
  justify-content: center;
`;

const Margin = styled.View`
  margin-bottom: 15px;
`;

const Footer = styled.View`
  flex: 1;
  width: 300px;
  justify-content: flex-end;
`;

export default { Container, Row, Form, Footer, Margin };
