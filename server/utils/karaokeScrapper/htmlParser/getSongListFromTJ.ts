import type {HTMLElement} from 'node-html-parser';
import type {Song} from 'types';
import type {Columns} from '../types';
import getSongId from './getSongId';

const SELECTOR_TBODY = '#BoardType1 > table > tbody';
const SELECTOR_TR_HEADER = 'tr:first-child';
const SELECTOR_TR = 'tr:not(:first-child)';

const NUMBER = '곡번호';
const TITLE = '곡제목';
const SINGER = '가수';

const TJ = 'TJ';

const getSongListFromTJ = (document: HTMLElement) => {
  const songList: Song[] = [];

  const tbodyElement = getTbodyElement(document);
  const columns = getColumns(tbodyElement);
  const trElements = getTrElements(tbodyElement);

  for (const trElement of trElements) {
    const song = getSongFromTrElement(trElement, columns);
    if (!song) break;
    songList.push(song);
  }

  return songList;
};

const getTbodyElement = (document: HTMLElement) => {
  return document.querySelector(SELECTOR_TBODY);
};

const getColumns = (tbodyElement: HTMLElement | null) => {
  if (!tbodyElement) return null;

  const columns: Columns = {};
  const thElements =
    tbodyElement
      .querySelector(SELECTOR_TR_HEADER)
      ?.getElementsByTagName('th') || [];

  for (let i = 0; i < thElements.length; i++) {
    const thInnerText = thElements[i].innerText.replace(/\s/g, '');
    for (const label of [NUMBER, TITLE, SINGER]) {
      if (columns[label]) {
        continue;
      } else if (thInnerText === label) {
        columns[label] = i;
      }
    }
  }

  return thElements.length === 0 ? null : columns;
};

const getTrElements = (tableBody: HTMLElement | null) => {
  if (!tableBody) return [];

  return tableBody.querySelectorAll(SELECTOR_TR);
};

const getSongFromTrElement = (
  trElement: HTMLElement,
  columns: Columns | null
) => {
  const tdElements = trElement.getElementsByTagName('td');

  if (tdElements.length === 1 || columns === null) {
    return null;
  }

  const number = tdElements[columns[NUMBER]].innerText;
  const title = tdElements[columns[TITLE]].innerText;
  const singer = tdElements[columns[SINGER]].innerText;
  const karaoke = TJ;

  return {
    id: getSongId(karaoke, number),
    number,
    title,
    singer,
    karaoke,
  } as Song;
};

export default getSongListFromTJ;
