import styled, {keyframes} from 'styled-components';

const logoHoverAnimatnion = keyframes`
  0% {
    transform: none;
  }

  30% {
    transform: scale(1.1);
  }

  35% {
    transform: scale(1.1) rotate(5deg);
  }

  45% {
    transform: scale(1.1) rotate(-5deg);
  }

  50% {
    transform: scale(1.1) rotate(5deg);
  }

  55% {
    transform: scale(1.1) rotate(-5deg);
  }

  60% {
    transform: scale(1.1) rotate(5deg);
  }

  65% {
    transform: scale(1.1) rotate(-5deg);
  }

  70% {
    transform: scale(1.1) rotate(5deg);
  }

  75% {
    transform: scale(1.1);
  }

  100% {
    transform: none;
  }
`;

export const Logo = styled.a<{isHome?: boolean}>`
  width: 95px;
  height: 21px;
  color: var(--color-logo);
  display: flex;
  transform: none;
  transition: transform 200ms;

  &[data-is-home='true'] {
    width: 275px;
    height: 62px;
    color: var(--color-home-logo);
  }

  & > svg {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 767px) {
    &[data-is-home='true'] {
      width: 206px;
      height: 47px;
      color: var(--color-home-logo);
    }
  }

  @media (hover: hover) {
    &:hover {
      animation: ${logoHoverAnimatnion} 800ms forwards;
    }
  }
`;
