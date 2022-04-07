import styled from 'styled-components';
import {fadeIn} from 'styles/animation';

export const NoResult = styled.div`
  color: var(--color-gray);
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 800ms backwards;
`;
