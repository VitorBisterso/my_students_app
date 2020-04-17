import React from 'react';
import styled from 'styled-components/native';

import Text from '../text';

import StyleConstants from '../../../styleConstants';

const { TITLE } = StyleConstants.fonts;

const Container = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Loading = () => (
  <Container>
    <Text size={TITLE} center>
      Carregando...
    </Text>
  </Container>
);

export default Loading;
