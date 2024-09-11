import { PropsWithChildren } from 'react';
import { WrapperStyled } from './styled';

const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <WrapperStyled>{children}</WrapperStyled>;
};

export default AuthLayout;
