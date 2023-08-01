import Header from "./componentes/Header";
import styled from 'styled-components'
import Pesquisa from "./componentes/Pesquisa";
import UltimosLancamentos from "./componentes/UltimosLancamentos";

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #7094b7 35%, #c6b3b0);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
    </AppContainer>
  );
}

export default App;
