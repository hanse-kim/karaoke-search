import type {SizeProps} from 'components/_common/styles';
import styled from 'styled-components';

interface IconButtonProps extends SizeProps {
  path: string;
}

export const IconButton = styled.button<IconButtonProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  background: no-repeat center
    url(${(props) => `${props.path}${props.theme.darkModeSuffix}`}.svg);
  background-size: cover;

  border: none;
  cursor: pointer;
`;
