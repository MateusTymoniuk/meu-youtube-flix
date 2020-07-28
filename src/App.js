import React from 'react';

import Menu from './components/Menu';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer'
import dadosIniciais from './data/dados_iniciais.json';

import GlobalStyles from './styles/global';

function App() {
  return (
    <>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"O que é front end?"}
      />

      <Carousel category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Footer />

      <GlobalStyles />
    </>
  );
}

export default App;
