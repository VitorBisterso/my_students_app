import styled from 'styled-components/native';

import StyleConstants from '../../../styleConstants';

const { PRIMARY_COLOR } = StyleConstants.colors;
const { DEFAULT_SIZE } = StyleConstants.sizes;

const Text = styled.Text`
  font-size: ${props => props.size || DEFAULT_SIZE};
  color: ${props => props.color || PRIMARY_COLOR};
  text-align: ${props => (props.center ? 'center' : 'left')};
`;

export default Text;
