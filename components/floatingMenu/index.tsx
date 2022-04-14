import * as Styled from './styled';
import {MyListButton} from './myListButton';
import {ThemeButton} from './themeButton';

export const FloatingMenu = () => {
  return (
    <Styled.FloatingMenu>
      <ThemeButton />
      <MyListButton />
    </Styled.FloatingMenu>
  );
};
