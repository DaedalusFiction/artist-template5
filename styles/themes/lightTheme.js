import { createTheme } from "@mui/material/styles";

let lightTheme = createTheme({
    palette: {
        primary: {
            main: "#FFBA49",
            off: "#f7d195",
        },
        secondary: {
            main: "#1B998B",
        },
        mode: "light",
        background: {
            default: "#272D2D",
            accentLight: "#ffeccd",
            accentDark: "#ffeccd",
        },
        custom: {
            dark: "#272D2D",
            darkMuted: "#757575",
            light: "#F6F8FF",
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
            // fontFamily: "EB Garamond",
            fontFamily: "Raleway",
            color: lightTheme.palette.custom.light,
            // color: lightTheme.palette.primary.off,
            fontWeight: "400",
            lineHeight: ".85em",
            fontSize: "clamp(3.5rem, 5vw, 7rem)",
        },
        h2: {
            color: lightTheme.palette.custom.light,
            fontFamily: "Raleway",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
            fontSize: "clamp(3rem, 4vw, 10rem)",
        },
        h3: {
            color: lightTheme.palette.custom.light,
            fontFamily: "Raleway",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
        },
        h4: {
            color: lightTheme.palette.custom.light,
            fontFamily: "Raleway",
            fontSize: "1.75rem",
            fontWeight: "400",
            // color: darkTheme.palette.custom.dark,
        },
        h5: {
            // color: lightTheme.palette.custom.light,
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
