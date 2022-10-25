import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 80%;
  margin: 0 auto;
  margin-top: 7.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  line-height: 1.5rem;
  color: #ffffff;
`;

export const TitleHighlight = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 1.5rem;
  line-height: 1.5rem;
  color: #ffffff70;
`;

export const Column = styled.div`
  flex: ${({ flex }) => flex};
  padding-right: 1.5rem;
`;
