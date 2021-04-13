import React, {Component} from 'react';
import Layout from "../components/layout/layout";
import PhotoModal from "../components/photo-modal";
import {Form,Button} from "react-bootstrap";

class Profile extends Component {
    state = {
        user: {
            email: "ugurmamak98@gmail.com",
            firstName: "uğur",
            lastName: "mamak",
            img: "https://bootdey.com/img/Content/avatar/avatar7.png"
        },
        imgUrl:""
    }

    changeImg=(data)=>{
        this.setState({imgUrl:data});
    }

    handleImgSubmit=(e,data)=>{
        e.preventDefault();
        console.log(data);
    }

    saveInfo=(e)=>{
        e.preventDefault();
        console.log("deneme");
    }

    render() {

        const {imgUrl}=this.state;

        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-24">
                            <PhotoModal imgUrl={imgUrl===""?this.state.user.img:imgUrl} changeImg={this.changeImg} handleImgSubmit={this.handleImgSubmit} />
                        </div>
                        <div className="col-lg-9 col-24">
                            <Form onSubmit={this.saveInfo}>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Kaydet
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Profile;