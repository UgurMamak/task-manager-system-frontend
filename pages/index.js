import React, {Component} from 'react';
import Head from "next/head";
import Layout from "../components/layout/layout"
import "suneditor/dist/css/suneditor.min.css";
import SunEditor,{buttonList} from "suneditor-react";

/*
import katex from "katex";
import CodeMirror from "codemirror/src/edit/CodeMirror";*/


const sunEditorOptions = {
    display: 'block',
    width: '100%',
    height: 'auto',
    buttonList: [
        // default
        ['undo', 'redo'],
        ['image']
    ],
    placeholder: 'Start typing something...',
   /* templates: [
        {
            name: 'Template-1',
            html: '<p>HTML source1</p>'
        },
        {
            name: 'Template-2',
            html: '<p>HTML source2</p>'
        }
    ],*/
   // codeMirror: CodeMirror,
    //katex: katex
};

class Index extends Component {


    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.editorRef.current);
    }

    editorHandleChange = (content) => {
        console.log(content);
    }

    handleImageUploadBefore=(files, info, core, uploadHandler)=>{
        console.log("ff");
        try {
            this.resizeImage(files, uploadHandler)
        } catch (err) {
            uploadHandler(err.toString())
        }

    }

    // image resize
    resizeImage (files, uploadHandler) {
        console.log("resizeImg içinde");
        const uploadFile = files[0];
        const img = document.createElement('img');
        const canvas = document.createElement('canvas');
        const reader = new FileReader();

        reader.onload = function (e) {
            img.src = e.target.result
            img.onload = function () {
                let ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0);

                const MAX_WIDTH = 200;
                const MAX_HEIGHT = 100;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }

                canvas.width = width;
                canvas.height = height;

                ctx = canvas.getContext("2d");
                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob(function (blob) {
                    this.uploadHandler([new File([blob], uploadFile.name)])
                }, uploadFile.type, 1);
            }
        }

        reader.readAsDataURL(uploadFile);
    }

    uploadHandler=()=>{
        console.log("geldi");
        const file = {name: "name", size:0};
        const imageUrl = "imageUrl";

        if (info.isUpdate) {
            core.plugins.image.update_src.call(core, imageUrl, info.element, file);

        } else {
            core.plugins.image.create_image.call(core, imageUrl, info.linkValue, info.linkNewWindow, info.inputWidth, info.inputHeight, info.align, file);
        }

        core.closeLoading();
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
                            <div className="comment-card-list">
                                <h1> Tasklara yazılacak Yorumlar</h1>
                                <div className="comment-card">
                                    <div className="header">
                                        <div className="item">
                                            <div className="user-image">
                                                <img src="http://via.placeholder.com/50x50"
                                                     className="img-fluid rounded-circle" alt=""/>
                                            </div>
                                            <h4 className="title">Ugur Mamak</h4>
                                            <span className="date">1 Nov , 2018</span>
                                        </div>
                                        <div className="item">
                                            <div className="dropdown">
                                                <button className="btn btn-option" type="button"
                                                        id="dropdownMenuButton" data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"><i className="icon icon-option"></i>
                                                </button>
                                                <div className="dropdown-menu dropdown-menu-left"
                                                     aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Sil</a>
                                                    <a className="dropdown-item" href="#">Düzenle</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comment-body">
                                        <div className="content">
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc faucibus
                                                turpis quis tincidunt luctus. Nam sagittis dui in nunc consequat, in
                                                imperdiet nunc sagittis.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="comment-footer attachments">
                                        ekler burada gösterilecek (dosya ve img)

                                    </div>
                                </div>

                            </div>


                            <SunEditor name="comment-editor"
                                       setOptions={sunEditorOptions} ref={this.editorRef}
                                       enableToolbar={true}
                                       onChange={this.editorHandleChange}
                                       onImageUploadBefore={this.handleImageUploadBefore}
                            />

                        </div>
                    </div>
                </div>

            </Layout>
        );
    }
}

export default Index;