import Head from "next/head";
import { useRouter } from "next/router";
import { siteName } from "../../siteInfo";

const Meta = () => {
    const router = useRouter();
    const basePath = router.pathname.split("/")[1];
    return (
        <div>
            <Head>
                {router.pathname === "/" ? (
                    <title>{siteName}</title>
                ) : (
                    <title>{`${siteName} - ${basePath.toUpperCase()}`}</title>
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
