import { Logo } from '~/assets';
import { menu } from './data';
import { LinkStyled, MenuItemStyled, MenuWrapperStyled, TopStyled, WrapperStyled } from './styled';

const Sidebar = () => {
  return (
    <WrapperStyled>
      <TopStyled>
        <img src={Logo} alt="" />
      </TopStyled>

      <MenuWrapperStyled>
        {menu.map((item) => (
          <MenuItemStyled key={item.title}>
            <LinkStyled to={item.to}>{item.title}</LinkStyled>
          </MenuItemStyled>
        ))}
      </MenuWrapperStyled>
    </WrapperStyled>
  );
};

export default Sidebar;
