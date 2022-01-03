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

export const EmptyHeartIconButton = (props: Props) => {
  return (
    <IconButton
      onClick={props.onClick}
      width='20px'
      height='20px'
      path='/assets/icon_heart_empty.svg'
    />
  );
};

export const FilledHeartIconButton = (props: Props) => {
  return (
    <IconButton
      onClick={props.onClick}
      width='20px'
      height='20px'
      path='/assets/icon_heart_filled.svg'
    />
  );
};


export const MyListIconButton = (props: Props) => {
    return (
      <IconButton
        onClick={props.onClick}
        width='20px'
        height='20px'
        path='/assets/icon_mylist.svg'
      />
    );
}