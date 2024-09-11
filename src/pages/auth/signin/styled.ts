import styled from 'styled-components';
import Button from '~/components/button/Button';

export const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100%;
`;

export const InfoStyled = styled.div`
  background: #ccc;
`;

export const LoginStyled = styled.div`
  padding: 32px 112px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleHeadStyled = styled.h1`
  font-size: 36px;
  line-height: 44px;
  color: ${({ theme }) => theme.textPrimary};

  & > span {
    background: linear-gradient(45deg, #4d62e5 0%, #87ddee 45.31%, #b6f09c 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 600;
  }
`;

export const DescStyled = styled.p`
  margin-top: 24px;
  margin-bottom: 64px;
  color: ${({ theme }) => theme.textSecondary};
`;

export const FormMainStyled = styled.div``;

export const FormActionsStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 48px 0;
`;

export const SignUpStyled = styled.p`
  text-align: center;
  color: ${({ theme }) => theme.textSecondary};
  font-weight: 600;
  margin-top: 48px;
`;

export const ButtonStyled = styled(Button)`
  width: 100%;
  color: #0c1132;
`;

export const FormGroupStyled = styled.div`
  margin-bottom: 24px;
`;

export const ImgStyled = styled.img`
  width: 100%;
  height: 100vh;
`;
