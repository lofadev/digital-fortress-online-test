import styled from 'styled-components';

export const WrapperStyled = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  background-color: ${({ theme }) => theme.lightBlack};
  height: 100dvh;
  padding: 12px;
  display: flex;
  gap: 12px;
`;

export const MainStyled = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
