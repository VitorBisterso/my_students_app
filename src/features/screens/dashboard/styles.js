import styled from 'styled-components/native';

import StyleConstants from '../../../styleConstants';

const { WHITE } = StyleConstants.colors;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  padding: 0 20px;
  background-color: ${WHITE};
`;

// eslint-disable-next-line import/prefer-default-export
export { Container };
