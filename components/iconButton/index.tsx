import {IconButton} from './styles';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset' | undefined;
}

export const SearchIconButton = (props: Props) => {
  return (
    <IconButton
      onClick={props.onClick}
      width='14px'
      height='14px'
      path='/assets/icon_search.svg'
    />
  );
};
