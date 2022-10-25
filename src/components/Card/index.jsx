import { FiThumbsUp } from 'react-icons/fi';
import {
  CardContainer,
  Content,
  HasInfo,
  ImageBackground,
  PostInfo,
  UserInfo,
  UserPicture,
} from './styles';

const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src='https://static-cdn.jtvnw.net/jtv_user_pictures/77f39c7c-a51f-4c6b-8801-ca7b1d737a34-profile_banner-480.png' />
      <Content>
        <UserInfo>
          <UserPicture src='https://yt3.ggpht.com/ytc/AMLnZu8ols4v6xJtNosUSC8Ebj2qgK_qDC7pLzB5UYg3=s88-c-k-c0x00ffffff-no-rj' />
          <div>
            <h4>Alan Ferreira</h4>
            <p>Há 2 Minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso HTML e CSS</h4>
          <p>
            Projeto Feito no bootcamp dio ... <strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #JS</h4>
          <p>
            <FiThumbsUp /> 18
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
