const generateKey = (key: string, keyPrefix?: string) => {
  return keyPrefix ? `${keyPrefix}-${key}` : key;
};

export const addToStorage = (key: string, item: any, keyPrefix?: string) => {
  if (!localStorage) return;
  localStorage.setItem(generateKey(key, keyPrefix), JSON.stringify(item));
};

export const removeFromStorage = (key: string, keyPrefix?: string) => {
  if (!localStorage) return;
  localStorage.removeItem(generateKey(key, keyPrefix));
};

export const getFromStorage = (key: string, keyPrefix?: string) => {
  if (!localStorage) return null;
  const rawData = localStorage.getItem(generateKey(key, keyPrefix));
  if (!rawData) return null;
  return JSON.parse(rawData);
};

export const getAllFromStorage = <T>(keyPrefix: string) => {
  const data: {[key: string]: T} = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key && key?.startsWith(keyPrefix) && key.length > keyPrefix.length) {
      data[key.slice(keyPrefix.length + 1)] = getFromStorage(key);
    }
  }

  return data;
};
