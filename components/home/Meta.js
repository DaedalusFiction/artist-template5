import Head from "next/head";
import { useRouter } from "next/router";

const Meta = ({ siteName }) => {
    const router = useRouter();
    return (
        <div>
            <Head>
                {router.pathname === "/" ? (
                    <title>{siteName}</title>
                ) : (
                    <title>{`${siteName} - ${router.pathname
                        .replace("/", "")
                        .toUpperCase()}`}</title>
                )}
                <meta
                    name="keywords"
                    content="art, design, photography, living space, interior decorating"
                />
                <link
                    rel="preload"
                    href="/fonts/EBGaramond-VariableFont_wght.ttf"
                    as="font"
                    crossOrigin=""
                    type="font/truetype"
                />
                <link
                    rel="preload"
                    href="/fonts/Raleway-VariableFont_wght.ttf"
                    as="font"
                    crossOrigin=""
                    type="font/truetype"
                />
            </Head>
        </div>
    );
};

export default Meta;
