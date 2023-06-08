import { css } from '@emotion/react';

export const globalStyles = css`
  html,
  body {
    font-size: 16px;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', 'Poppins', sans-serif;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body::-webkit-scrollbar {
    display: none;
  }

  #root {
    min-height: 100vh;
  }

  p,
  label {
    line-height: 1.5em;
  }

  input,
  select {
    font-family: inherit;
    font-size: inherit;
  }
`;
