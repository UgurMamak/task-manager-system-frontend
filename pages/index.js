import React, {Component} from 'react';
import Head from "next/head";
import Layout from "../components/layout/layout"
class Index extends Component {
    render() {
        return (
            <Layout>
                <Head>
                    <title>Anasayfa</title>
                </Head>
                Index page
            </Layout>
        );
    }
}

export default Index;