import React, {Component} from 'react';
import Auth from "../components/auth/index"
class Register extends Component {

    calistir=(formData)=>{
        console.log("çalıştır");
        console.log(formData);
    }


    render() {

        const form=[];
        form.push(<div key="1">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" className="form-control required email"
                       data-msg-required="Boş bırakmayınız."
                       data-msg-emailaddress="Geçersiz e-posta adresi."
                       name="email"
                       id="email"
                       onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control required"
                       data-msg-required="Boş bırakmayınız."
                       name="password"
                       id="password"
                       onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="password_confirm">Password Confirm</label>
                <input type="password" className="form-control required passwordmatch"
                       data-msg-required="Boş bırakmayınız."
                       data-msg-passwordmatch={"parola eşleşmedi"}
                       name="password-confirm"
                       id="password-confirm"
                       onChange={this.handleChange}
                />
            </div>
            <div className="form-group">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input"
                           name="checkbox1"
                           data-msg-required="Boş bırakmayınız."
                           id="checkbox1"
                           onChange={this.handleChange}
                    />
                    <label className="form-check-label" htmlFor="checkbox1">Beni Hatırla</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Giriş Yap</button>
        </div>);

        return (
                <Auth children={form} calistir={this.calistir}>
                </Auth>
        );
    }
}

export default Register;