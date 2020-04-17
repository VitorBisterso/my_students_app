import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import Text from '../text';

import StyleConstants from '../../../styleConstants';

const { PRIMARY_COLOR, WHITE } = StyleConstants.colors;

const StyledButton = styled.TouchableOpacity`
  background: ${props => (props.primary ? PRIMARY_COLOR : WHITE)};
  padding: 5px;
  border: 2px solid ${PRIMARY_COLOR};
  border-radius: 3px;
  margin: ${props => props.margin};
`;

const Button = ({ primary, text, onPress, margin }) => (
  <StyledButton primary={primary} onPress={onPress} margin={margin}>
    <Text center color={primary ? WHITE : PRIMARY_COLOR}>
      {text}
    </Text>
  </StyledButton>
);

Button.defaultProps = {
  primary: false,
  margin: '0px'
};

Button.propTypes = {
  primary: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  margin: PropTypes.string
};

export default Button;
