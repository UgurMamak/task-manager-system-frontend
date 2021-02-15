import Head from "next/head"
import React, {Component} from 'react';
import Auth from "../components/auth/index";
import Link from "next/link";
import {example} from "../helpers/validation";

//import {connect} from "react-redux";
//import {userLogin} from "../redux/auth/actions";

class Register extends Component {

    state = {
        email: "",
        password: "",
        passwordConfirm: "",
        passwordShow: false,
        checkbox1: false,
        firstName: "",
        lastName: "",
        dizi: [],
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    passwordShow = () => {
        this.setState({
            passwordShow: !this.state.passwordShow
        });
    }

    handleSubmit = async (data) => {
        //  this.props.userLoginPending(); //redux promise middlaware olmasaydı bunu kullanmamız gerekirdi.
        this.props.userLogin(data);
    }

    componentDidMount() {
        example();
    }

    render() {
        //console.log(this.props.loginReducer)
        const form = [];
        form.push(<React.Fragment key={"1"}>
                <div className="form-header">
                    <h1 className="form-title">Üye Ol</h1>
                </div>
                <div className="form-group">
                    <div className="form-control-wrap">
                        <input type="text"
                               className={`form-control required ${this.state.firstName.length > 0 ? "has-val" : ""}`}
                               data-msg-required="Boş bırakmayınız."
                               name="firstName"
                               id="firstName"
                               onChange={this.handleChange}
                        />
                        <span className="focus-input" data-placeholder="Ad"></span>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-control-wrap">
                        <input type="text"
                               className={`form-control required ${this.state.lastName.length > 0 ? "has-val" : ""}`}
                               data-msg-required="Boş bırakmayınız."
                               name="lastName"
                               id="lastName"
                               onChange={this.handleChange}
                        />
                        <span className="focus-input" data-placeholder="Soyad"></span>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-control-wrap">
                        <input type="email"
                               className={`form-control required email ${this.state.email.length > 0 ? "has-val" : ""}`}
                               data-msg-required="Boş bırakmayınız."
                               data-msg-emailaddress="Geçersiz e-posta adresi."
                               name="email"
                               id="email"
                               onChange={this.handleChange}
                        />
                        <span className="focus-input" data-placeholder="E-posta"></span>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-control-wrap">
                        <input type={this.state.passwordShow ? "text" : "password"}
                               className={`form-control required ${this.state.password.length > 0 ? "has-val" : ""}`}
                               data-msg-required="Boş bırakmayınız."
                               name="password"
                               id="password"
                               onChange={this.handleChange}
                        />
                        <span className="focus-input" data-placeholder="Şifre"></span>
                        <button type="button"
                                className={`btn pass-show-status ${this.state.passwordShow ? "show" : ""}`}
                                onClick={this.passwordShow}>
                            <i className="icon icon-eye"></i>
                        </button>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-control-wrap">
                        <input type={this.state.passwordShow ? "text" : "password"}
                               className={`form-control required ${this.state.passwordConfirm.length > 0 ? "has-val" : ""} passwordmatch`}
                               data-msg-required="Boş bırakmayınız."
                               data-msg-passwordmatch={"parola eşleşmedi"}
                               name="passwordConfirm"
                               id="passwordConfirm"
                               onChange={this.handleChange}
                        />
                        <span className="focus-input" data-placeholder="Şifre Tekrar"></span>
                        <button type="button"
                                className={`btn pass-show-status ${this.state.passwordShow ? "show" : ""}`}
                                onClick={this.passwordShow}>
                            <i className="icon icon-eye"></i>
                        </button>
                    </div>
                </div>
                <div className="form-footer text-center">
                    <button type="submit" className="btn primary-btn d-block m-auto">Üye ol</button>
                    <Link href="/login"><a className="footer-link">Giriş yap</a></Link>
                </div>
            </React.Fragment>
        );

        return (
            <>
                <Head>
                    <title>Register</title>
                </Head>
                <main style={{minHeight: "100vh"}} className="d-flex justify-content-center align-items-center">
                    <div className="primary-form-wrapper">
                        <Auth children={form} className="primary-form" handleSubmit={this.handleSubmit}/>
                    </div>
                </main>
            </>
        );
    }
}


export default Register;
