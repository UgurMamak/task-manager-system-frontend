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

/*const htmlToDraft = dynamic(
    () => {
        return import("html-to-draftjs").then(mod => mod.htmlToDraft);
    },
    {ssr: false}
);*/
/*  const draftToHtml = dynamic(
          () => {
              return import("draftjs-to-html");
          },
          {ssr: false}
      );*/

import * as draftToHtml from 'draftjs-to-html';

//editorde img göstermek için
function uploadImageCallBack(file) {
    return new Promise(
        (resolve, reject) => {
            const reader = new FileReader(); // eslint-disable-line no-undef
            reader.onload = e => resolve({data: {link: e.target.result}});
            reader.onerror = e => reject(e);
            reader.readAsDataURL(file);
        });
}

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

export default class EditorConvertToHTML extends Component {
    state = {
        editorState: EditorState.createEmpty(),
    }

    onEditorStateChange = (editorState) => {
        console.log(editorState.getCurrentContent())
        this.setState({
            editorState,
        });
        console.log(draftToHtml(convertToRaw(this.state.editorState.getCurrentContent())));
    };

    render() {
        const {editorState} = this.state;
        return (
            <div>
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
