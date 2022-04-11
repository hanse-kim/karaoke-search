import {useCallback, useMemo} from 'react';
import {useRouter as useNextRouter} from 'next/router';
import {UrlObject} from 'url';

type Url = string | UrlObject;

interface TransitionOptions {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
}

export const useRouter = () => {
  const router = useNextRouter();

  const pathname = useMemo(() => {
    return router.pathname;
  }, [router.pathname]);

  const query = useMemo(() => {
    return router.query;
  }, [router.query]);

  const pushUrl = useCallback(
    async (url: Url, as?: Url, options?: TransitionOptions) => {
      await router.push(url, as, options);
    },
    [router]
  );

  const replaceUrl = useCallback(
    async (url: Url, as?: Url, options?: TransitionOptions) => {
      await router.replace(url, as, options);
    },
    [router]
  );

  const pushQuery = useCallback(
    async (newQuery: Record<string, string | number | boolean>) => {
      await pushUrl({pathname, query: {...query, ...newQuery}});
    },
    [pathname, pushUrl, query]
  );

  return {pushUrl, replaceUrl, pushQuery, pathname, query};
};
