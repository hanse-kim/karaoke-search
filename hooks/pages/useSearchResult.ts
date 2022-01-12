import {gql, useQuery} from '@apollo/client';
import {useState, useEffect, useCallback} from 'react';
import type {Song, SearchFilter, GQLSearchFilter} from 'types';

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
    }
  );
  const [fetchedData, setFetchedData] = useState<Song[]>([]);

  useEffect(() => {
    setFetchedData([]);
    setAnchor(1);
    setEnded(false);
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
