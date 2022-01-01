import {EmptyPageWrapper, EmptyPageEmoticon, EmptyPageText} from './styles';

interface Props {
  text: string;
}

export const EmptyPage = (props: Props) => {
  return (
    <EmptyPageWrapper>
      <EmptyPageEmoticon />
      <EmptyPageText>
        {props.text.split('\n').map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </EmptyPageText>
    </EmptyPageWrapper>
  );
};
