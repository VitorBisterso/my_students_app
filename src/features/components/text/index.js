import styled from 'styled-components/native';

import StyleConstants from '../../../styleConstants';

const { PRIMARY_BLUE } = StyleConstants.colors;
const { DEFAULT } = StyleConstants.fonts;

const Text = styled.Text`
  font-size: ${props => props.size || DEFAULT};
  color: ${props => props.color || PRIMARY_BLUE};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

export default Text;
