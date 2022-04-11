import {MyListSorting} from 'types';
import * as Styled from './styled';
import IconArrowSvg from 'public/assets/iconArrow.svg';

interface Props {
  sorting: MyListSorting;
  onClick?: () => void;
}

export const SortingButton = ({sorting, onClick}: Props) => {
  return (
    <Styled.FilterSortingButton variant='selected' onClick={onClick}>
      <Styled.FilterSortingButtonInner sorting={sorting}>
        <IconArrowSvg />
      </Styled.FilterSortingButtonInner>
    </Styled.FilterSortingButton>
  );
};
