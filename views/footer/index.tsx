import {FooterLink, FooterWrapper} from './styles';

interface Props {
  isHome?: boolean;
}

export const Footer = ({isHome}: Props) => {
  return (
    <FooterWrapper data-is-home={isHome}>
      {`Copyright ${process.env.NEXT_PUBLIC_DEPLOY_YEAR}.`}
      <FooterLink href={process.env.NEXT_PUBLIC_GITHUB}>
        {process.env.NEXT_PUBLIC_USERNAME}
      </FooterLink>
    </FooterWrapper>
  );
};
