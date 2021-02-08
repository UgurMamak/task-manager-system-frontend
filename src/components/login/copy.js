import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {userLogin} from "../../redux/auth/actions";
import axios from "axios";
import {API} from "../../redux/url-info";


/*import firebaseDb from "../../firebase"
import axios from "axios";*/

class Index extends Component {

    /*   state = {
           file: "",
           showImg: ""
       }*/

    //img handle change process
    /*    handleChange = (event) => {
            const image = event.target.files[0];

            console.log(event.target.files);


            this.setState({
                file: image,
                showImg: URL.createObjectURL(event.target.files[0])
            }, () => {
                console.log(this.state.file)
            });
        }*/

    /*    //firebase img upload (tek img kaydetme işlemi)
        handleFireBaseUpload = e => {
            e.preventDefault()
            console.log('start of upload');

            const data = new FormData();

            data.append("email", "ugurmamak9@gmail.com");
            data.append("photoURL", this.state.file)
            axios.post("http://localhost:8080/api/register", data).then(user => {
                console.log(user)
            }).catch(error => {
                console.log(error.message)
            });
        }*/

    constructor(props) {
        super(props);
        this.form = React.createRef();
        this.state = {
            email: "",
            password: ""
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", this.state.email);
        formData.append("password", this.state.password);
        this.props.dispatch(userLogin(formData));
    }


    render() {
        return (
            /*<div>
                <input type="file" onChange={this.handleChange}/>
                <button onClick={this.handleFireBaseUpload}>Firebase gönder</button>
                <img src={this.state.showImg}/>
            </div>*/
            <>
                <form onSubmit={this.handleSubmit} ref={this.form}>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" className="form-control" name="email" onChange={this.handleChange}
                               aria-describedby="emailHelp"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                            else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" className="form-control" name="password" onChange={this.handleChange}
                               id="exampleInputPassword1"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input"/>
                        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </>

        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        loginReducer: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // userLogin
    }
}

export default connect()(Index);