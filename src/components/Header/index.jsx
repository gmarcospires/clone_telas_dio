import { Button } from '../Button';
import { useNavigate } from 'react-router-dom';
import {
  Column,
  Container,
  InputBusca,
  InputBuscaContainer,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper,
  Logo,
} from './styles';

const Header = ({ autenticado }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleCadastrar = () => {
    navigate('/cadastro');
  };

  return (
    <Wrapper>
      <Container>
        <Row>
          <Logo
            src='https://hermes.digitalinnovation.one/assets/diome/logo.svg'
            alt='Logo DIO'
          ></Logo>
          {autenticado ? (
            <>
              <InputBuscaContainer>
                <InputBusca placeholder='Buscar...' />
              </InputBuscaContainer>
              <Menu>Live Code</Menu>
              <Menu>Global</Menu>
            </>
          ) : null}
        </Row>
        <Row>
          {autenticado ? (
            <UserPicture src='https://yt3.ggpht.com/ytc/AMLnZu8ols4v6xJtNosUSC8Ebj2qgK_qDC7pLzB5UYg3=s900-c-k-c0x00ffffff-no-rj'></UserPicture>
          ) : (
            <>
              <MenuRight href='/'>Home</MenuRight>
              <Button title={'Entrar'} onClick={handleLogin} />
              <Button title={'Cadastrar'} onClick={handleCadastrar} />
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
