import React, {Component} from 'react';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

class PhotoModal extends Component {

    state = {
        crop: {
            unit: 'px',
            width: 300,
            aspect: 16 / 9,
            minWidth: 300,
            minHeight: 300,
            locked: true,
            disabled: true
        }
    }

    render() {
        return (
            <Modal className="photo-modal" data-toggle="photo-modal" show={this.state.photoModalStatus} onHide={this.handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {src && (
                        <ReactCrop
                            src={src}
                            crop={crop}
                            ruleOfThirds
                            onImageLoaded={this.onImageLoaded}
                            onChange={this.onCropChange}
                        />
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        İptal
                    </Button>
                    <Button variant="primary" onClick={this.saveCrop}>
                        Kaydet
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default PhotoModal;