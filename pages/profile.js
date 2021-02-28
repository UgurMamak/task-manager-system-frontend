import React, {Component} from 'react';
import Layout from "../components/layout/layout";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

class Profile extends Component {
    state = {
        user: {
            email: "ugurmamak98@gmail.com",
            firstName: "uğur",
            lastName: "mamak",
            img: "https://bootdey.com/img/Content/avatar/avatar7.png"
        },
        photoModalStatus: false,
        src: null,
        crop: {
            unit: '%',
            width: 30,
            aspect: 16 / 9,
        },
    }

    handleImgSubmit = () => {
    }

    handleImgChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            var reader = new FileReader();
            var url = reader.readAsDataURL(file);
            reader.onloadend = function (e) {
                /*  this.setState({
                      user: {img: reader.result}
                  })*/
                this.setState({src: reader.result})
            }.bind(this);

            /*    this.setState({
                    photoModalStatus:true
                });*/
        } else {
            console.log("boş var");
        }


    }

    onImageLoaded = image => {
        this.imageRef = image;
    };

    onCropComplete = crop => {
        this.makeClientCrop(crop);
    };

    onCropChange = (crop, percentCrop) => {
        // You could also use percentCrop:
        // this.setState({ crop: percentCrop });
        this.setState({crop});
    };

    async makeClientCrop(crop) {
        if (this.imageRef && crop.width && crop.height) {
            const croppedImageUrl = await this.getCroppedImg(
                this.imageRef,
                crop,
                'newFile.jpeg'
            );
            this.setState({croppedImageUrl});
        }
    }

    getCroppedImg(image, crop, fileName) {
        const canvas = document.createElement('canvas');
        const scaleX = image.naturalWidth / image.width;
        const scaleY = image.naturalHeight / image.height;
        canvas.width = crop.width;
        canvas.height = crop.height;
        const ctx = canvas.getContext('2d');

        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height
        );

        return new Promise((resolve, reject) => {
            canvas.toBlob(blob => {
                if (!blob) {
                    //reject(new Error('Canvas is empty'));
                    console.error('Canvas is empty');
                    return;
                }
                blob.name = fileName;
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);
                resolve(this.fileUrl);
            }, 'image/jpeg');
        });
    }

    handleClose = () => {
        this.setState({photoModalStatus: false})
    };

    handleShow = () => {
        this.setState({photoModalStatus: true})
    };

    render() {
        const {crop, croppedImageUrl, src} = this.state;
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-24">
                            <form action="" onSubmit={this.handleImgSubmit}>
                                <div className="photo-upload-widget-wrapper">
                                    <label>
                                        <input className="file-upload-input required" type="file" id="profile-photo"
                                               name="primaryPhoto"
                                               accept=".png, .jpg, .jpeg"
                                               onChange={this.handleImgChange}
                                               data-msg-required="Bu alan boş bırakılamaz."/>
                                        <div className="photo-upload-widget">
                                            <figure className="avatar">
                                                <img className="img-fluid" src={this.state.user.img} alt=""/>
                                            </figure>
                                            <div className="upload-content" data-toggle="triggerUpload">
                                                <div className="d-flex d-lg-none flex-grow-1">
                                                    <div className="icon-item">
                                                        <i className="icon icon-add-picture"></i>
                                                        <span className="text">Fotoğraf Yükle</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary">Kaydet</button>
                            </form>
                        </div>
                        <div className="col-lg-9 col-24">
                            info
                        </div>
                    </div>
                </div>

                <Button variant="primary" onClick={this.handleShow}>
                    Launch demo modal
                </Button>

                {src && (
                    <ReactCrop
                        src={src}
                        crop={crop}
                        ruleOfThirds
                        onImageLoaded={this.onImageLoaded}
                        onComplete={this.onCropComplete}
                        onChange={this.onCropChange}
                    />
                )}
                {croppedImageUrl && (
                    <img alt="Crop" style={{maxWidth: '100%'}} src={croppedImageUrl}/>
                )}

                <Modal className="photo-modal" show={this.state.photoModalStatus} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>

            </Layout>
        );
    }
}

export default Profile;