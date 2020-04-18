import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';

import Button from '../components/button';
import Text from '../components/text';
import TextInput from '../components/textInput';

import { isEmailValid } from '../../utils';

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

const renderForm = (
  email,
  onChangeEmail,
  password,
  onChangePassword,
  message,
  changeMessage
) => (
  <Form>
    <TextInput
      value={email}
      onChangeText={value => {
        if (message) {
          changeMessage(undefined);
        }
        onChangeEmail(value);
      }}
      placeholder="Email"
    />
    <Margin />
    <TextInput
      value={password}
      onChangeText={value => {
        if (message) {
          changeMessage(undefined);
        }
        onChangePassword(value);
      }}
      placeholder="Senha"
      isPassword
    />
  </Form>
);

const renderErrorMessage = message => {
  const { RED } = StyleConstants.colors;

  return (
    message && (
      <>
        <Text center color={RED}>
          {message}
        </Text>
        <Margin />
      </>
    )
  );
};

const renderFooter = (navigation, email, password, changeMessage) => {
  const isFormValid = () => {
    if (!email || !password) {
      changeMessage('Preencha todos os campos para logar!');
      return false;
    }
    if (!isEmailValid(email)) {
      changeMessage('Esse email não existe!');
      return false;
    }
    if (password.length < 5) {
      changeMessage('As senhas têm pelo menos 5 caracteres');
      return false;
    }

    changeMessage(undefined);
    return true;
  };

  const { SMALL } = StyleConstants.fonts;

  return (
    <Footer>
      <Button
        primary
        text="Login"
        onPress={() => {
          if (isFormValid()) {
            console.log('Logar');
          }
        }}
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
  const [message, changeMessage] = useState(undefined);

  return (
    <Container>
      {renderHeader()}
      {renderForm(
        email,
        onChangeEmail,
        password,
        onChangePassword,
        message,
        changeMessage
      )}
      {renderErrorMessage(message)}
      {renderFooter(navigation, email, password, changeMessage)}
    </Container>
  );
};

export default Home;
