import {parse} from 'node-html-parser';
import type {Karaoke, Song} from 'types';
import type {HtmlType} from '../types';
import getSongListFromKY from './getSongListFromKY';
import getSongListFromTJ from './getSongListFromTJ';

const getSongListFromHtml = (
  rawHtml: string,
  karaoke: Karaoke,
  htmlType: HtmlType
) => {
  let songList: Song[] = [];
  const document = parse(rawHtml);
  if (karaoke === 'TJ') {
    songList = getSongListFromTJ(document);
  } else if (karaoke === 'KY') {
    songList = getSongListFromKY(document, htmlType);
  }

  return songList;
};

export default getSongListFromHtml;
