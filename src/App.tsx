import React from 'react';
import {
  Box,
  CssBaseline,
  PaletteMode,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Global } from '@emotion/react';
import { getAppTheme } from './styles/theme';
import { globalStyles } from './styles/globalStyles';
import { RootPage } from './containers/RootPage';
import './App.css';

interface AppProps {
  mode?: PaletteMode;
}

const App = ({ mode = 'light' }: AppProps) => {
  const theme = createTheme(getAppTheme(mode));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box height="100vh" display="flex" flexDirection="column">
        <RootPage />
      </Box>
      <Global styles={globalStyles} />
    </ThemeProvider>
  );
}

export default App;
