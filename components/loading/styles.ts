import styled, {keyframes} from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  50% {
    opacity: 0.2;
  }

  to {
    opacity: 1;
  }
`;

const blink = keyframes`
  0% {
    opacity: 0.4;
    transform: scaleY(60%);
  }

  33% {
    opacity: 1;
    transform: scaleY(100%);
  }

  66% {
    opacity: 0.4;
    transform: scaleY(60%);
  }
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 24px;
  height: 24px;

  animation: ${fadeIn} 500ms forwards;
`;

export const LoadingFragment = styled.span`
  width: 4px;
  height: 100%;
  background-color: var(--color-main);
  border-radius: var(--radius-full);
  opacity: 0.4;
  transform: scaleY(60%);

  animation: ${blink} 1500ms infinite;

  &:nth-of-type(2) {
    animation-delay: 500ms;
  }

  &:nth-of-type(3) {
    animation-delay: 1000ms;
  }
`;
