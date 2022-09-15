import { createTheme } from "@mui/material/styles";

let darkTheme = createTheme({
    palette: {
        primary: {
            main: "#000000",
        },
        secondary: {
            main: "#ffffff",
        },
        mode: "dark",
        background: {
            default: "#000000",
        },
        custom: {
            light: "#000000",
            lightMuted: "#000000",
            dark: "#ffffff",
            darkMuted: "#ffffff",
        },
    },
});

darkTheme = createTheme(darkTheme, {
    border: `1px solid ${darkTheme.palette.custom.light}`,
    custom: {
        spacing: {
            paragraph: "2rem",
            quote: "3rem",
        },
    },
    typography: {
        h1: {
            fontFamily: "TitilliumWeb",
            color: darkTheme.palette.custom.dark,
            fontWeight: "bold",
            lineHeight: ".85em",
            margin: ".25em 0",
            fontSize: "clamp(3.5rem, 9vw, 7rem)",
        },
        h2: {
            fontFamily: "TitilliumWeb",
            color: darkTheme.palette.custom.dark,
            fontWeight: "bold",
            fontSize: "clamp(3rem, 4vw, 10rem)",
        },
        h3: {
            fontFamily: "TitilliumWeb",
            color: darkTheme.palette.custom.dark,
        },

        subtitle1: {
            fontFamily: "CormorantGaramond",
            color: darkTheme.palette.custom.darkMuted,
            fontSize: "1.25rem",
        },
        subtitle2: {
            fontFamily: "CormorantGaramond",
            fontSize: "1.25rem",
            color: darkTheme.palette.custom.darkMuted,
        },
        body1: {
            fontFamily: "CormorantGaramond",
            fontSize: "1.25rem",
            lineHeight: "1.25rem",
            color: darkTheme.palette.custom.darkMuted,
            // fontFamily: darkTheme.typography.darkTheme.main,
        },
        body2: {
            fontFamily: "CormorantGaramond",
            fontSize: "1.25rem",
            lineHeight: "1.25rem",
            // color: darkTheme.palette.custom.decorative,
            // fontFamily: darkTheme.typography.darkTheme.decorative,
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: "0",
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    backgroundColor: darkTheme.palette.custom.dark,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    // fontFamily: darkTheme.typography.darkTheme.accent,
                    fontSize: "1rem",
                },
            },
        },
    },
});

export default darkTheme;
