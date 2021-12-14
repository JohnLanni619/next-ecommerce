import Page from "../components/Page";
import Router from "next/router";
import NProgress from "nprogress";
import Head from 'next/head';

// TODO: swap with our own
import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
    return(
        <div>
            <Head>
                <title>Demo Time</title>
            </Head>
            <Page>
                <Component {...pageProps}/>
            </Page>
        </div>
    )
}