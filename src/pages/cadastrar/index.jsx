import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
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

const Cadastrar = () => {
  const navigate = useNavigate();
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
            <TitleLogin>Comece agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form
              noValidate
              action=''
              onSubmit={() => {
                navigate('/feed');
              }}
            >
              <Input
                placeholder='Nome Completo'
                leftIcon={<MdPerson />}
              ></Input>
              <Input placeholder='E-mail' leftIcon={<MdEmail />}></Input>
              <Input
                placeholder='Senha'
                type='password'
                leftIcon={<MdLock />}
              ></Input>
              <Button
                title='Criar minha conta grátis'
                variant='secondary'
                type='button'
              />
            </form>
            <Row>
              <p>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </p>
            </Row>
            <Row>
              Já tenho conta. <CriarText>Fazer Login</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  );
};

export { Cadastrar };
