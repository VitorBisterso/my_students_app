import React from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import Text from '../text';

import user from '../../../assets/img/user.png';
import paperClip from '../../../assets/img/paperClip.png';

import StyleConstants from '../../../styleConstants';

const { WHITE, PRIMARY_BLUE, GREEN } = StyleConstants.colors;

const StyledListItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  background-color: ${WHITE};
  elevation: 5;
  padding: 15px 10px;
  border-radius: 3px;
  margin: 15px 10px;
`;

const Info = styled.View`
  margin-left: 10px;
  max-width: 230px;
`;

const TopRight = styled.View`
  position: absolute;
  top: -12px;
  right: -5px;
`;

const StudentListItem = ({ name, classday, level, onPress }) => (
  <StyledListItem onPress={onPress}>
    <Image source={user} />
    <Info>
      <Text color={PRIMARY_BLUE} numberOfLines={1}>
        {name}
      </Text>
      <Text color={GREEN} numberOfLines={1}>{`${level} - ${classday}`}</Text>
    </Info>
    <TopRight>
      <Image source={paperClip} />
    </TopRight>
  </StyledListItem>
);

StudentListItem.propTypes = {
  name: PropTypes.string.isRequired,
  classday: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired
};

export default StudentListItem;
