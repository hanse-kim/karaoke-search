import {RippleButton} from 'components/rippleButton';
import * as Styled from './styled';
import IconStarSvg from 'public/assets/iconStar.svg';

interface Props {
  inMyList?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const MyListButton = ({inMyList, onClick}: Props) => {
  return (
    <Styled.MyListButtonWrapper data-in-my-list={inMyList}>
      <RippleButton onClick={onClick}>
        <IconStarSvg />
      </RippleButton>
    </Styled.MyListButtonWrapper>
  );
};
