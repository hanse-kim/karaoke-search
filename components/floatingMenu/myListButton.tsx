import {FloatingMenuButton} from './button';
import IconBookmarkSvg from 'public/assets/iconBookmark.svg';

export const MyListButton = () => {
  return (
    <FloatingMenuButton href='/myList'>
      <IconBookmarkSvg />
    </FloatingMenuButton>
  );
};
