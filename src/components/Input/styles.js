import styled from 'styled-components';

export const InputContainer = styled.div`
  max-width: 17rem;
  width: 100%;
  height: 1.8rem;
  border-bottom: 1px solid #3b3450;
  display: flex;
  align-items: center;
  margin-bottom: 1.25rem;
`;

export const IconContainer = styled.div`
  margin-right: 1.125rem;
`;

export const InputText = styled.input`
  background: transparent;
  color: #ffffff;
  border: 0;
  height: 1.875rem;
  width: 100%;
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 0.75rem;
  margin: 0.5rem;
`;
