import React, {Component} from 'react';
import Auth from "../components/auth/index";
import Link from "next/link";
//helpers
//import "../helpers/validation";


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

        $.validator.addClassRules({
            //email class ismi email class'ına sahip olanlar emailAdress metodunu çalıştırır.
            email: {
                emailaddress: true
            },

            passwordMatch: {
                passwordmatch: true
            },


            passwordlength: {
                minlength: 6,
                maxlength: 10,
            },

            phoneNumber: {},

            checkControl: {},

            //class ismi
            message: {
                cminlength: 10
            },

        });

        $.validator.addMethod("emailaddress", function (value, element) {
            return this.optional(element) || /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(value);
        }, "Invalid e-mail address222");

        $.validator.addMethod('passwordmatch', function (value, element) {

            // The two password inputs
            var password = $("#password").val();
            var confirmPassword = $("#password-confirm").val();

            // Check for equality with the password inputs
            if (password != confirmPassword) {
                return false;
            } else {
                return true;
            }

        }, "Your Passwords Must Match");
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
            <main style={{minHeight: "100vh"}} className="d-flex justify-content-center align-items-center">
                <div className="primary-form-wrapper">
                    <Auth children={form} className="primary-form" handleSubmit={this.handleSubmit}/>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn btn-danger dropdown-toggle" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                        Action
                    </button>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Separated link</a>
                    </div>
                </div>


            </main>

        );
    }
}


export default Login;
