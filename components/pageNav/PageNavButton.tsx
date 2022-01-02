import {
  PageNavButton as StyledPageNavButton,
  PageNavButtonDisabled,
  PageNavButtonSelected,
} from './styles';

interface Props {
  onClick?: () => void;
  label: string | number;
  isSelected?: boolean;
  isDisabled?: boolean;
}

const PageNavButton = (props: Props) => {
  const {label, isSelected, isDisabled, onClick} = props;

  if (isDisabled) {
    return <PageNavButtonDisabled>{label}</PageNavButtonDisabled>;
  }

  if (isSelected) {
    return <PageNavButtonSelected>{label}</PageNavButtonSelected>;
  }

  return <StyledPageNavButton onClick={onClick}>{label}</StyledPageNavButton>;
};

export default PageNavButton;
