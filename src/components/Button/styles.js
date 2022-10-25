import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  background: #565656;
  border-radius: 1rem;
  position: relative;
  color: #fff;
  padding: 0.125rem 0.75rem;
  min-width: 7.5rem;
  width: 100%;

  //Propriedades para estilos dinâmicos

  ${({ variant }) =>
    variant !== 'primary' &&
    css`
      min-width: 10rem;
      height: 2rem;
      background: #e4105d;

      &:hover {
        opacity: 0.8;
        cursor: pointer;
      }

      &::after {
        content: '';
        position: absolute;
        border: 1px solid #e4105d;
        top: -0.313rem;
        left: -0.313rem;
        width: calc(100% + 0.625rem);
        height: calc(100% + 0.625rem);
        border-radius: 1.3rem;
      }
    `}
`;
