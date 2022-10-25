import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Container, TextContent, Title, TitleHighlight } from './styles';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClickLogin = () => {
    navigate('/login');
  };

  return (
    <>
      <Header />
      <Container>
        <div>
          <Title>
            <TitleHighlight>Implemente</TitleHighlight>
            <br /> o seu futuro global agora!
          </Title>
          <TextContent>
            Domine as tecnologias utilizadas pelas empresas mais inovadoras do
            mundo e encare seu novo desafio profissional, evoluindo em
            comunidade com os melhores experts.
          </TextContent>
          <Button
            title='Começar agora'
            variant='secondary'
            onClick={handleClickLogin}
          />
        </div>
        <div>
          <img
            src='https://hermes.digitalinnovation.one/public/components/pages/home/header/banner-home.png'
            alt='Imagem principal'
          />
        </div>
      </Container>
    </>
  );
};

export { Home };
