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

                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <div className="comment-card-list">
                                <h1> Tasklara yazılacak  Yorumlar</h1>
                                <div className="comment-card">
                                    <div className="header">
                                        <div className="item">
                                            <div className="user-image">
                                                <img src="http://via.placeholder.com/50x50" className="img-fluid rounded-circle" alt=""/>
                                            </div>
                                            <h4 className="title">Ugur Mamak</h4>
                                            <span className="date">1 Nov , 2018</span>
                                        </div>
                                        <div className="item">
                                            <div className="dropdown">
                                                <button className="btn btn-option" type="button"
                                                        id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false"><i className="icon icon-option"></i>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-left" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Sil</a>
                                                    <a className="dropdown-item" href="#">Düzenle</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-body">
                                        <div className="content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus turpis quis tincidunt luctus. Nam sagittis dui in nunc consequat, in imperdiet nunc sagittis.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="comment-footer attachments">
                                        ekler burada gösterilecek (dosya ve img)

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        );
    }
}

export default Index;