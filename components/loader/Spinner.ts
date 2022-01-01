import {ThemeProps} from 'components/_common/styles';
import styled, {keyframes} from 'styled-components';

interface SpinnerProps extends ThemeProps {
  size?: number;
}

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.span.attrs<SpinnerProps>((props) => ({
  size: props.size || 1,
}))<SpinnerProps>`
  width: ${(props) => props.size}em;
  height: ${(props) => props.size}em;
  border: ${(props) =>
    `${props.size! * 0.2}em solid ${props.theme.color.gray[0]}`};
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: ${rotation} 0.8s linear infinite;
`;

export default Spinner;
