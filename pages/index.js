/*
import React, {Component} from 'react';
import Head from "next/head";
import Layout from "../components/layout/layout"
import Link from "next/link";
import {Editor, EditorState} from 'draft-js';
import 'draft-js/dist/Draft.css';


class Index extends Component {

    constructor(props) {
        super(props);
        this.state = {editorState: EditorState.createEmpty()};
        this.onChange = editorState => this.setState({editorState});
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
                            <h3>Kullanıcı giriş yaptığında anasayfada kendisine atanmış işleri ve durumlarını
                                görebilsin</h3>
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
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi facere q uisquam
                                repellendus!
                            </div>
                            <div className="footer">
                                İmg ve doc burada
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Editor editorState={this.state.editorState} onChange={this.onChange} />
                </div>
            </Layout>
        );
    }
}

export default Index;


*/

import React, {Component} from 'react';
import {render} from 'react-dom';
import dynamic from "next/dynamic";
import 'draft-js/dist/Draft.css';
import {EditorState, convertToRaw,ContentState} from "draft-js";

const Editor = dynamic(
    () => {
        return import("react-draft-wysiwyg").then(mod => mod.Editor);
    },
    {ssr: false}
);
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


const htmlToDraft = dynamic(
    () => {
        return import("html-to-draftjs").then(mod => mod.htmlToDraft);
    },
    {ssr: false}
);

const draftToHtml = () => dynamic(
    () => {
        return import("draftjs-to-html");
    },
    {ssr: false}
);

//form işlemi yapar (request)
/*function uploadImageCallBack(file) {
    return new Promise(
        (resolve, reject) => {
            console.log("fileData",file);
        /!*    const xhr = new XMLHttpRequest();
            xhr.open('POST', 'https://api.imgur.com/3/image');
            xhr.setRequestHeader('Authorization', 'Client-ID XXXXX');
            const data = new FormData();
            data.append('image', file);
            xhr.send(data);
            xhr.addEventListener('load', () => {
                const response = JSON.parse(xhr.responseText);
                resolve(response);
            });
            xhr.addEventListener('error', () => {
                const error = JSON.parse(xhr.responseText);
                reject(error);
            });*!/
        }
    );
}*/

//editorde göstermek için
function uploadImageCallBack(file) {
    return new Promise(
        (resolve, reject) => {
            const reader = new FileReader(); // eslint-disable-line no-undef
            reader.onload = e => resolve({data: {link: e.target.result}});
            reader.onerror = e => reject(e);
            reader.readAsDataURL(file);
        });
}

/*export default class EditorContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
        };
    }

    onEditorStateChange = (editorState) => {
        console.log(editorState.getCurrentContent())
        this.setState({
            editorState,
        });

        console.log(draftToHtml(editorState.getCurrentContent()));
    };

    render() {
        const {editorState} = this.state;
        return (<>
            <div className='editor'>
                <Editor
                    editorState={editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbar={{
                        inline: {inDropdown: true},
                        list: {inDropdown: true},
                        textAlign: {inDropdown: true},
                        link: {inDropdown: true},
                        history: {inDropdown: true},
                        /!*  image: {uploadCallback: uploadImageCallBack, alt: {present: true, mandatory: true}},*!/
                        image: {
                            uploadCallback: uploadImageCallBack,
                            previewImage: true,
                            alt: {present: true, mandatory: true}
                        },
                    }}
                />
            </div>

            <textarea
                disabled
                value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
            />

        </>);
    }
}*/

export default class EditorConvertToHTML extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Editor
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}
                />
                <textarea
                    style={{width:'100%'}}
                    disabled
                    value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                />
            </div>
        );
    }
}