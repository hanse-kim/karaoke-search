import styled from 'styled-components';
import {fadeIn} from 'styles/animation';

export const NoResult = styled.div`
  color: var(--color-no-result);
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  row-gap: 1.5rem;
  font-size: var(--font-size-xl);
  animation: ${fadeIn} 800ms backwards;
`;
