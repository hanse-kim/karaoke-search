import styled, {css} from 'styled-components';
import {fadeIn} from 'styles/animation';
import {largeText, smallText} from 'styles/typography';

const SONG_COUNT_PER_FETCH = 15;

export const SongListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const ListItem = styled.li`
  animation: ${fadeIn} 500ms backwards;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.03);
  }

  ${Array(SONG_COUNT_PER_FETCH)
    .fill(null)
    .map(
      (_, i) => css`
        &: nth-of-type(${i + 1}) {
          animation-delay: ${i * 40}ms;
        }
      `
    )};
`;

export const SongItemWrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 1.5rem;
  padding: 0.5rem 1.5rem;
  color: var(--color-list-item-content);
  background-color: var(--color-list-item-bg);
  border-radius: var(--radius-lg);
  box-shadow: 0 4px 12px var(--color-shadow-weak);
`;

export const SongNumber = styled.div`
  ${largeText};
  width: 4rem;
  text-align: center;
`;

export const Singer = styled.div`
  ${smallText};
  color: var(--color-list-item-content-sub);
`;

export const Buttons = styled.div`
  display: flex;
  column-gap: 0.5rem;
`;

export const ListItemLoading = styled.li`
  height: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;