import { Input } from 'antd';
import styled from 'styled-components';

export const InputStyled = styled(Input.Password)`
  padding: 0 14px;
  height: 40px;
  border: 1px solid transparent;
  font-size: 16px;
  color: ${({ theme }) => theme.textPrimary};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.lightBlack};
  transition: all 0.2s linear;

  &.ant-input-affix-wrapper:focus-within,
  &.ant-input-outlined:focus,
  &.ant-input-outlined:hover {
    background-color: ${({ theme }) => theme.lightBlack} !important;
    border-color: ${({ theme }) => theme.primary};
    box-shadow: 0 0 0 4px rgba(132, 220, 245, 0.24);
  }
`;

export const LabelStyled = styled.label`
  display: inline-block;
  margin-bottom: 5px;
  font-size: 13px;
`;
