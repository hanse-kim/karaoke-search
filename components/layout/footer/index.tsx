import * as Styled from './styled';

interface Props {
  isHome?: boolean;
}

export const Footer = ({isHome}: Props) => {
  return (
    <Styled.Footer data-is-home={isHome}>
      {`Copyright ${process.env.NEXT_PUBLIC_DEPLOY_YEAR}.`}
      <Styled.FooterLink href={process.env.NEXT_PUBLIC_GITHUB}>
        {process.env.NEXT_PUBLIC_USERNAME}
      </Styled.FooterLink>
    </Styled.Footer>
  );
};
