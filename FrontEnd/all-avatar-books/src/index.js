import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './rotas/Home';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './componentes/Header';
import Aang from './rotas/PersonagensLendaAang/Aang';
import Toph from './rotas/PersonagensLendaAang/Toph';
import Katara from './rotas/PersonagensLendaAang/Katara'
import Sokka from './rotas/PersonagensLendaAang/Sokka'
import Favoritos from './rotas/Favoritos';
import HqKorra from './rotas/HqKorra';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/aang" element={<Aang />} />
        <Route path='/toph' element={<Toph />} />
        <Route path='/katara' element={<Katara />} />
        <Route path='/sokka' element={<Sokka />}/>
        <Route path='/favoritos' element={<Favoritos />} />
        <Route path='/hqskorra' element={<HqKorra />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
