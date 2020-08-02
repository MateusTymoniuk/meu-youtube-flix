import React from 'react';
import { useSelector } from 'react-redux';

import Menu from '../../components/Menu';
import BannerForm from '../../components/BannerForm';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

import GlobalStyles from '../../styles/global';

export default function Home() {
  const playlists = useSelector((state) => state.playlists);

  return (
    <>
      <Menu />

      <BannerForm />

      {playlists &&
        playlists.map((playlist) => (
          <Carousel key={playlist.id} category={playlist} />
        ))}

      <Footer />

      <GlobalStyles />
    </>
  );
}
