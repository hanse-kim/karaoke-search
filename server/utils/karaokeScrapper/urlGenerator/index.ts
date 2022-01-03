import type {GQLSearchFilter} from 'types';
import getUrlKY from './getUrlKY';
import getUrlTJ from './getUrlTJ';

const getUrl = (filter: GQLSearchFilter) => {
  let url = '';
  if (filter.karaoke === 'TJ') {
    url = getUrlTJ(filter);
  } else if (filter.karaoke === 'KY') {
    url = getUrlKY(filter);
  }

  console.log(url);

  return url;
};

export default getUrl;
