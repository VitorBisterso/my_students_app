import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import BackButton from '../components/backButton';
import TextInput from '../components/textInput';
import Text from '../components/text';
import Button from '../components/button';
import Loading from '../components/loading';

import StyleConstants from '../../styleConstants';
import { Container, Content, Margin, Form, ErrorsView } from './styles';

const renderForm = (
  email,
  onChangeEmail,
  password,
  onChangePassword,
  registerToken,
  onChangeToken,
  formError,
  changeFormError
) => {
  const emailType = 'EMAIL';
  const passwordType = 'PASSWORD';
  const tokenType = 'TOKEN';

  const onChangeText = (type, value) => {
    if (formError) {
      changeFormError('');
    }
    switch (type) {
      case emailType:
        onChangeEmail(value);
        break;
      case passwordType:
        onChangePassword(value);
        break;
      case tokenType:
      default:
        onChangeToken(value);
    }
  };

  return (
    <Form>
      <TextInput
        value={email}
        onChangeText={value => onChangeText(emailType, value)}
        placeholder="Email"
      />
      <Margin />
      <TextInput
        value={password}
        onChangeText={value => onChangeText(passwordType, value)}
        placeholder="Senha"
        isPassword
      />
      <Margin />
      <TextInput
        value={registerToken}
        onChangeText={value => onChangeText(tokenType, value)}
        placeholder="Token"
      />
    </Form>
  );
};

const renderErrorMessage = errorMessage =>
  errorMessage && (
    <Text center color="red">
      {errorMessage}
    </Text>
  );

const isFormValid = (email, password, registerToken, changeFormError) => {
  if (!email || !password || !registerToken) {
    changeFormError('Preencha todos os campos!');
    return false;
  }
  if (password.length < 5) {
    changeFormError('A senha deve ter no mínimo 5 caracteres!');
    return false;
  }

  return true;
};

// eslint-disable-next-line react/prop-types
const SignUp = ({ navigation }) => {
  const hasResquestError = useSelector(state => state.auth.error);
  const isLoading = useSelector(state => state.auth.isLoading);

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [registerToken, onChangeToken] = useState('');
  const [formError, changeFormError] = useState('');

  const { BIGGEST } = StyleConstants.fonts;

  let errorMessage;
  if (hasResquestError) {
    errorMessage = 'Erro ao criar usuário';
  } else if (formError) {
    errorMessage = formError;
  }

  return isLoading ? (
    <Loading />
  ) : (
    <Container>
      <BackButton navigation={navigation} />
      <Content>
        <Text size={BIGGEST} center>
          Cadastre-se!
        </Text>
        {renderForm(
          email,
          onChangeEmail,
          password,
          onChangePassword,
          registerToken,
          onChangeToken,
          formError,
          changeFormError
        )}
        <ErrorsView>{renderErrorMessage(errorMessage)}</ErrorsView>
        <Button
          primary
          text="Cadastrar"
          onPress={() => {
            if (isFormValid(email, password, registerToken, changeFormError)) {
              console.log('Cadastrar');
            }
          }}
        />
      </Content>
    </Container>
  );
};

export default SignUp;
