import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/styles.scss";
import Head from "next/head";

//components
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

import "../helpers/validation";

function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
                <script
                    src="https://cdn.jsdelivr.net/npm/jquery-validation@1.19.3/dist/jquery.validate.min.js"></script>

                <script src="../helpers/validation.js"></script>

            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default App;