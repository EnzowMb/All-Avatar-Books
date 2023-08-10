import styled from 'styled-components'
import Pesquisa from "../componentes/Pesquisa";
import UltimosLancamentos from "../componentes/UltimosLancamentos";
import HomeContainer from '../componentes/HomeContainer';

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #7094b7 35%, #c6b3b0);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <HomeContainer />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default Home;
