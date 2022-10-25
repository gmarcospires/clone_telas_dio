import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { Userinfo } from '../../components/UserInfo';
import { Container, Column, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight># Ranking 5 top da semana</TitleHighlight>
          <Userinfo
            percentual={90}
            nome='Alan Ferreira'
            image='https://yt3.ggpht.com/ytc/AMLnZu8ols4v6xJtNosUSC8Ebj2qgK_qDC7pLzB5UYg3=s88-c-k-c0x00ffffff-no-rj'
          />
          <Userinfo
            percentual={80}
            nome='Alan Ferreira'
            image='https://yt3.ggpht.com/ytc/AMLnZu8ols4v6xJtNosUSC8Ebj2qgK_qDC7pLzB5UYg3=s88-c-k-c0x00ffffff-no-rj'
          />
          <Userinfo
            percentual={70}
            nome='Alan Ferreira'
            image='https://yt3.ggpht.com/ytc/AMLnZu8ols4v6xJtNosUSC8Ebj2qgK_qDC7pLzB5UYg3=s88-c-k-c0x00ffffff-no-rj'
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
