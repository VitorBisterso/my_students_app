import React, { useState } from 'react';

import BackButton from '../components/backButton';
import TextInput from '../components/textInput';
import Text from '../components/text';
import Button from '../components/button';

import StyleConstants from '../../styleConstants';
import { Container, Content, Margin, Form } from './styles';

const renderForm = (
  email,
  onChangeEmail,
  password,
  onChangePassword,
  registerToken,
  onChangeToken
) => (
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
    <Margin />
    <TextInput
      value={registerToken}
      onChangeText={value => onChangeToken(value)}
      placeholder="Token"
    />
  </Form>
);

// eslint-disable-next-line react/prop-types
const SignUp = ({ navigation }) => {
  const { BIGGEST } = StyleConstants.fonts;

  const [email, onChangeEmail] = useState('');
  const [password, onChangePassword] = useState('');
  const [registerToken, onChangeToken] = useState('');

  return (
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
          onChangeToken
        )}
        <Button
          primary
          text="Cadastrar"
          onPress={() => console.log('Cadastrar')}
        />
      </Content>
    </Container>
  );
};

export default SignUp;
