import { createTheme } from "@mui/material/styles";

let lightTheme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#000000",
        },
        mode: "light",
        background: {
            default: "#ffffff",
            accentLight: "#ffeccd",
            accentDark: "#ffeccd",
        },
        custom: {
            dark: "#000000",
            darkMuted: "#757575",
            light: "#ffffff",
            lightMuted: "#cacaca",
        },
    },
});

lightTheme = createTheme(lightTheme, {
    border: `1px solid ${lightTheme.palette.custom.dark}`,
    custom: {
        spacing: {
            paragraph: "2rem",
            quote: "3rem",
        },
    },
    typography: {
        h1: {
            fontFamily: "Raleway",
            // color: darkTheme.palette.custom.dark,
            fontWeight: "400",
            lineHeight: ".85em",
            fontSize: "clamp(3.5rem, 5vw, 7rem)",
        },
        h2: {
            fontFamily: "Raleway",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
            fontSize: "clamp(3rem, 4vw, 10rem)",
        },
        h3: {
            fontFamily: "Raleway",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
        },
        h4: {
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
        },
        h5: {
            fontFamily: "EB Garamond",
            fontSize: "1.25rem",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
        },

        subtitle1: {
            fontFamily: "EB Garamond",
            fontWeight: "400",
            color: lightTheme.palette.custom.darkMuted,
            fontSize: "1.25rem",
        },
        subtitle2: {
            fontFamily: "EB Garamond",
            fontWeight: "400",
            fontSize: "1.25rem",
            color: lightTheme.palette.custom.darkMuted,
        },
        body1: {
            fontFamily: "EB Garamond",
            fontWeight: "400",
            fontSize: "1.25rem",
            lineHeight: "1.25rem",
            color: lightTheme.palette.custom.darkMuted,
            // fontFamily: darkTheme.typography.darkTheme.main,
        },
        body2: {
            fontFamily: "EB Garamond",
            fontWeight: "400",
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
                    backgroundColor: lightTheme.palette.custom.dark,
                },
            },
        },
        MuiTab: {
            styleOverrides: {
                root: {
                    // fontFamily: lightTheme.typography.lightTheme.accent,
                    fontSize: "1rem",
                },
            },
        },
    },
});

export default lightTheme;
