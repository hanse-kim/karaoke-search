const useImagePreload = () => {
  const cacheImage = async (imageSrcList: string[]) => {
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

  return {cacheImage};
};

export default useImagePreload;
