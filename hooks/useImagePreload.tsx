import {useEffect} from 'react';

const useImagePreload = (imageSrcList: string[]) => {
  useEffect(() => {
    const cache = async () => {
      const promises = imageSrcList.map(
        (src) =>
          new Promise((resolve, reject) => {
            const img = new Image();
            img.src = src;
            img.onload = resolve;
            img.onerror = reject;
          })
      );

      await Promise.all(promises).catch(console.error);
    };

    cache();
  }, [imageSrcList]);
};

export default useImagePreload;
