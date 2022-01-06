import {Main} from 'components/pageWrapper';
import {Footer} from 'views/footer';
import {Header} from 'views/header';
import {Home as HomeView} from 'views/home';

const Home = () => {
  return (
    <div className='container'>
      <Header />
      <Main>
        <HomeView />
      </Main>
      <Footer />
    </div>
  );
};

export default Home;
