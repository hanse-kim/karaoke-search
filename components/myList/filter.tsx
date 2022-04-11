import React from 'react';
import {RaisedButton} from 'components/raisedButton';
import * as Styled from './styled';
import {MyListFilter, MyListKaraoke, MyListSortBy} from 'types';
import {SortingButton} from './sortingButton';
import {useRouter} from 'hooks/useRouter';

interface Props {
  filter: MyListFilter;
  sortByList: {
    label: string;
    value: MyListSortBy;
  }[];
  karaokeList: {
    label: string;
    value: MyListKaraoke;
  }[];
}

export const Filter = React.memo(({filter, sortByList, karaokeList}: Props) => {
  const {pushQuery} = useRouter();

  return (
    <Styled.Filter>
      <Styled.FilterItemGroup>
        {karaokeList.map((karaoke) => (
          <RaisedButton
            key={karaoke.value}
            variant={karaoke.value === filter.karaoke ? 'selected' : 'normal'}
            onClick={() => pushQuery({karaoke: karaoke.value, page: 1})}
          >
            {karaoke.label}
          </RaisedButton>
        ))}
      </Styled.FilterItemGroup>
      <Styled.FilterItemGroup>
        <div>정렬:</div>
        <Styled.FilterSelect
          value={filter.sortBy}
          onChange={(e) => pushQuery({sortBy: e.target.value, page: 1})}
        >
          {sortByList.map((sortBy) => (
            <option key={sortBy.value} value={sortBy.value}>
              {sortBy.label}
            </option>
          ))}
        </Styled.FilterSelect>
        <SortingButton
          sorting={filter.sorting}
          onClick={() =>
            pushQuery({sorting: filter.sorting === 'DESC' ? 'ASC' : 'DESC'})
          }
        />
      </Styled.FilterItemGroup>
    </Styled.Filter>
  );
});

Filter.displayName = 'MyListFilter';
