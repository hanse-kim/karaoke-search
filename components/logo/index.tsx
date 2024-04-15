import Link from 'next/link';
import LogoSvg from 'public/assets/logo.svg';
import * as Styled from './styled';

interface Props {}

export const Logo = ({}: Props) => {
  return (
    <Link href={process.env.NEXT_PUBLIC_HOME || '/'} passHref>
      <Styled.Logo>
        <LogoSvg viewBox='0 0 275 62' />
      </Styled.Logo>
    </Link>
  );
};
