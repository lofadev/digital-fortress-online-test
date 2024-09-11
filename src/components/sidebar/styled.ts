import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const WrapperStyled = styled.div`
  background-color: ${({ theme }) => theme.black};
  height: 100%;
  border-radius: 16px;
  width: 312px;
  padding: 24px 13px;
`;

export const TopStyled = styled.div`
  padding-bottom: 36px;
  border-bottom: 1px solid #282828;
  margin-bottom: 36px;
`;

export const MenuWrapperStyled = styled.div``;

export const MenuItemStyled = styled.div`
  margin-bottom: 8px;
`;

export const LinkStyled = styled(NavLink)`
  display: block;
  width: 100%;
  height: 48px;
  border-radius: 12px;
  padding: 14px;

  &.active {
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.black};
  }
`;
