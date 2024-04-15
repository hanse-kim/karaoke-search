import {gql, useQuery} from '@apollo/client';
import {useCallback, useEffect, useState} from 'react';
import type {GQLSearchFilter, SearchFilter, Song} from 'types';
import {isSearchFilter} from 'utils/type-guard/isSearchFilter';

const GET_SONG_LIST_BY_SEARCH = gql`
  query getSongListBySearch($filter: SearchFilter) {
    songListBySearch(filter: $filter) {
      id
      title
      number
      singer
      karaoke
    }
  }
`;

interface Data {
  songListBySearch: Song[];
}

interface Vars {
  filter: GQLSearchFilter;
}

const useSearchResult = (searchFilter: SearchFilter) => {
  const [anchor, setAnchor] = useState(1);
  const [isEnded, setEnded] = useState(false);
  const {loading: isLoading, data} = useQuery<Data, Vars>(
    GET_SONG_LIST_BY_SEARCH,
    {
      variables: {
        filter: {
          ...searchFilter,
          page: anchor,
        },
      },
      skip: !isSearchFilter(searchFilter),
    }
  );
  const [fetchedData, setFetchedData] = useState<Song[]>([]);

  useEffect(() => {
    if (Object.keys(searchFilter).length > 0) {
      setFetchedData([]);
      setAnchor(1);
      setEnded(false);
    }
  }, [searchFilter]);

  useEffect(() => {
    if (data && data.songListBySearch && !isLoading && !isEnded) {
      if (data.songListBySearch.length === 0) {
        setEnded(true);
        return;
      }

      setFetchedData((fetchedData) =>
        fetchedData.concat(data.songListBySearch)
      );
    }
  }, [data, isEnded, isLoading]);

  const fetchMore = useCallback(() => {
    setAnchor((anchor) => anchor + 1);
  }, []);

  return {
    setAnchor,
    isEnded,
    isLoading,
    songList: fetchedData,
    fetchMore,
  };
};

export default useSearchResult;
