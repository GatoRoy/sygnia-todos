declare module '@mui/material/styles' {
  interface Theme {
    layout: ILayoutStyles;
  }

  interface ThemeOptions {
    layout?: ILayoutStyles;
  }
}

export interface ILayoutStyles {
  // header: {
  //   height: string;
  //   background: string;
  //   contrastText?: string;
  //   borderColor?: string;
  // };
  body: {
    background: string;
  };
  // footer: {
  //   background: string;
  // };
  button: {
    color: string;
    background: string;
    disabled: string;
  };
  textbox: {
    background: string;
    borderColor: string;
    input: string;
  };
  paper: {
    background: string;
  };
  priorities: {
    [key: string]: {
      color: string;
      background: string;
    }
  };
}
