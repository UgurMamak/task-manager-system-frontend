import React, {Component} from 'react';
import Link from "next/link"
import dynamic from "next/dynamic";
import Select from "react-select";
import 'draft-js/dist/Draft.css';
import {EditorState, convertToRaw, convertFromRaw, ContentState} from "draft-js";
import * as draftToHtml from 'draftjs-to-html';
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import SimpleReactLightbox, {SRLWrapper} from "simple-react-lightbox";

const Editor = dynamic(
    () => {
        return import("react-draft-wysiwyg").then(mod => mod.Editor);
    },
    {ssr: false}
);


const progressTypeData = [
    {value: '1', label: 'Görev Atandı(to do)'},
    {value: '2', label: 'Yapım Aşamasında (inProgress)'},
    {value: '3', label: 'Tamamlandı (done)'}
]

//editorde img göstermek için
function uploadImageCallBack(file) {
    return new Promise(
        (resolve, reject) => {
            const reader = new FileReader(); // eslint-disable-line no-undef
            reader.onload = e => resolve({data: {link: e.target.result}});
            reader.onerror = e => reject(e);
            console.log(reader.readAsDataURL(file));
            console.log("file",file);
          /*console.log( reader.readAsDataURL(file));*/
        });
}

class TaskDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            editorState2: "",
            editorState: EditorState.createEmpty(),
        }
    }

    componentDidMount() {
        //dropdown açılınca menu'nün ekran dışına taşmasını önlemek için ekledim.
        $('.comment-options').on('show.bs.dropdown', function () {
            const $that = $(this);
            if ($(window).width() <= 320) {
                $that.find('.dropdown-menu').addClass('dropdown-menu-right');
            }
        });

        const contentState = convertFromRaw(JSON.parse(localStorage.getItem('editorData')));
        const editorState2 = EditorState.createWithContent(contentState);

        this.setState({
            editorState2: editorState2
        });
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    editorTextFocus = (e) => {
        if ($('.editor-root-wrapper').hasClass('d-none')) {
            $('.editor-root-input').addClass('d-none');
            $('.editor-root-wrapper').removeClass('d-none');

        }
    }

    //sumbitHandler olarak güncelle*** (form ekle required olaylarını ekle)
    save = (e) => {
        e.preventDefault();
        localStorage.setItem('editorData', JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())));
    }

    cancel = () => {
        $('.editor-root-wrapper').addClass('d-none');
        $('.editor-root-input').removeClass('d-none');
    }

    render() {
        const {editorState} = this.state;
        return (
            <>
                <div className="container">
                    <div className="task-detail-wrapper">
                        <div className="row">
                            <div className="col-lg-8 col-24">
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
                                            <SimpleReactLightbox>
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
                                            </SimpleReactLightbox>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-24">
                                <div className="task-operation">
                                    <ul>
                                        <li>
                                            <h5 className="label">Atayan</h5>
                                            <Link href="/"><a>Uğur Mamak</a></Link>
                                        </li>
                                        <li>
                                            <h5 className="label">Progress</h5>
                                            <Select
                                                className="primary-select-container"
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

                    <section className="comment-section">
                        <h1 className="section-title">Comments</h1>
                        <div className="row">
                            <div className="col-lg-8 col-24">
                                <div className="editor-root-area">
                                    <input type="text" className="editor-root-input" onFocus={this.editorTextFocus}
                                           placeholder="Yorum eklemek için tıklayınız..."/>
                                    <div className="editor-root-wrapper d-none">
                                        <Editor
                                            editorState={editorState}
                                            onEditorStateChange={this.onEditorStateChange}
                                            toolbar={{
                                                inline: {inDropdown: true},
                                                list: {inDropdown: true},
                                                textAlign: {inDropdown: true},
                                                link: {inDropdown: true},
                                                history: {inDropdown: true},
                                                image: {
                                                    uploadCallback: uploadImageCallBack,
                                                    previewImage: true,
                                                    alt: {present: true, mandatory: true}
                                                },
                                            }}
                                            wrapperClassName="primary-editor-wrapper"
                                            editorClassName="primary-editor"
                                            toolbarClassName="primary-toolbar"
                                        />
                                        <button className="btn btn-primary" onClick={this.save}>Kaydet</button>
                                        <button className="btn btn-primary" onClick={this.cancel}>Cancel</button>
                                    </div>
                                </div>
                                <div className="comment-list">
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
                                                    <SimpleReactLightbox>
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
                                                    </SimpleReactLightbox>
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
                                                    <SimpleReactLightbox>
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
                                                    </SimpleReactLightbox>
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
                                                    <SimpleReactLightbox>
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
                                                            </div>
                                                        </SRLWrapper>
                                                    </SimpleReactLightbox>
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
                                            <Editor
                                                toolbarHidden={true}
                                                readOnly={false}
                                                editorState={this.state.editorState2}
                                                onEditorStateChange={this.onEditorStateChange}
                                                toolbar={{
                                                    inline: {inDropdown: true},
                                                    list: {inDropdown: true},
                                                    textAlign: {inDropdown: true},
                                                    link: {inDropdown: true},
                                                    history: {inDropdown: true},
                                                    image: {
                                                        uploadCallback: uploadImageCallBack,
                                                        previewImage: true,
                                                        alt: {present: true, mandatory: true}
                                                    },
                                                }}
                                                wrapperClassName="primary-editor-wrapper"
                                                editorClassName="primary-editor"
                                                toolbarClassName="primary-toolbar"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                </div>
            </>
        );
    }
}

export default TaskDetail;