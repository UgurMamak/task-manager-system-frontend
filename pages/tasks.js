import React, {Component} from 'react';
import Head from "next/head";
import Layout from "../components/layout/layout"
import "suneditor/dist/css/suneditor.min.css";
import SunEditor, {buttonList} from "suneditor-react";

const editorSetOptions = {
    showPathLabel: false,
    height: "auto",
    placeholder: "Enter your text here!!!",
    buttonList: [
        ["undo", "redo"],
        ["font", "fontSize", "formatBlock"],
        ["paragraphStyle"],
        [
            "bold",
            "underline",
            "italic",
            "strike",
            "subscript",
            "superscript"
        ],
        ["fontColor", "hiliteColor"],
        ["removeFormat"],
        "/", // Line break
        ["outdent", "indent"],
        ["align", "horizontalRule", "list", "lineHeight"],
        ["table", "link", "image"]
    ],
    formats: ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
    font: [
        "Arial",
        "Calibri",
        "Comic Sans",
        "Courier",
        "Garamond",
        "Georgia",
        "Impact",
        "Lucida Console",
        "Palatino Linotype",
        "Segoe UI",
        "Tahoma",
        "Times New Roman",
        "Trebuchet MS"
    ]
}

class Tasks extends Component {


    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
    }

    componentDidMount() {
        console.log(this.editorRef.current);
    }

    handleChange = (content) => {
        console.log(content);
    }

    handleImageUpload = (targetImgElement, index, state, imageInfo, remainingFilesCount) => {
        //console.log(targetImgElement, index, state, imageInfo, remainingFilesCount)
        console.log("index", index);
        console.log("state", state);
        console.log("imageInfo", imageInfo);
        console.log(index.src);


        const att = document.createElement('img');
        att.src = imageInfo.src;

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
                            <h4>Yorum ekleme ve görev atamada kullanılacak editor</h4>
                            <SunEditor
                                autoFocus={true}
                                lang="en"
                                setOptions={{
                                    showPathLabel: false,
                                    height: "auto",
                                    placeholder: "Enter your text here!!!",
                                    buttonList: [
                                        ["undo", "redo"],
                                        ["font", "fontSize", "formatBlock"],
                                        ["paragraphStyle"],
                                        [
                                            "bold",
                                            "underline",
                                            "italic",
                                            "strike",
                                            "subscript",
                                            "superscript"
                                        ],
                                        ["fontColor", "hiliteColor"],
                                        ["removeFormat"],
                                        "/", // Line break
                                        ["outdent", "indent"],
                                        ["align", "horizontalRule", "list", "lineHeight"],
                                        ["table", "link", "image"]
                                    ],
                                    formats: ["p", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
                                    font: [
                                        "Arial",
                                        "Calibri",
                                        "Comic Sans",
                                        "Courier",
                                        "Garamond",
                                        "Georgia",
                                        "Impact",
                                        "Lucida Console",
                                        "Palatino Linotype",
                                        "Segoe UI",
                                        "Tahoma",
                                        "Times New Roman",
                                        "Trebuchet MS"
                                    ]
                                }}
                                onChange={this.handleChange}
                                onImageUpload={this.handleImageUpload}
                            />

                        </div>
                    </div>
                </div>

            </Layout>
        );
    }
}

export default Tasks;