<h1 align="center">
  Meu Youtube Flix
</h1>

<h3 align="center">
  Projeto da imersão React da Alura
</h3>

<p align="center">
  <a href="#-sobre">Sobre</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-autor">Autor</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-licenca">Licença</a>&nbsp;&nbsp;&nbsp;
</p>

## Sobre
Esta é uma aplicação feita em React durante a semana da imersão React da Alura.

Na aplicação construída, o usuário deve colocar o id do canal do YouTube do qual ele deseja ver as playlists, e então será buscado na própria API do Youtube. A requisição limita-se à buscar apenas 2 playlists, e 5 vídeos de cada, para manter o número de solicitações baixa. Se quiser saber sobre os limites de consulta à API, veja [aqui](https://developers.google.com/analytics/devguides/config/mgmt/v3/limits-quotas?hl=pt).

Para este projeto, foram aplicados conceitos de componentização, estilização com *styled components*, *hooks*, chamadas à uma API backend utilizando *axios*, e gerenciamento de estado com *redux*.

## Instalação
1 - Clonar o [repositório](https://github.com/MateusTymoniuk/meu-youtube-flix) em seu computador;

2 - **Instalar as dependências do projeto** digitando no terminal o comando:

    yarn

3 - Para **executar a aplicação** utilize:

    yarn start

4 - Para **utilizar a API do YouTube**, crie o arquivo *.env* (utilize o arquivo .env.example do repositório que contém o nome da variável utilizada), e insira sua chave. Caso ainda não possua uma chve do Google, é possível criar uma [aqui](https://console.developers.google.com/).

5 - Caso prefira **executar o backend do json server**, altere o arquivo src/services/api.js para utilizar:

    baseURL: 'http://localhost:3333'

E então rode o comando:

    yarn server

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [Styled components](https://styled-components.com/)
- [Axios](https://github.com/axios/axios)
- [Redux](https://redux.js.org/)
- [Json-server](https://github.com/typicode/json-server)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Autor
---

 <img style="border-radius: 50%;" src="https://avatars0.githubusercontent.com/u/21376921?s=460&u=8016bdd3caca2057cca0a5858b0fa88df0cc5879&v=4" width="100px;" alt=""/>

Feito com ❤️ por Mateus Tymoniuk 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Mateus-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/mateus-tymoniuk)](https://www.linkedin.com/in/mateus-tymoniuk)
[![Gmail Badge](https://img.shields.io/badge/-tymoniuk.m@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:tymoniuk.m@gmail.com)](mailto:tymoniuk.m@gmail.com)

## Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.
