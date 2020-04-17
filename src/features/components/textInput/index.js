import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import StyleConstants from '../../../styleConstants';

const { PRIMARY_BLUE, WHITE, BLACK } = StyleConstants.colors;
const { DEFAULT } = StyleConstants.fonts;

const StyledInput = styled.TextInput`
  background: ${WHITE};
  color: ${BLACK};
  font-size: ${DEFAULT};
  padding: 5px 15px;
  border: 2px solid ${PRIMARY_BLUE};
  border-radius: 3px;
`;

const TextInput = ({ value, onChangeText, placeholder, isPassword }) => (
  <StyledInput
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    secureTextEntry={isPassword}
  />
);

TextInput.defaultProps = {
  placeholder: '',
  isPassword: false
};

TextInput.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  isPassword: PropTypes.bool
};

export default TextInput;
