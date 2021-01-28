import { createMuiTheme } from '@material-ui/core/styles';

/* 
    @objects
    > overrides: Changes default style injected by Material-UI into the DOM

    > ascents: Specially for dynamic input , buttons for optimization.

    > palette: Color scheme in whole app. Reference from EO2V2_Specifications

    > typography: Styles for all texts in h1,button etc.
*/

const theme = createMuiTheme({

    overrides: {
        MuiInputLabel: {
            root: {
                fontSize: 12
            }
        },
        MuiInput: {
            root: {
                fontSize: 14
            }
        },
        MuiFormControl: {
            root: {
                marginTop: 14
            }
        }
    },

    palette: {

        primary: {
            light: "#BBDEFB",
            main: "#2196F3",
            dark: "#1976D2",
            wash: "#EBECFF",
            contrastText: "#fff",
        },
        secondary: {
            light: "#62d3ff",
            main: "#03A9F4",
            dark: "#0074ae",
            contrastText: "#FFFFFF",
        },
        success: {
            light: "#9df971",
            main: "#69C540",
            dark: "#329402",
        },
        text: {
            primary: "#212121",
            secondary: "#757575",
            disabled: "#BDBDBD",
            icon: "#FFFFFF",
            hint: "rgba(0, 0, 0, 0.38)",
        },
        background: {
            default: "#ECECEC"
        },

        ascents: {
            primary:"#03A9F4",
            systemWash:"#EBECFF"
        },
        contrast:{
            primary:"#03A9F4",
        }

    },
    typography: {
        fontFamily: '"Roboto", sans-serif',

        h1: {
            fontFamily: '"Roboto", sans-serif',
            fontSize: 40
        },
        h2: {
            fontFamily: '"Roboto", sans-serif',
            fontSize: 25,
        },
        h3: {
            fontFamily: '"Roboto", sans-serif',
            fontSize: 20,
        },
        h4: {

            fontFamily: '"Roboto", sans-serif',
            fontSize: 18,
        },
        h5: {
            fontFamily: '"Roboto", sans-serif',
            fontSize: 18,
        },
        h6: {
            fontFamily: '"Roboto", sans-serif',
            fontSize: 18,
        },
        body1: {
            fontFamily: '"Roboto", sans-serif',
            fontSize: 14,
        },
        body2: {
            fontFamily: '"Roboto", sans-serif',
            fontSize: 12,
        },
        button: {
            fontFamily: '"Roboto", sans-serif',
            textTransform: "capitalize",
            fontSize: 14,
        },
    },

});

export default theme;