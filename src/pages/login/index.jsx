import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MdEmail, MdLock } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import * as yup from 'yup';
import {
  Column,
  Container,
  CriarText,
  EsqueciText,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
} from './styles';

//Validar Form
const schema = yup
  .object({
    email: yup
      .string()
      .email('E-mail não é válido')
      .required('Campo Obrigatório'),
    password: yup
      .string()
      .min(3, 'No mínimo 3 caracteres')
      .required('Campo Obrigatório'),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();
  const onSubmit = () => navigate('/feed');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Já tem cadastro?</TitleLogin>
            <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Input
                name='email'
                placeholder='E-mail'
                leftIcon={<MdEmail />}
                control={control}
                errorMessage={errors.email?.message}
              ></Input>
              <Input
                name='password'
                placeholder='Senha'
                type='password'
                leftIcon={<MdLock />}
                control={control}
                errorMessage={errors.password?.message}
              ></Input>
              <Button title='Entrar' variant='secondary' type='submit' />
            </form>
            <Row>
              <EsqueciText>Esqueci minha senha</EsqueciText>
              <CriarText>Criar conta</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Login };
