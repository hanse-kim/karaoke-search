import {useCallback, useState} from 'react';

const useSearchForm = () => {
  const [karaoke, setKaraoke] = useState('TJ');
  const [searchBy, setSearchBy] = useState('TITLE');
  const [keyword, setKeyword] = useState('');

  const onKaraokeChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setKaraoke(e.target.value);
    },
    []
  );

  const onSearchByChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSearchBy(e.target.value);
    },
    []
  );

  const onKeywordChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setKeyword(e.target.value);
    },
    []
  );

  return {
    karaoke,
    searchBy,
    keyword,
    onKaraokeChange,
    onSearchByChange,
    onKeywordChange,
  };
};

export default useSearchForm;
