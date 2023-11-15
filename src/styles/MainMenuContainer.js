import styled from 'styled-components';

export const MainMenuContainer= styled.nav`
  ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly; /* Adiciona espaço entre os elementos */
    align-items: center; /* Centraliza verticalmente */
    padding: 0;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: white;
  }
`;