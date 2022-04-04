import React, {useContext} from 'react';
import {SearchFilterObject} from 'types';

interface ContextState {
  searchFilter?: SearchFilterObject;
}

interface ProviderProps {
  children?: React.ReactNode;
  searchFilter: Record<string, string | string[] | undefined>;
}

const SearchFilterContext = React.createContext<ContextState | null>(null);

export const SearchFilterProvider = ({
  children,
  searchFilter,
}: ProviderProps) => {
  return (
    <SearchFilterContext.Provider
      value={{
        searchFilter: searchFilter as SearchFilterObject,
      }}
    >
      {children}
    </SearchFilterContext.Provider>
  );
};

export const useSearchFilter = () => {
  const state = useContext(SearchFilterContext);

  return state && {...state.searchFilter};
};
