import {Button} from 'components/button';
import {MyListIconButton} from 'components/iconButton';
import useMediaQuery from 'hooks/useMediaQuery';
import {useRouter} from 'next/router';
import {breakPoint} from 'styles/units';

const MyListButton = () => {
  const router = useRouter();
  const {matches} = useMediaQuery(`(max-width: ${breakPoint.tablet})`);

  const moveToMyListPage = () => {
    router.push('/myList');
  };

  if (matches) return <MyListIconButton onClick={moveToMyListPage} />;

  return <Button label='마이리스트' onClick={moveToMyListPage} />;
};

export default MyListButton;
