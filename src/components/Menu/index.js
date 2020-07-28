import React from 'react';

import ButtonLink from './components/ButtonLink'

import {Container, Logo} from  './styles';

function Menu () {
  return (
    <Container>
      <Logo href="/">
        <img src="https://fontmeme.com/permalink/200728/abd74bb710eac04616a91fb0501d8cb7.png" alt="Meu youtube flix logo"/>
      </Logo>

      <ButtonLink>Novo vídeo</ButtonLink>
    </Container>
  )
};

export default Menu;
