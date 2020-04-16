import React from 'react';
import { Image } from 'react-native';

import Button from '../components/button';
import Text from '../components/text';

import logo from '../../assets/img/logo.png';

import styles from './styles';
import StyleConstants from '../../styleConstants';

const { Container, Row, Content } = styles;
const { TITLE_SIZE } = StyleConstants.sizes;

const Home = () => (
  <Container>
    <Row>
      <Image source={logo} />
      <Text size={TITLE_SIZE}>My students</Text>
    </Row>
    <Content>
      <Button text="Press me" onPress={() => console.log('Pressed')} />
    </Content>
  </Container>
);

export default Home;
