import styled from 'styled-components';
import {boxModelStyles, BoxModelProps, stackStyles, StackProps} from './styles';

export const Box = styled.div<BoxModelProps>`
  ${boxModelStyles}
`;

export const Flex = styled(Box)<BoxModelProps>`
  display: flex;
`;

export const Stack = styled(Flex)<StackProps & BoxModelProps>`
  ${stackStyles}
`;
