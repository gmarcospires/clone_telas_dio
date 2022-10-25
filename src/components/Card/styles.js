import styled from 'styled-components';

export const CardContainer = styled.div`
  width: 100%;
  background-color: #3b4651;
  position: relative;
  margin-bottom: 1.5rem;
`;

export const ImageBackground = styled.img`
  width: 100%;
  height: 11.25rem;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.75rem;
`;

export const UserInfo = styled.div`
  display: flex;
  felx-direction: row;
  margin-bottom: 0.75rem;

  div {
    margin-left: 0.75rem;
  }

  h4 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    font-style: normal;
    line-height: 1.5rem;
    color: #ffffff;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    font-style: normal;
    line-height: 1rem;
    color: #ffffff;
  }
`;

export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 3px solid #ffffff;
`;

export const PostInfo = styled.div`
  margin-bottom: 0.75rem;

  h4 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 1.125rem;
    font-style: normal;
    line-height: 1.5rem;
    color: #ffffff;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    font-size: 0.75rem;
    font-style: normal;
    line-height: 1rem;
  }
`;

export const HasInfo = styled.div`
  margin-top: 0.75rem;

  h4 {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 0.75rem;
    font-style: normal;
    line-height: 1rem;
    color: #ffffff;
  }

  p {
    font-family: 'Open Sans', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    font-style: normal;
    line-height: 1.5rem;
  }
`;
