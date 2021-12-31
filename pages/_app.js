import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../layouts/theme";
import Layout from "../layouts/default";

function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
            <Head>
                <title>Prisma Test</title>
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="theme-color" content="#ffffff" />
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    );
}
export default App;
