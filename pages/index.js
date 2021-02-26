import React, {Component} from 'react';
import dynamic from "next/dynamic";
import 'draft-js/dist/Draft.css';
import {EditorState, convertToRaw, ContentState} from "draft-js";

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
                resolve({data: {link: e.target.result}})
            };
            reader.onerror = e => reject(e);
            reader.readAsDataURL(file);
        });
}


export default class EditorConvertToHTML extends Component {
    state = {
        editorState: EditorState.createEmpty(),
        imgData:[]
    }

    onEditorStateChange = (editorState) => {

        this.setState({
            editorState,
        });


        console.log("editorState",this.state.editorState);
        console.log("getCurrentContent",this.state.editorState.getCurrentContent());
        console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
    };

    componentDidMount() {

    }

    render() {
        const {editorState,image} = this.state;
        console.log("renderImg",image);
        return (
            <div>
                <Editor
                    wrapperClassName="primary-editor-wrapper"
                    editorClassName="primary-editor"
                    toolbarClassName="home-toolbar"
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
                            defaultSize: {
                                height: 'auto',
                                width: '100px',
                            },  alignmentEnabled:true,
                            urlEnabled: false,
                            uploadEnabled:true,
                            previewImage: true,
                            alt: {present: true, mandatory: true},

                        },
                    }}
                />

                <textarea
                    style={{width: '100%'}}
                    disabled
                    value={draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}
                />
            </div>
        );
    }
}
