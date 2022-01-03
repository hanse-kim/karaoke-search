export type Karaoke = 'KY' | 'TJ';

export interface Song {
  id: string;
  number: string;
  title: string;
  singer: string;
  karaoke: Karaoke;
}

export interface SearchFilter {
  searchBy: 'NUMBER' | 'TITLE' | 'SINGER';
  keyword: string;
  karaoke: Karaoke;
}

export interface GQLSearchFilter extends SearchFilter {
  page: number;
}
