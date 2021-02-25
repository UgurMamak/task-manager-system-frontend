import "../styles/styles.scss";
import Head from "next/head";

//redux connection
import {Provider} from "react-redux";
import {useStore} from "../redux/store";




//components
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import React from "react";


function App({Component, pageProps}) {
    const store = useStore(pageProps.initialReduxState);

    return (
        <Provider store={store}>
            <Head>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>
            </Head>
                <Component {...pageProps} />
        </Provider>
    )
}

export default App;