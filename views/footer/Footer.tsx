import {Footer as StyledFooter} from './styles';

const Footer = () => {
  return <StyledFooter>Copyright 2022. {process.env.NEXT_PUBLIC_USERNAME}</StyledFooter>;
};

export default Footer;
