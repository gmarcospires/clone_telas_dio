import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 80%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  //Propriedades para estilos dinâmicos
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Column = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  background-color: #151515;
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputBuscaContainer = styled.div`
  width: 11rem;
  height: 1.8rem;
  background-color: #2d2d37;
  border-radius: 0.5rem;
  padding: 0.125rem 0.313rem;
  margin: 0 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Menu = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  color: #ffffff;
  margin-right: 0.75rem;
  text-decoration: none;
  cursor: pointer;
`;

export const MenuRight = styled.a`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-size: 0.75rem;
  line-height: 1.5rem;
  color: #ffffff;
  margin-right: 0.75rem;
  text-decoration: none;
  cursor: pointer;
`;

export const UserPicture = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 1.3rem;
  border: 2px solid #ffffff;
`;

export const InputBusca = styled.input`
  background-color: transparent;
  flex: 1;
  border: 0;
  color: #ffffff;
`;
export const Logo = styled.img`
  width: 6.25rem;
  height: 2rem;
`;
