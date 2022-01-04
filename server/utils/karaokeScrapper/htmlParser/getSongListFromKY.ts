import type {HTMLElement} from 'node-html-parser';
import type {Song} from 'types';
import type {Columns, HtmlType} from '../types';
import getSongId from './getSongId';

const SELECTOR_CHART_SEARCH_RESULT = '#search_chart_frm_2 > div';
const SELECTOR_CHAR_POPULAR = '#popular_chart_frm > div';

const SELECTOR_UL_HEADER = 'ul:first-child';
const SELECTOR_UL = 'ul:not(:first-child):not(:last-child)';

const NUMBER = '곡번호';
const TITLE = '곡명/아티스트';
const SINGER = '아티스트';

const KY = 'KY';

const getSongListFromKY = (document: HTMLElement, htmlType: HtmlType) => {
  const songList: Song[] = [];

  const chartElement = getChartElement(document, htmlType);
  const columns = getColumns(chartElement);
  const ulElements = getUlElements(document);

  for (const ul of ulElements) {
    const song = getSongFromUlElement(ul, columns);
    if (!song) break;
    songList.push(song);
  }

  return songList;
};

const getChartElement = (document: HTMLElement, htmlType: HtmlType) => {
  if (htmlType === 'POPULAR') {
    return document.querySelector(SELECTOR_CHAR_POPULAR);
  }

  return document.querySelector(SELECTOR_CHART_SEARCH_RESULT);
};

const getColumns = (chartElement: HTMLElement | null) => {
  if (!chartElement) return null;

  const columns: Columns = {};
  const liElements =
    chartElement
      .querySelector(SELECTOR_UL_HEADER)
      ?.getElementsByTagName('li') || [];

  for (let i = 0; i < liElements.length; i++) {
    const liInnerText = liElements[i].innerText.replace(/\s/g, '');
    for (const label of [NUMBER, TITLE, SINGER]) {
      if (columns[label]) {
        continue;
      } else if (liInnerText === label) {
        columns[label] = i;
      }
    }
  }

  return liElements.length === 0 ? null : columns;
};

const getUlElements = (document: HTMLElement) => {
  return document.querySelectorAll(SELECTOR_UL);
};

const getSongFromUlElement = (ul: HTMLElement, columns: Columns | null) => {
  if (!columns) return null;

  const liElements = ul.getElementsByTagName('li');

  const number = liElements[columns[NUMBER]].innerText;
  const title =
    liElements[columns[TITLE]].querySelector('span')?.innerText || 'null';
  const singer = liElements[columns[SINGER]].innerText;
  const karaoke = KY;

  return {
    id: getSongId(karaoke, number),
    number,
    title,
    singer,
    karaoke,
  } as Song;
};

export default getSongListFromKY;
