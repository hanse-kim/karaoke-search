import {useRouter as useNextRouter} from 'next/router';
import {useCallback} from 'react';
import {UrlObject} from 'url';

type Url = string | UrlObject;

interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
}

export const useRouter = () => {
  const router = useNextRouter();

  const pushUrl = useCallback(
    (url: Url, as?: Url, options?: TransitionOptions) => {
      router.push(url, as, options);
    },
    [router]
  );

  const replaceUrl = useCallback(
    (url: Url, as?: Url, options?: TransitionOptions) => {
      router.replace(url, as, options);
    },
    [router]
  );

  return {pushUrl, replaceUrl};
};
