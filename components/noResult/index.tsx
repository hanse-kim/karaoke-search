import NoResultSvg from 'public/assets/noResult.svg';
import NoMyListSvg from 'public/assets/noMyList.svg';
import * as Styled from './styled';

export const NoResult = () => {
  return (
    <Styled.NoResult>
      <NoResultSvg />
      <p>결과를 찾지 못했습니다...</p>
    </Styled.NoResult>
  );
};

export const NoMyList = () => {
  return (
    <Styled.NoResult>
      <NoMyListSvg />
      <p>마이리스트가 비어 있습니다!</p>
    </Styled.NoResult>
  );
};
