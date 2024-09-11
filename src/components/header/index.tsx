import { FormProvider, useForm } from 'react-hook-form';
import { Avatar } from '~/assets';
import FieldInput from '../form/input';
import { AvatarStyled, HeaderRightStyled, HeaderSearchStyled, HeaderStyled } from './styled';

interface IFormSearch {
  search: string;
}

const Header = () => {
  const methods = useForm<IFormSearch>({
    defaultValues: {
      search: '',
    },
  });

  return (
    <HeaderStyled>
      <HeaderSearchStyled>
        <FormProvider {...methods}>
          <FieldInput
            name="search"
            style={{ height: '48px', width: '340px' }}
            placeholder="Search anything"
            // prefix={<Search />}
          />
        </FormProvider>
      </HeaderSearchStyled>

      <HeaderRightStyled>
        <AvatarStyled src={Avatar} />
      </HeaderRightStyled>
    </HeaderStyled>
  );
};

export default Header;
