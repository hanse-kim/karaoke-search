import Link from 'next/link';
import * as Styled from './styled';
import LogoSvg from 'public/assets/logo.svg';

interface Props {
  isHome?: boolean;
}

export const Logo = ({isHome}: Props) => {
  return (
    <Link href={process.env.NEXT_PUBLIC_HOME || '/'} passHref>
      <Styled.Logo data-is-home={isHome}>
        <LogoSvg viewBox='0 0 275 62' />
      </Styled.Logo>
    </Link>
  );
};
