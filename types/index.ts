export interface Song {
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

export type Karaoke = 'KY' | 'TJ';
