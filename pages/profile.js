import React, {Component} from 'react';
import dynamic from "next/dynamic";
import 'draft-js/dist/Draft.css';
import {EditorState, convertToRaw, ContentState, convertFromRaw} from "draft-js";

const Editor = dynamic(
    () => {
        return import("react-draft-wysiwyg").then(mod => mod.Editor);
    },
    {ssr: false}
);
import '../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import * as draftToHtml from 'draftjs-to-html';

//editorde img göstermek için
function uploadImageCallBack(file) {
    //gelen data'nın type'ının img olup olmadığını konbtrol et img değilse uyarı mesajı ver.
    return new Promise(
        (resolve, reject) => {
            const reader = new FileReader(); // eslint-disable-line no-undef
            reader.onload = e => {
                $(e.target).addClass("denmeemem");
                resolve({data: {link: e.target.result}})
            };
            reader.onerror = e => reject(e);
            reader.readAsDataURL(file);
        });
}


export default class EditorConvertToHTML extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        imgData: [],
        template: ""
    }

    onEditorStateChange = (editorState) => {

        this.setState({
            editorState,
        });


        console.log("editorState", this.state.editorState);
        console.log("getCurrentContent", this.state.editorState.getCurrentContent());
        console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
    };

    componentDidMount() {
        console.log("local", localStorage.getItem('jsonData'));
    }

    add = () => {

        localStorage.setItem('jsonData', JSON.stringify(convertToRaw(this.state.editorState.getCurrentContent())));
    }

    show = () => {
        const deneme = localStorage.getItem('jsonData');

        const contentState = convertFromRaw(JSON.parse(deneme));
        const template = EditorState.createWithContent(contentState);

        this.setState({
            editorState: template
        }, () => {
            // draftToHtml(this.state.editorState);
            console.log("value", draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
            console.log("callback",this.state.editorState);
            console.log("getImmutable",this.state.editorState.getImmutable());
        });

        ;


    }

    render() {
        const {editorState, image} = this.state;

        return (
            <div>
                <button onClick={this.add}>Ekle</button>
                <button onClick={this.show}>Göster</button>
                <div>

                </div>

                <Editor
                    readOnly
                    wrapperClassName="primary-editor-wrapper"
                    editorClassName="primary-editor"
                    toolbarClassName="home-toolbar"
                    editorState={editorState}
                    onEditorStateChange={this.onEditorStateChange}
                    toolbarHidden={true}
                    toolbar={{
                        inline: {inDropdown: true},
                        list: {inDropdown: true},
                        textAlign: {inDropdown: true},
                        link: {inDropdown: true},
                        history: {inDropdown: true},

                        image: {
                            uploadCallback: uploadImageCallBack,
                            defaultSize: {
                                height: 'auto',
                                width: '100px',
                            },

                            alt: {present: true, mandatory: true},

                        },
                    }}
                />

                <textarea
                    style={{width: '100%', height: '500px'}}
                    disabled
                    value={JSON.stringify(convertToRaw(editorState.getCurrentContent()))}

                />
            </div>
        );
    }
}

