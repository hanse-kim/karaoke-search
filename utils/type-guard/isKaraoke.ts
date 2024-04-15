import {Karaoke} from 'types';

export const isKaraoke = (value: unknown): value is Karaoke => {
  return value === 'TJ' || value === 'KY';
};
