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
            unit: 'px',
            width: 300,
            aspect: 16 / 9,
            minWidth:300,
            minHeight:300,
            locked:true,
            disabled:true
        },
        imgInfo: [],
        file: "",
        croppedImageUrl: ""
    }

    handleImgSubmit = () => {
    }

    handleImgChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            var reader = new FileReader();
            var url = reader.readAsDataURL(file);
            reader.onloadend = function (e) {
                // this.setState({src: reader.result})
                this.setState({src: window.URL.createObjectURL(file), file: file});
            }.bind(this);
        } else {
            console.log("boş var");
        }

        this.setState({photoModalStatus: true});
    }


//******
    onImageLoaded = image => {
        this.imageRef = image;
    };
    onCropChange = (crop, percentCrop) => {
        this.setState({crop});
    };

//****


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

    //kırpm işlemi
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
                blob.name = this.state.file.name;
                window.URL.revokeObjectURL(this.fileUrl);
                this.fileUrl = window.URL.createObjectURL(blob);
                this.state.imgInfo.push({
                    fileName: this.state.file.name,
                    value: blob
                });
                resolve(this.fileUrl);
            }, 'image/jpeg');
        });
    }

    //modal close
    handleClose = () => {
        this.setState({photoModalStatus: false})
    };

    saveCrop = (crop) => {
        this.makeClientCrop(this.state.crop);
        this.setState({
            photoModalStatus: false
        });
    }

    render() {
        const {crop, croppedImageUrl, src, croppedImg} = this.state;
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-24">
                            <form action="" onSubmit={this.handleImgSubmit}>
                                <div className="photo-upload-widget-wrapper">
                                    <label>
                                        <input className="file-upload-input required d-none" type="file" id="profile-photo"
                                               name="primaryPhoto"
                                               accept=".png, .jpg, .jpeg"
                                               onChange={this.handleImgChange}
                                               data-msg-required="Bu alan boş bırakılamaz."/>
                                        <div className="photo-upload-widget" data-toggle="img-content">
                                            {croppedImageUrl === "" ?
                                                <div data-toggle="cropedImg" className="img" style={{backgroundImage: `url(${this.state.user.img})`}}></div>
                                                : <div data-toggle="cropedImg" className="img" style={{backgroundImage: `url(${croppedImageUrl})`}}></div>
                                            }
                                            <div className="upload-content" data-toggle="triggerUpload">
                                                <i className="icon icon-add-picture"></i>
                                                <span className="text">Fotoğraf Yükle</span>
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

                <Modal className="photo-modal" data-toggle="photo-modal" show={this.state.photoModalStatus}
                       onHide={this.handleClose} centered>
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

            </Layout>
        );
    }
}

export default Profile;