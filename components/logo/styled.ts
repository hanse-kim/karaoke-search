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
  color: var(--color-logo);
  display: flex;
  transform: none;
  transition: transform 200ms;

  &[data-is-home='true'] {
    color: var(--color-home-logo);
  }

  &:hover {
    animation: ${logoHoverAnimatnion} 800ms forwards;
  }
`;
