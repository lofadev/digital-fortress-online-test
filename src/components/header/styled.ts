import styled from 'styled-components';

export const HeaderStyled = styled.header`
  padding: 24px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.black};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderSearchStyled = styled.div``;

export const HeaderRightStyled = styled.div``;

export const AvatarStyled = styled.img`
  border-radius: 100rem;
`;
