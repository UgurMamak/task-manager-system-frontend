import React, {Component} from 'react';
import Link from "next/link"
import "suneditor/dist/css/suneditor.min.css";
import SunEditor, {buttonList} from "suneditor-react";
import { SRLWrapper } from "simple-react-lightbox";
class TaskDetail extends Component {

    constructor(props) {
        super(props);
        this.editorRef=React.createRef();
        this.state={
            toggle:false
        }
    }

    componentDidMount() {
        console.log(this.editorRef.current.editor);
        // this.editorRef.current.editor.hide();
    }

    addComment=(e)=>{
        const editor=  this.editorRef.current.editor;


        if(!this.state.toggle){
            editor.show();
            console.log("ifde");
            $(e.currentTarget).val('yorumu kapat');
        }else{
            editor.hide();
            console.log("elsede");
            $(e.currentTarget).val('yorum ekle');
        }

        this.setState((prevState)=>({
            toggle:!(prevState.toggle)
        }),console.log(this.state.toggle));


    }

    render() {
        return (
            <div>
                <h1>Kullanıcıların task içeriğini görebileceği yorum yazabileceği ve task ilerleme durumlarını belirtebileceği sayfa olacak</h1>
                <div className="container">
                    <div className="task-detail-wrapper">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="task-content">
                                    <div className="header">
                                        <img className="d-flex mr-3 rounded-circle"
                                             alt="64x64"
                                             src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                             style={{width: '48px', height: '48px'}}/>
                                        <div className="media-body">
                                            <h5 className="media-heading mb-0 mt-0">Atayan kişi</h5>
                                            <span className="badge badge-danger">Urgent</span>
                                        </div>

                                    </div>
                                    <div className="body">
                                        <h4 className="m-b-20">Task Title</h4>
                                        <div className="content">
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit.
                                                Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni
                                                similique? Tempore, quos delectus asperiores libero voluptas quod
                                                perferendis!
                                                Voluptate, quod illo rerum? Lorem ipsum dolor sit amet.
                                            </p>
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit.
                                                Voluptates, illo, iste itaque voluptas corrupti ratione reprehenderit magni
                                                similique? Tempore, quos delectus asperiores libero voluptas quod
                                                perferendis!
                                                Voluptate, quod illo rerum? Lorem ipsum dolor sit amet.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="footer">
                                        <ul className="list-inline task-dates m-b-0 mt-5">
                                            <li>
                                                <h5 className="m-b-5">Atanma Tarihi</h5>
                                                <p>01 December 2017 <small className="text-muted">1:00 PM</small></p>
                                            </li>
                                        </ul>
                                        <div className="task-tags mt-4">
                                            <h5>Tags</h5>
                                            <div className="bootstrap-tagsinput"><span className="tag label label-info">Amsterdam<span
                                                data-role="remove"/></span> <span
                                                className="tag label label-info">Washington<span
                                                data-role="remove"/></span> <span
                                                className="tag label label-info">Sydney<span data-role="remove"/></span>
                                            </div>
                                        </div>
                                        <div className="assign-team mt-4">
                                            <h5 className="m-b-5">Assign to</h5>
                                            <div>
                                                <Link href="/"><a><img className="rounded-circle thumb-sm" alt="64x64"
                                                                       src="https://bootdey.com/img/Content/avatar/avatar2.png"/>
                                                </a></Link>
                                                <Link href="/"><a><img className="rounded-circle thumb-sm" alt="64x64"
                                                                       src="https://bootdey.com/img/Content/avatar/avatar3.png"/>
                                                </a></Link>
                                                <Link href="/"><a><img className="rounded-circle thumb-sm" alt="64x64"
                                                                       src="https://bootdey.com/img/Content/avatar/avatar5.png"/>
                                                </a></Link>
                                                <Link href="/"><a><img className="rounded-circle thumb-sm" alt="64x64"
                                                                       src="https://bootdey.com/img/Content/avatar/avatar8.png"/>
                                                </a></Link><Link href="/"><a><span className="add-new-plus"><i
                                                className="fa fa-plus"/></span></a></Link></div>
                                        </div>
                                        <div className="attached-files mt-4">
                                            <h5>ek resimler ve dosyalar burada gösterilir. İmageler Lighbox olsun
                                                doc'klar download edilebilir olsun</h5>
                                            <div className="files-list">
                                                <SRLWrapper>
                                                    <Link href="https://bootdey.com/img/Content/avatar/avatar1.png">
                                                        <a><img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                className="img-responsive img-thumbnail"
                                                                alt="attached-img"/></a>
                                                    </Link>
                                                    <Link href="https://bootdey.com/img/Content/avatar/avatar2.png">
                                                        <a><img src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                className="img-responsive img-thumbnail"
                                                                alt="attached-img"/></a>
                                                    </Link>
                                                    <Link href="https://bootdey.com/img/Content/avatar/avatar3.png">
                                                        <a><img src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                className="img-responsive img-thumbnail"
                                                                alt="attached-img"/></a>
                                                    </Link>
                                                </SRLWrapper>

                                            </div>

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
                    <div className="row">
                        <div className="col-lg-10">
                            <div className="comment-list">
                                <div className="comment-card">
                                    <div className="header">
                                        <div className="item">
                                            <Link href="/">
                                                <a title={"fd"} className="user-info">
                                                    <img className="d-flex mr-3 rounded-circle img-fluid"
                                                         alt="64x64"
                                                         src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                         style={{width: '48px', height: '48px'}}/>
                                                    <h4 className="username">Ugur Mamak</h4>
                                                    <span className="date">January 8, 2021, 1:49 PM</span>
                                                </a>
                                            </Link>
                                        </div>
                                        <div className="item">
                                            <div className="dropdown">
                                                <button className="btn" type="button" id="dropdownMenuButton"
                                                        data-toggle="dropdown" aria-haspopup="true"
                                                        aria-expanded="false">
                                                    ...
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                    <a className="dropdown-item" href="/">Sil</a>
                                                    <a className="dropdown-item" href="/">Düzenle</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="body">
                                        <div className="desc">
                                            <p className="text-muted">Lorem ipsum dolor sit amet, consectetur
                                                adipisicing elit. Voluptates, illo, iste itaque voluptas corrupti
                                                ratione reprehenderit magni similique? Tempore, quos delectus asperiores
                                                libero voluptas quod perferendis! Voluptate, quod illo rerum? Lorem
                                                ipsum dolor sit amet.</p>
                                        </div>
                                        <div className="attachments">
                                            <div className="file-box">
                                                <Link href="/">
                                                    <a><img src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                            className="img-responsive img-thumbnail"
                                                            style={{width: '100px', height: '100px'}}
                                                            alt="attached-img"/></a>
                                                </Link>
                                                <p className="font-13 mb-1 text-muted"><small>File one</small></p>
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
        );
    }
}

export default TaskDetail;