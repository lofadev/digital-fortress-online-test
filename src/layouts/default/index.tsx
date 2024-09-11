import { PropsWithChildren } from 'react';
import { Header } from '~/components';
import Sidebar from '~/components/sidebar';
import { MainStyled, WrapperStyled } from './styled';

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <WrapperStyled>
      <Sidebar />
      <MainStyled>
        <Header />
        {children}
      </MainStyled>
    </WrapperStyled>
  );
};

export default DefaultLayout;
