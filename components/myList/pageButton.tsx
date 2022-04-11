import React, {useCallback} from 'react';
import {PageButtonProps} from 'components/pageNav';
import * as Styled from './styled';

export const PageButton = React.memo(
  ({page, label, disabled, selected, setPage}: PageButtonProps) => {
    const clickHandler = useCallback(() => {
      setPage(page, () => window.scrollTo(0, 0));
    }, [page, setPage]);

    return (
      <Styled.PageButton
        variant={selected ? 'selected' : 'normal'}
        disabled={disabled}
        onClick={clickHandler}
      >
        {label || page}
      </Styled.PageButton>
    );
  }
);

PageButton.displayName = 'PageButton';
