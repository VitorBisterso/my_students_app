import styled from 'styled-components/native';

import StyleConstants from '../../../styleConstants';

const { WHITE, LIGHT_BLACK } = StyleConstants.colors;

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 40px 20px 0 20px;
  background-color: ${WHITE};
`;

const TitleView = styled.View`
  padding-bottom: 10px;
  border-bottom-width: 1px;
  border-bottom-color: ${LIGHT_BLACK};
`;

const NoStudents = styled.View`
  flex: 1;
  justify-content: center;
`;

const ScrollView = styled.ScrollView`
  flex: 1;
`;

export { Container, NoStudents, ScrollView, TitleView };
