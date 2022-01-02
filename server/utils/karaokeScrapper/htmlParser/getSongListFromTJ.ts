import type {HTMLElement} from 'node-html-parser';
import type {Song} from 'types';

const SELECTOR_TBODY = '#BoardType1 > table > tbody';
const SELECTOR_TR = 'tr:not(:first-child)';

const COLUMN_NUMBER = 0;
const COLUMN_TITLE = 1;
const COLUMN_SINGER = 2;

const TJ = 'TJ';

const getSongListFromTJ = (document: HTMLElement) => {
  const songList: Song[] = [];
  const trElements = getTrElements(document);
  for (const tr of trElements) {
    const song = getSongFromTrElement(tr);
    if (!song) break;
    songList.push(song);
  }

  return songList;
};

const getTrElements = (document: HTMLElement) => {
  const tbody = document.querySelector(SELECTOR_TBODY);
  if (!tbody) return [];
  return tbody.querySelectorAll(SELECTOR_TR);
};

const getSongFromTrElement = (tr: HTMLElement): Song | null => {
  const tdElements = tr.getElementsByTagName('td');

  if (tdElements.length === 1) {
    return null;
  }

  return {
    number: tdElements[COLUMN_NUMBER].innerText,
    title: tdElements[COLUMN_TITLE].innerText,
    singer: tdElements[COLUMN_SINGER].innerText,
    karaoke: TJ,
  };
}

export default getSongListFromTJ;
