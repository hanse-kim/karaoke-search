import Link from 'next/link';
import {UrlObject} from 'url';
import * as Styled from './styled';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  href?: UrlObject | string;
  children?: React.ReactNode;
}

export const FloatingMenuButton = ({onClick, href, children}: Props) => {
  if (href) {
    return (
      <Link href={href} passHref>
        <Styled.FloatingMenuButton onClick={onClick}>
          {children}
        </Styled.FloatingMenuButton>
      </Link>
    );
  }

  return (
    <Styled.FloatingMenuButton onClick={onClick}>
      {children}
    </Styled.FloatingMenuButton>
  );
};
