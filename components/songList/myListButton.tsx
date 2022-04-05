import {RippleButton} from 'components/rippleButton';
import {MyListButtonWrapper} from './styles';
import IconStarSvg from 'public/assets/iconStar.svg';

interface Props {
  inMyList?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const MyListButton = ({inMyList, onClick}: Props) => {
  return (
    <MyListButtonWrapper data-in-my-list={inMyList}>
      <RippleButton type='button' onClick={onClick}>
        <IconStarSvg />
      </RippleButton>
    </MyListButtonWrapper>
  );
};
