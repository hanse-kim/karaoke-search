import axios from 'axios';
import Head from 'next/head';

const Home = () => {
  axios.post(
    '/api/graphql',
    {query: 'query {links {id, title}}'},
    {headers: {'Content-Type': 'application/json', Accept: 'application/json'}}
  ).then(item => {console.log(item.data);});

  return (
    <div className='container'>
      <Head>
        <title>노래찾기</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main>hello world!</main>
      <footer></footer>
    </div>
  );
};

export default Home;
