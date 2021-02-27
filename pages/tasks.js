import React, {Component} from 'react';
import Head from "next/head";
import Layout from "../components/layout/layout"


class Tasks extends Component {


    constructor(props) {
        super(props);

    }


    render() {
        return (
            <Layout>
                <Head>
                    <title>Anasayfa</title>
                </Head>
                Görevler Listelenecek
            </Layout>
        );
    }
}

export default Tasks;