import styled from 'styled-components';
import {fadeIn} from 'styles/animation';

export const NoResultWrapper = styled.div`
  color: var(--color-gray);
  height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 800ms backwards;
`;
