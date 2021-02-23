import React, {Component} from 'react';
import Head from "next/head";
import Layout from "../components/layout/layout"
import Link from "next/link";
class Index extends Component {

    componentDidMount() {

        //this.setState({ loading: false });
    }

    render() {
        return (
            <Layout>
                <Head>
                    <title>Anasayfa</title>
                </Head>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <h3>Kullanıcı giriş yaptığında anasayfada kendisine atanmış işleri ve durumlarını görebilsin</h3>
                            <Link href="/">
                                <a title="" className="summary-card">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-2">
                                                <h5>Key</h5>
                                            </div>
                                            <div className="col-6">
                                                <h5>Summary</h5>
                                            </div>
                                            <div className="col-2">
                                                <h5>Progress</h5>
                                            </div>
                                            <div className="col-2">
                                                <h5>Priotry</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="content">10</div>
                                            </div>
                                            <div className="col-6">
                                                <div className="content">Header fontlarının boyutları</div>
                                            </div>
                                            <div className="col-2">
                                                <span className="badge badge-primary">Atandı</span></div>
                                            <div className="col-2">
                                                <span className="badge badge-primary">Medium</span></div>
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <div className="progress">
                                            <div className="progress-bar w-75" role="progressbar" aria-valuenow="75"
                                                 aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            <Link href="/">
                                <a title="" className="summary-card">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-2">
                                                <h5>Key</h5>
                                            </div>
                                            <div className="col-8">
                                                <h5>Summary</h5>
                                            </div>
                                            <div className="col-2">
                                                <h5>Progress</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="content">10</div>
                                            </div>
                                            <div className="col-8">
                                                <div className="content">Header fontlarının boyutları</div>
                                            </div>
                                            <div className="col-2">
                                                <span className="badge badge-primary">Atandı</span></div>
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <div className="progress">
                                            <div className="progress-bar w-75" role="progressbar" aria-valuenow="75"
                                                 aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            <Link href="/">
                                <a title="" className="summary-card">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-2">
                                                <h5>Key</h5>
                                            </div>
                                            <div className="col-8">
                                                <h5>Summary</h5>
                                            </div>
                                            <div className="col-2">
                                                <h5>Progress</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="content">10</div>
                                            </div>
                                            <div className="col-8">
                                                <div className="content">Header fontlarının boyutları</div>
                                            </div>
                                            <div className="col-2">
                                                <span className="badge badge-primary">Atandı</span></div>
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <div className="progress">
                                            <div className="progress-bar w-75" role="progressbar" aria-valuenow="75"
                                                 aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                            <Link href="/">
                                <a title="" className="summary-card">
                                    <div className="header">
                                        <div className="row">
                                            <div className="col-2">
                                                <h5>Key</h5>
                                            </div>
                                            <div className="col-8">
                                                <h5>Summary</h5>
                                            </div>
                                            <div className="col-2">
                                                <h5>Progress</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="row">
                                            <div className="col-2">
                                                <div className="content">10</div>
                                            </div>
                                            <div className="col-8">
                                                <div className="content">Header fontlarının boyutları</div>
                                            </div>
                                            <div className="col-2">
                                                <span className="badge badge-primary">Atandı</span></div>
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <div className="progress">
                                            <div className="progress-bar w-75" role="progressbar" aria-valuenow="75"
                                                 aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <h5>Carda tıkladığında task'ın detayları ve ekler gösterilecek.</h5>
                    </div>
                    <div className="task-detail-wrapper">
                        <h1 className="title">Task Title</h1>
                        <div className="body">
                            <div className="content">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi facere q   uisquam repellendus!
                            </div>
                            <div className="footer">
                                İmg ve doc burada
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Index;

