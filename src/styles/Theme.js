export const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#ffb3af',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#182c5b',
    },
    text: {
      secondary: '#000000',
      primary: '#000',
    },
    background: {
      default: '#ffd8d6',
      paper: '#FFB3AF',
    },
  },
  components: {
    // Name of the component
    MuiTab: {
      styleOverrides: {
        // Name of the slot
        fontSize: '1.25em',
        root:{
          "&.Mui-selected": {
            color: '#FFFFFF',
            fontSize: '2em',
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: 'white',
          color: 'white',
        },
      }
    }
  },
};

export const darkTheme = {
  palette: {
    type: 'dark',
    primary: {
      main: '#487962',
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#182c5b',
    },
    text: {
      secondary: '#000000',
      primary: '#d3ede1',
    },
    background: {
      default: '#1d2720',
      paper: '#487962',
    },
  },
  //   components: {
  //     MuiToolbar: {
  //       styleOverrides: {

  //       }
  //     },
  //   }
  // },
};