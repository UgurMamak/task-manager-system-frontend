import React, {Component} from 'react';
import Auth from "../components/auth/index";
import Link from "next/link";
import {connect} from "react-redux";
import {userLogin} from "../redux/auth/actions";
import Head from "next/head";
//helpers
//import "../helpers/validation";

import {example} from "../helpers/validation";

class Login extends Component {

    state = {
        email: "",
        password: "",
        passwordShow: false,
        checkbox1: false,
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
                    <h1 className="form-title">Giriş Yap</h1>
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
                <div className="form-group form-check primary-checkbox mb-4">
                    <input type="checkbox"
                           className="form-check-input"
                           name="checkbox1"
                           data-msg-required="Boş bırakmayınız."
                           id="checkbox1"
                           checked={this.state.checkbox1}
                           onChange={this.handleChange}
                    />
                    <label className="form-check-label" htmlFor="checkbox1">Beni Hatırla</label>
                </div>
                <div className="form-footer text-center">
                    <button type="submit" className="btn primary-btn d-block m-auto">Giriş Yap</button>
                    <Link href="/"><a className="footer-link">Şifremi Unuttum</a></Link>
                    <Link href="/register"><a className="footer-link">Üye Ol</a></Link>
                </div>
            </React.Fragment>
        );

        return (
            <>
                <Head>
                    <title>Login</title>
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

const mapStateToProps = (state, props) => {
    return {
        loginReducer: state.loginReducer
    }
}

const mapDispatchToProps = {
    userLogin,
    //userLoginPending:actionCreators.userLoginPending //redux promise middlaware olmasaydı bunu kullanmamız gerekirdi.
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);