import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import backArrow from '../../../assets/img/arrow.png';

const Arrow = styled.TouchableOpacity`
  margin: 15px 0 0 15px;
`;

const BackButton = ({ navigation }) => {
  return (
    <Arrow onPress={() => navigation.pop()}>
      <Image source={backArrow} />
    </Arrow>
  );
};

BackButton.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  navigation: PropTypes.object.isRequired
};

export default BackButton;
