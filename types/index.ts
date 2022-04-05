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
  searchBy: 'NUMBER' | 'TITLE' | 'SINGER';
  keyword: string;
  karaoke: Karaoke;
}

export interface GQLSearchFilter extends SearchFilter {
  page: number;
}
