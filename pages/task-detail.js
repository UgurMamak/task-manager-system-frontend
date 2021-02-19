import React, {Component} from 'react';
import Link from "next/link"
import "suneditor/dist/css/suneditor.min.css";
import SunEditor, {buttonList} from "suneditor-react";
import {SRLWrapper} from "simple-react-lightbox";

class TaskDetail extends Component {

    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
        this.state = {
            toggle: false
        }
    }

    componentDidMount() {
        console.log(this.editorRef.current.editor);
        // this.editorRef.current.editor.hide();
    }

    addComment = (e) => {
        const editor = this.editorRef.current.editor;
        if (!this.state.toggle) {
            editor.show();
            console.log("ifde");
            $(e.currentTarget).val('yorumu kapat');
        } else {
            editor.hide();
            console.log("elsede");
            $(e.currentTarget).val('yorum ekle');
        }

        this.setState((prevState) => ({
            toggle: !(prevState.toggle)
        }));

        // console.log(window.);
        window.scrollTo(0, window.scrollY + 200)

    }

    render() {
        return (
            <>
                <h1>Kullanıcıların task içeriğini görebileceği yorum yazabileceği ve task ilerleme durumlarını
                    belirtebileceği sayfa olacak</h1>
                <div className="container">
                    <div className="task-detail-wrapper">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="task-content">
                                    <div className="header">
                                        <img className="img-fluid d-flex rounded-circle user-img"
                                             alt="64x64"
                                             src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                        />
                                        <div className="media-body">
                                            <h5 className="media-heading">Atayan kişi</h5>
                                            <span className="badge badge-danger">Urgent</span>
                                        </div>

                                    </div>
                                    <div className="body">
                                        <h4 className="task-title">Task Title</h4>
                                        <div className="content">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit.
                                                Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit
                                                magni
                                                similique? Tempore, quos delectus asperiores libero voluptas quod
                                                perferendis!
                                                Voluptate, quod illo rerum? Lorem ipsum dolor sit amet.
                                            </p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit.
                                                Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit
                                                magni
                                                similique? Tempore, quos delectus asperiores libero voluptas quod
                                                perferendis!
                                                Voluptate, quod illo rerum? Lorem ipsum dolor sit amet.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <div className="date">
                                            <h5 className="">Assaign date</h5>
                                            <p>01 December 2017 <small className="">1:00 PM</small></p>
                                        </div>

                                        <div className="attached-files">
                                            <h5 className="">Attached Files</h5>
                                            <SRLWrapper>
                                                <div className="row content" id="content-page-one">
                                                    <Link href="https://bootdey.com/img/Content/avatar/avatar1.png">
                                                        <a className="attached-img col-2"><img
                                                            src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                            className="img-fluid"
                                                            alt="attached-img"/></a>
                                                    </Link>

                                                    <Link href="https://bootdey.com/img/Content/avatar/avatar2.png">
                                                        <a className="attached-img col-2"><img
                                                            src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                            className="img-fluid"
                                                            alt="attached-img"/></a>
                                                    </Link>
                                                    <Link href="https://bootdey.com/img/Content/avatar/avatar3.png">
                                                        <a className="attached-img col-2"><img
                                                            src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                            className="img-fluid"
                                                            alt="attached-img"/></a>
                                                    </Link>
                                                </div>
                                            </SRLWrapper>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="task-operation">
                                    <ul>
                                        <li>
                                            <h5 className="label">Atayan</h5>
                                            <Link href="/"><a>Deneme denem</a></Link>
                                        </li>
                                        <li>
                                            <h5 className="label">Progress</h5>
                                            <div className="dropdown">
                                                <button className="btn btn-secondary dropdown-toggle" type="button"
                                                        id="dropdownMenuButton" data-toggle="dropdown"
                                                        aria-haspopup="true" aria-expanded="false">
                                                    Dropdown button
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="#">Action</a>
                                                    <a className="dropdown-item" href="#">Another action</a>
                                                    <a className="dropdown-item" href="#">Something else here</a>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <h5 className="label">Priotriy</h5>
                                            <span className="badge badge-primary">Primary</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="comment-wrapper">
                        <h1>Comments</h1>
                        <div className="row">
                            <div className="col-lg-8 col-24">
                                <div className="comment-list">
                                    <div className="comment-card">
                                        <Link href="/">
                                            <a title={"fd"} className="card-media">
                                                <img className="d-flex mr-3 "
                                                     alt="64x64"
                                                     src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                />
                                            </a>
                                        </Link>
                                        <div className="body">
                                            <div className="comment-info">
                                                <Link href="/"><a className="username">Ugur Mamak</a></Link>

                                                <span className="date">January 8, 2021, 1:49 PM</span>
                                                <div className="dropdown comment-options">
                                                    <button className="btn" type="button" id="dropdownMenuButton"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className="icon icon-more"></i>
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="/">Sil</a>
                                                        <a className="dropdown-item" href="/">Düzenle</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-content">
                                                <div className="desc">
                                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur
                                                        adipisicing elit. Voluptates, illo, iste itaque voluptas corrupti
                                                        ratione reprehenderit magni similique? Tempore, quos delectus
                                                        asperiores
                                                        libero voluptas quod perferendis! Voluptate, quod illo rerum? Lorem
                                                        ipsum dolor sit amet.</p>
                                                </div>
                                                <div className="attached-files">
                                                    <SRLWrapper>
                                                        <div className="row">
                                                            <Link href="https://bootdey.com/img/Content/avatar/avatar1.png">
                                                                <a className="attached-img col-lg-2 col-5"><img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    className="img-fluid"
                                                                    alt="attached-img"/></a>
                                                            </Link>
                                                            <Link href="https://bootdey.com/img/Content/avatar/avatar2.png">
                                                                <a className="attached-img col-lg-2 col-5"><img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                    className="img-fluid"
                                                                    alt="attached-img"/></a>
                                                            </Link>
                                                            <Link href="https://bootdey.com/img/Content/avatar/avatar3.png">
                                                                <a className="attached-img col-lg-2 col-5"><img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                    className="img-fluid"
                                                                    alt="attached-img"/></a>
                                                            </Link>
                                                        </div>
                                                    </SRLWrapper>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="comment-card">
                                        <Link href="/">
                                            <a title={"fd"} className="card-media">
                                                <img className="d-flex mr-3 "
                                                     alt="64x64"
                                                     src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                />
                                            </a>
                                        </Link>
                                        <div className="body">
                                            <div className="comment-info">
                                                <Link href="/"><a className="username">Ugur Mamak</a></Link>

                                                <span className="date">January 8, 2021, 1:49 PM</span>
                                                <div className="dropdown comment-options">
                                                    <button className="btn" type="button" id="dropdownMenuButton"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className="icon icon-more"></i>
                                                    </button>
                                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="/">Sil</a>
                                                        <a className="dropdown-item" href="/">Düzenle</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-content">
                                                <div className="desc">
                                                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur
                                                        adipisicing elit. Voluptates, illo, iste itaque voluptas corrupti
                                                        ratione reprehenderit magni similique? Tempore, quos delectus
                                                        asperiores
                                                        libero voluptas quod perferendis! Voluptate, quod illo rerum? Lorem
                                                        ipsum dolor sit amet.</p>
                                                </div>
                                                <div className="attached-files">
                                                    <SRLWrapper>
                                                        <div className="row">
                                                            <Link href="https://bootdey.com/img/Content/avatar/avatar1.png">
                                                                <a className="attached-img col-lg-2 col-5"><img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    className="img-fluid"
                                                                    alt="attached-img"/></a>
                                                            </Link>
                                                            <Link href="https://bootdey.com/img/Content/avatar/avatar2.png">
                                                                <a className="attached-img col-lg-2 col-5"><img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                    className="img-fluid"
                                                                    alt="attached-img"/></a>
                                                            </Link>
                                                            <Link href="https://bootdey.com/img/Content/avatar/avatar3.png">
                                                                <a className="attached-img col-lg-2 col-5"><img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                    className="img-fluid"
                                                                    alt="attached-img"/></a>
                                                            </Link>
                                                        </div>
                                                    </SRLWrapper>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="comment-editor">
                                    <button className="btn btn-primary" onClick={this.addComment}>Yorum Ekle</button>
                                    <SunEditor
                                        ref={this.editorRef}
                                        autoFocus={true}
                                        lang="en"
                                        name="editor-deneme"
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
                                        hide={true}

                                    />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default TaskDetail;