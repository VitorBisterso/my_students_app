import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import Button from '../components/button';
import Text from '../components/text';
import TextInput from '../components/textInput';

import logo from '../../assets/img/logo.png';

import StyleConstants from '../../styleConstants';
import { Container, Header, Form, Footer, Margin } from './styles';

const renderHeader = () => {
  const { BIGGEST } = StyleConstants.fonts;

  return (
    <Header>
      <Image source={logo} />
      <Text size={BIGGEST}>My students</Text>
    </Header>
  );
};

const renderForm = (email, onChangeEmail, password, onChangePassword) => (
  <Form>
    <TextInput
      value={email}
      onChangeText={value => onChangeEmail(value)}
      placeholder="Email"
    />
    <Margin />
    <TextInput
      value={password}
      onChangeText={value => onChangePassword(value)}
      placeholder="Senha"
      isPassword
    />
  </Form>
);

const renderFooter = navigation => {
  const { SMALL } = StyleConstants.fonts;

  return (
    <Footer>
      <Button
        primary
        text="Login"
        onPress={() => console.log('Logar')}
        margin="0 0 10px 0"
      />
      {/* eslint-disable-next-line react/prop-types */}
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text size={SMALL} center>
          Não tem uma conta? Cadastre-se
        </Text>
      </TouchableOpacity>
    </Footer>
  );
};

// eslint-disable-next-line react/prop-types
const Home = ({ navigation }) => {
  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');

  return (
    <Container>
      {renderHeader()}
      {renderForm(email, onChangeEmail, password, onChangePassword)}
      {renderFooter(navigation)}
    </Container>
  );
};

export default Home;
