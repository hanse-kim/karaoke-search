export type Karaoke = 'KY' | 'TJ' | (string & {});

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

export interface SearchFilterObject {
  [key: string]: unknown;
  searchBy?: 'NUMBER' | 'TITLE' | 'SINGER' | (string & {});
  keyword?: string;
  karaoke?: Karaoke;
}

export interface SearchFilter {
  searchBy: 'NUMBER' | 'TITLE' | 'SINGER' | (string & {});
  keyword: string;
  karaoke: Karaoke;
}

export interface GQLSearchFilter extends SearchFilter {
  page: number;
}
