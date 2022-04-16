import {useEffect} from 'react';
import _ from 'lodash';

const useInfiniteScroll = (
  fetchMore: () => void,
  isStop: boolean,
  throttleWait = 200
) => {
  const handleScroll = _.throttle(() => {
    const element = document.documentElement;
    if (!element) return;
    const scrollBottom = Math.round(
      element.scrollHeight - (element.scrollTop + window.innerHeight)
    );
    if (scrollBottom === 0 && !isStop) {
      fetchMore();
    }
  }, throttleWait);

  useEffect(() => {
    if (!document) return;
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  });
};

export default useInfiniteScroll;
