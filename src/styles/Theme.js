export const lightTheme = {
  palette: {
    type: 'light',
    primary: {
      main: '#ffb3af',
    },
    secondary: {
      main: '#A76562',
      contrastText: '#182c5b',
    },
    text: {
      secondary: '#000000',
      primary: '#000',
    },
    background: {
      default: '#ffd8d6',
      paper: '#FFF',
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
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
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontSize: 'large',
          color: '#FFF'
        },
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#000"
        }
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
      main: '#487962',
      contrastText: '#182c5b',
    },
    text: {
      secondary: '#000000',
      primary: '#d3ede1',
    },
    background: {
      default: '#1d2720',
      paper: '#1d2720',
    },
  },
  components: {
    MuiTab: {
      styleOverrides: {
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
    },
    MuiBadge: {
      styleOverrides: {
        badge: {
          fontSize: 'large',
          color: '#d3ede1'
        },
      }
    }
  },
};