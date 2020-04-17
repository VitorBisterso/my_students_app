import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import Button from '../components/button';
import Text from '../components/text';
import TextInput from '../components/textInput';

import logo from '../../assets/img/logo.png';

import styles from './styles';

const { Container, Header, Form, Footer, Margin } = styles;

// eslint-disable-next-line react/prop-types
const Home = ({ navigation }) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <Text size="30px">My students</Text>
      </Header>
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
        <Button
          primary
          text="Login"
          onPress={() => console.log('Pressed')}
          margin="0 0 10px 0"
        />
        {/* eslint-disable-next-line react/prop-types */}
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text size="12px" center>
            Não tem uma conta? Cadastre-se
          </Text>
        </TouchableOpacity>
      </Footer>
    </Container>
  );
};

export default Home;
