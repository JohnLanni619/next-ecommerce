import Page from "../components/Page";
import Router from "next/router";
import NProgress from "nprogress";
import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';

// TODO: swap with our own
import 'nprogress/nprogress.css';
import '../components/styles/nprogress.css'

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps, apollo }) {
    console.log(apollo)
    return(
        <div>
            <Head>
                <title>Demo Time</title>
            </Head>
            <ApolloProvider client={apollo}>
                <Page>
                    <Component {...pageProps}/>
                </Page>
            </ApolloProvider>
        </div>
    )
}

MyApp.getInitialProps = async function({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    pageProps.query = ctx.query;
    return { pageProps };
}

export default withData(MyApp);
