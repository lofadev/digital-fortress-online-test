import { Helmet } from 'react-helmet-async';
import { FormProvider, useForm } from 'react-hook-form';
import FieldCheckbox from '~/components/form/checkbox';
import FieldInput from '~/components/form/input';
import FieldPassword from '~/components/form/password';
import LinkPrimary from '~/components/link-primary';
import {
  ButtonStyled,
  CMOStyled,
  DescStyled,
  FormActionsStyled,
  FormGroupStyled,
  FormMainStyled,
  InfoStyled,
  LoginStyled,
  SignUpStyled,
  SubTitleStyled,
  TitleHeadStyled,
  WrapperStyled,
} from './styled';

interface IFormData {
  email: string;
  password: string;
  isRemember: boolean;
}

const SignIn = () => {
  const methods = useForm<IFormData>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <WrapperStyled>
      <Helmet>
        <title>SignIn page</title>
      </Helmet>
      <LoginStyled>
        <TitleHeadStyled>
          Hello, <span>Digital Fortress</span>
        </TitleHeadStyled>
        <DescStyled>Log in to platform to start creating magic.</DescStyled>

        <FormMainStyled>
          <FormProvider {...methods}>
            <FormGroupStyled>
              <FieldInput name="email" />
            </FormGroupStyled>
            <FormGroupStyled>
              <FieldPassword name="password" />
            </FormGroupStyled>

            <FormActionsStyled>
              <FieldCheckbox name="isRemember" question="Remember me" />
              <LinkPrimary to="/forgot-password">Forgot Password?</LinkPrimary>
            </FormActionsStyled>

            <ButtonStyled type="primary" size="small" rounded="lg">
              Log in
            </ButtonStyled>
          </FormProvider>

          <SignUpStyled>
            Don’t have an account? <LinkPrimary to="/sign-up">Sign Up</LinkPrimary>
          </SignUpStyled>
        </FormMainStyled>
      </LoginStyled>
      <InfoStyled>
        <h2>Digital Fortress has been a game-changer for our content creation process.</h2>
        <h2>The AI-powered tools are incredibly user-friendly and have saved us countless hours of work.</h2>

        <SubTitleStyled>Lily Alisson</SubTitleStyled>
        <CMOStyled>CMO at Digital Fortress</CMOStyled>
      </InfoStyled>
    </WrapperStyled>
  );
};

export default SignIn;
