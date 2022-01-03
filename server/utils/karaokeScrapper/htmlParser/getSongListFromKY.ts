import type {HTMLElement} from 'node-html-parser';
import type {Song} from 'types';
import getSongId from './getSongId';

const SELECTOR_UL =
  '#search_chart_frm_2 > div > ul.search_chart_list:not(:first-child)';

const ORDER_NUMBER = 1;
const ORDER_TITLE = 2;
const ORDER_SINGER = 3;

const KY = 'KY';

const getDataFromKY = (document: HTMLElement) => {
  const songList: Song[] = [];
  const ulElements = getUlElements(document);
  for (const ul of ulElements) {
    songList.push(getSongFromUlElement(ul));
  }

  return songList;
};

const getUlElements = (document: HTMLElement) => {
  return document.querySelectorAll(SELECTOR_UL);
}

const getSongFromUlElement = (ul: HTMLElement): Song => {
  const liElements = ul.getElementsByTagName('li');

  const number = liElements[ORDER_NUMBER].innerText;
  const title = liElements[ORDER_TITLE].querySelector('span')?.innerText || 'null';
  const singer = liElements[ORDER_SINGER].innerText;
  const karaoke = KY;

  return {
    id: getSongId(karaoke, number),
    number,
    title,
    singer,
    karaoke,
  };
}

export default getDataFromKY;
