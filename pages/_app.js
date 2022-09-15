import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

import createEmotionCache from "../utility/createEmotionCache";
import "../styles/globals.css";
import "../styles/fonts.css";
import Layout from "../components/layout/Layout";
import lightTheme from "../styles/themes/lightTheme";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
    const {
        Component,
        emotionCache = clientSideEmotionCache,
        pageProps,
    } = props;

    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MyApp;
