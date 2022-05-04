import client from 'graphql/client';
import { GET_PAGES } from 'graphql/queries';
import AboutTemplate from '../../templates/About';

//getStaticPaths => gerar as urls em build time /about /trip/natal
//getStaticProps => buscar dados da página (props) - build time (estático)
//getServerSideProps => buscar dados da página (props) - runtime - toda requisição (bundle fica no server)
//getInitalProps => buscar dados da página (props) - runtime - toda requisição (bundle também vai para o client) Caso queira fazer lógicas no client side - hydrate

export default function AboutPage() {
  return <AboutTemplate />;
}

export const getStaticProps = async () => {
  const { pages } = await client.request(GET_PAGES);
  console.log(pages);

  return {
    props: {},
  };
};
