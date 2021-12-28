import {parse} from 'node-html-parser';
import type {Karaoke, Song} from 'types';
import getSongListFromKY from './getSongListFromKY';
import getSongListFromTJ from './getSongListFromTJ';

const htmlToSongList = (rawHtml: string, karaoke: Karaoke) => {
  let songList: Song[] = [];
  const document = parse(rawHtml);
  if (karaoke === 'TJ') {
    songList = getSongListFromTJ(document);
  } else if (karaoke === 'KY') {
    songList = getSongListFromKY(document);
  }

  return songList;
};

export default htmlToSongList;
