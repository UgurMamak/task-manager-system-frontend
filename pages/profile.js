import React, {Component} from 'react';
import Layout from "../components/layout/layout";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

import PhotoModal from "../components/photo-modal";

class Profile extends Component {
    state = {
        user: {
            email: "ugurmamak98@gmail.com",
            firstName: "uğur",
            lastName: "mamak",
            img: "https://bootdey.com/img/Content/avatar/avatar7.png"
        },
    }

    //child component'ten gelen data
    imgSave=(data)=>{
        console.log("kaydeldi");
        console.log(data);
    }

    handleImgSubmit=(e)=>{
        e.preventDefault();
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-24">
                            <form action="" onSubmit={this.handleImgSubmit}>
                            <PhotoModal imgSave={this.imgSave} />
                            </form>
                        </div>
                        <div className="col-lg-9 col-24">
                            info
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Profile;