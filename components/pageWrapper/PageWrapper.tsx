import {Article, Main} from './styles';

interface Props {
  children?: React.ReactNode;
}

const PageWrapper = (props: Props) => {
  return (
    <Main>
      <Article>{props.children}</Article>
    </Main>
  );
};

export default PageWrapper;
