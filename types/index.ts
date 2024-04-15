export type Karaoke = 'KY' | 'TJ';

export interface Song {
  id: string;
  number: string;
  title: string;
  singer: string;
  karaoke: Karaoke;
}

export interface MyListSong extends Song {
  createdAt: number;
}

export type MyList = Record<string, MyListSong>;

export interface SearchFilterObject {
  searchBy?: 'NUMBER' | 'TITLE' | 'SINGER' | (string & {});
  keyword?: string;
  karaoke?: Karaoke | (string & {});
}

export interface SearchFilter {
  searchBy: SearchBy;
  keyword: string;
  karaoke: Karaoke;
}

export type SearchBy = 'NUMBER' | 'TITLE' | 'SINGER';

export type MyListKaraoke = Karaoke | 'ALL';
export type MyListSortBy = SearchBy | 'ADDED_AT';
export type MyListSorting = 'ASC' | 'DESC';

export interface MyListFilter {
  karaoke: MyListKaraoke;
  sortBy: MyListSortBy;
  sorting: MyListSorting;
  page: number;
}

export interface GQLSearchFilter extends SearchFilter {
  page: number;
}
