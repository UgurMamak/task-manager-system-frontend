import React, {Component} from 'react';
import Link from "next/link"
import "suneditor/dist/css/suneditor.min.css";
import SunEditor, {buttonList} from "suneditor-react";
import {SRLWrapper} from "simple-react-lightbox";

import Select from "react-select";

const progressTypeData = [
    { value: '1', label: 'Görev Atandı(to do)' },
    { value: '2', label: 'Yapım Aşamasında (inProgress)' },
    { value: '3', label: 'Tamamlandı (done)' }
]

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
            console.log(e.currentTarget);
            $(e.currentTarget).text('yorumu kapat');
            window.scrollTo(0, window.scrollY + 200);
        } else {
            editor.hide();
            console.log("elsede");
            $(e.currentTarget).text('yorum ekle');
            window.scrollTo(0, window.scrollY - 200);
        }

        this.setState((prevState) => ({
            toggle: !(prevState.toggle)
        }));


    }

    save = (e) => {
        e.preventDefault();
        const editor = this.editorRef.current.editor;

        console.log(editor);
        console.log(editor.getContext().element);

        // console.log(editor.getContents()); //html data
        // console.log(editor.getImagesInfo()); //img info

        //içerideki img ve textleri parçala
        // img'lere alt bilgisini zorunlu hale getir

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
                                        <img className="img-fluid d-flex user-img"
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
                                                    <div className="attached-file col-lg-2 col-md-3 col-6">
                                                        <Link href="https://bootdey.com/img/Content/avatar/avatar1.png">
                                                            <a>
                                                                <img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                    className="img-fluid"
                                                                    alt="attached-img"/>

                                                            </a>
                                                        </Link>
                                                        <div className="attached-file-info">ek-1</div>
                                                    </div>
                                                    <div className="attached-file col-lg-2 col-md-3 col-6">
                                                        <Link href="https://bootdey.com/img/Content/avatar/avatar2.png">
                                                            <a><img
                                                                src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                className="img-fluid"
                                                                alt="attached-img"/></a>
                                                        </Link>
                                                        <div className="attached-file-info">ek-2</div>
                                                    </div>
                                                    <div className="attached-file col-lg-2 col-md-3 col-6">
                                                        <Link href="https://bootdey.com/img/Content/avatar/avatar3.png">
                                                            <a><img
                                                                src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                className="img-fluid"
                                                                alt="attached-img"/></a>
                                                        </Link>
                                                        <div className="attached-file-info">ek-2</div>
                                                    </div>
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
                                            <Select
                                                className="progress-type-select"
                                                options={progressTypeData}
                                                classNamePrefix="select"
                                                instanceId="progress-type"
                                                name="progress-type"
                                                defaultValue={progressTypeData.filter(option => option.value === '2')}
                                                /*onChange={value => props.input.onChange(value)}*/
                                            />


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
                                <div className="comment-editor-wrapper">
                                    <button className="btn" onClick={this.addComment}>Yorum Ekle</button>
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
                                        className="deneme"
                                    />
                                    <button className="btn btn-primary" onClick={this.save}>Kaydet</button>
                                </div>
                                <div className="comment-card">
                                    <div className="header">
                                        <Link href="/">
                                            <a title={"fd"} className="card-media">
                                                <img className="d-flex mr-3 "
                                                     alt="64x64"
                                                     src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                />
                                            </a>
                                        </Link>
                                        <div className="comment-info">
                                            <div className="item">
                                                <Link href="/"><a className="username">Ugur Mamak</a></Link>
                                                <span className="date">January 8, 2021, 1:49 PM</span>
                                            </div>
                                            <div className="item">
                                                <div className="dropdown comment-options">
                                                    <button className="btn" type="button" id="dropdownMenuButton"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className="icon icon-more"></i>
                                                    </button>
                                                    <div className="dropdown-menu dropdown-menu-right"
                                                         aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="/">Sil</a>
                                                        <a className="dropdown-item" href="/">Düzenle</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="body">

                                        <div className="comment-content">
                                            <div className="desc">
                                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit. Voluptates, illo, iste itaque voluptas
                                                    corrupti
                                                    ratione reprehenderit magni similique? Tempore, quos delectus
                                                    asperiores
                                                    libero voluptas quod perferendis! Voluptate, quod illo rerum?
                                                    Lorem
                                                    ipsum dolor sit amet.</p>
                                            </div>
                                            <div className="attached-files">
                                                <SRLWrapper>
                                                    <div className="row content" id="content-page-one">
                                                        <div className="attached-file col-lg-2 col-md-3 col-6">
                                                            <Link
                                                                href="https://bootdey.com/img/Content/avatar/avatar1.png">
                                                                <a>
                                                                    <img
                                                                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                        className="img-fluid"
                                                                        alt="attached-img"/>

                                                                </a>
                                                            </Link>
                                                            <div className="attached-file-info">ek-1</div>
                                                        </div>

                                                        <div className="attached-file col-lg-2 col-md-3 col-6">
                                                            <Link
                                                                href="https://bootdey.com/img/Content/avatar/avatar2.png">
                                                                <a><img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                    className="img-fluid"
                                                                    alt="attached-img"/></a>
                                                            </Link>
                                                            <div className="attached-file-info">ek-2</div>
                                                        </div>

                                                        <div className="attached-file col-lg-2 col-md-3 col-6">
                                                            <Link
                                                                href="https://bootdey.com/img/Content/avatar/avatar3.png">
                                                                <a><img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                    className="img-fluid"
                                                                    alt="attached-img"/></a>
                                                            </Link>
                                                            <div className="attached-file-info">ek-2</div>
                                                        </div>


                                                    </div>
                                                </SRLWrapper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-card">
                                    <div className="header">
                                        <Link href="/">
                                            <a title={"fd"} className="card-media">
                                                <img className="d-flex mr-3 "
                                                     alt="64x64"
                                                     src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                />
                                            </a>
                                        </Link>
                                        <div className="comment-info">
                                            <div className="item">
                                                <Link href="/"><a className="username">Ugur Mamak</a></Link>
                                                <span className="date">January 8, 2021, 1:49 PM</span>
                                            </div>
                                            <div className="item">
                                                <div className="dropdown comment-options">
                                                    <button className="btn" type="button" id="dropdownMenuButton"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className="icon icon-more"></i>
                                                    </button>
                                                    <div className="dropdown-menu"
                                                         aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="/">Sil</a>
                                                        <a className="dropdown-item" href="/">Düzenle</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="body">

                                        <div className="comment-content">
                                            <div className="desc">
                                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit. Voluptates, illo, iste itaque voluptas
                                                    corrupti
                                                    ratione reprehenderit magni similique? Tempore, quos delectus
                                                    asperiores
                                                    libero voluptas quod perferendis! Voluptate, quod illo rerum?
                                                    Lorem
                                                    ipsum dolor sit amet.</p>
                                            </div>
                                            <div className="attached-files">
                                                <SRLWrapper>
                                                    <div className="row content" id="content-page-one">
                                                        <div className="attached-file col-lg-2 col-md-3 col-6">
                                                            <Link
                                                                href="https://bootdey.com/img/Content/avatar/avatar1.png">
                                                                <a>
                                                                    <img
                                                                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                        className="img-fluid"
                                                                        alt="attached-img"/>

                                                                </a>
                                                            </Link>
                                                            <div className="attached-file-info">ek-1</div>
                                                        </div>

                                                        <div className="attached-file col-lg-2 col-md-3 col-6">
                                                            <Link
                                                                href="https://bootdey.com/img/Content/avatar/avatar2.png">
                                                                <a><img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                    className="img-fluid"
                                                                    alt="attached-img"/></a>
                                                            </Link>
                                                            <div className="attached-file-info">ek-2</div>
                                                        </div>

                                                        <div className="attached-file col-lg-2 col-md-3 col-6">
                                                            <Link
                                                                href="https://bootdey.com/img/Content/avatar/avatar3.png">
                                                                <a><img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                    className="img-fluid"
                                                                    alt="attached-img"/></a>
                                                            </Link>
                                                            <div className="attached-file-info">ek-2</div>
                                                        </div>


                                                    </div>
                                                </SRLWrapper>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="comment-card">
                                    <div className="header">
                                        <Link href="/">
                                            <a title={"fd"} className="card-media">
                                                <img className="d-flex mr-3 "
                                                     alt="64x64"
                                                     src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                />
                                            </a>
                                        </Link>
                                        <div className="comment-info">
                                            <div className="item">
                                                <Link href="/"><a className="username">Ugur Mamak</a></Link>
                                                <span className="date">January 8, 2021, 1:49 PM</span>
                                            </div>
                                            <div className="item">
                                                <div className="dropdown comment-options">
                                                    <button className="btn" type="button" id="dropdownMenuButton"
                                                            data-toggle="dropdown" aria-haspopup="true"
                                                            aria-expanded="false">
                                                        <i className="icon icon-more"></i>
                                                    </button>
                                                    <div className="dropdown-menu"
                                                         aria-labelledby="dropdownMenuButton">
                                                        <a className="dropdown-item" href="/">Sil</a>
                                                        <a className="dropdown-item" href="/">Düzenle</a>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="body">

                                        <div className="comment-content">
                                            <div className="desc">
                                                <p className="text-muted">Lorem ipsum dolor sit amet, consectetur
                                                    adipisicing elit. Voluptates, illo, iste itaque voluptas
                                                    corrupti
                                                    ratione reprehenderit magni similique? Tempore, quos delectus
                                                    asperiores
                                                    libero voluptas quod perferendis! Voluptate, quod illo rerum?
                                                    Lorem
                                                    ipsum dolor sit amet.</p>
                                            </div>
                                            <div className="attached-files">
                                                <SRLWrapper>
                                                    <div className="row content" id="content-page-one">
                                                        <div className="attached-file col-lg-2 col-md-3 col-6">
                                                            <Link
                                                                href="https://bootdey.com/img/Content/avatar/avatar1.png">
                                                                <a>
                                                                    <img
                                                                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                                        className="img-fluid"
                                                                        alt="attached-img"/>

                                                                </a>
                                                            </Link>
                                                            <div className="attached-file-info">ek-1</div>
                                                        </div>

                                                        <div className="attached-file col-lg-2 col-md-3 col-6">
                                                            <Link
                                                                href="https://bootdey.com/img/Content/avatar/avatar2.png">
                                                                <a><img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                                                    className="img-fluid"
                                                                    alt="attached-img"/></a>
                                                            </Link>
                                                            <div className="attached-file-info">ek-2</div>
                                                        </div>

                                                        <div className="attached-file col-lg-2 col-md-3 col-6">
                                                            <Link
                                                                href="https://bootdey.com/img/Content/avatar/avatar3.png">
                                                                <a><img
                                                                    src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                                                    className="img-fluid"
                                                                    alt="attached-img"/></a>
                                                            </Link>
                                                            <div className="attached-file-info">ek-2</div>
                                                        </div>


                                                    </div>
                                                </SRLWrapper>
                                            </div>
                                        </div>
                                    </div>
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