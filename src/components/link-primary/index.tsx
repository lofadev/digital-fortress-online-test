import { LinkProps } from 'react-router-dom';
import { LinkPrimaryStyled } from './styled';

interface IProps extends LinkProps {}

const LinkPrimary: React.FC<IProps> = (props) => <LinkPrimaryStyled {...props} />;

export default LinkPrimary;
