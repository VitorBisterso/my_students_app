import React, { useState } from 'react';
import { Image } from 'react-native';

import Button from '../components/button';
import Text from '../components/text';
import TextInput from '../components/textInput';

import logo from '../../assets/img/logo.png';

import styles from './styles';
import StyleConstants from '../../styleConstants';

const { Container, Row, Form, Footer, Margin } = styles;
const { TITLE_SIZE } = StyleConstants.sizes;

const Home = () => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <Container>
      <Row>
        <Image source={logo} />
        <Text size={TITLE_SIZE}>My students</Text>
      </Row>
      <Form>
        <Margin>
          <TextInput
            value={email}
            onChangeText={value => onChangeEmail(value)}
            placeholder="Email"
          />
        </Margin>
        <TextInput
          value={password}
          onChangeText={value => onChangePassword(value)}
          placeholder="Senha"
          isPassword
        />
      </Form>
      <Footer>
        <Button primary text="Login" onPress={() => console.log('Pressed')} />
      </Footer>
    </Container>
  );
};

export default Home;
