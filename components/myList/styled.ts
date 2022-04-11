import {RaisedButton} from 'components/raisedButton';
import styled from 'styled-components';
import {MyListSorting} from 'types';

export const MyList = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const Filter = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--color-heading);
`;

export const FilterItemGroup = styled.div`
  display: flex;
  column-gap: 8px;
  align-items: center;
`;

export const FilterSelect = styled.select`
  background: none;
  border: none;

  & > option {
    color: var(--color-input-content);
  }
`;

export const FilterSortingButton = styled(RaisedButton)`
  display: flex;
  padding: 2px;
  border-radius: var(--radius-full);
`;

export const FilterSortingButtonInner = styled.div<{
  sorting?: MyListSorting;
}>`
  display: flex;
  transform: rotate(${(props) => (props.sorting === 'ASC' ? '0' : '180deg')});
  transition: transform 200ms;
`;

export const PageNav = styled.nav`
  display: flex;
  column-gap: 8px;
  justify-content: center;
  align-items: center;
`;

export const PageButton = styled(RaisedButton)`
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 32px;
`;
