import React from 'react';
import {
  PageNavButton as StyledPageNavButton,
  PageNavButtonDisabled,
  PageNavButtonSelected,
} from './styles';

interface Props {
  setPage: (page: number) => void;
  page: number;
  label: string | number;
  isSelected?: boolean;
  isDisabled?: boolean;
}

const PageNavButton = (props: Props) => {
  const {label, isSelected, isDisabled, page, setPage} = props;

  if (isDisabled) {
    return <PageNavButtonDisabled>{label}</PageNavButtonDisabled>;
  }

  if (isSelected) {
    return <PageNavButtonSelected>{label}</PageNavButtonSelected>;
  }

  return (
    <StyledPageNavButton onClick={() => setPage(page)}>
      {label}
    </StyledPageNavButton>
  );
};

export default React.memo(PageNavButton);
