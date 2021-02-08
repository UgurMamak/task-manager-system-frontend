import React, {Component} from 'react';
import $ from 'jquery'

class Index extends Component {

    state = {
        email: "",
        password: "",
        checkbox1: false,
    }

    handleChange = (e) => {
        e.preventDefault();
        const {name} = e.target;
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
        this.setState({
            [name]: value
        });
    }

    componentDidMount() {
        this.validator = $(this.form).validate({
            errorElement: 'div',
            highlight: (element) => {
                $(element).parents('.form-group').addClass('has-error');
            },
            unhighlight: (element) => {
                $(element).parents('.form-group').removeClass('has-error');
            },
            errorPlacement: (errorElement, element) => {
                element.parents('.form-group').append(errorElement)
            },
            submitHandler: (form) => {
                let formData = new FormData();
                $(form).serializeArray().map((item) => {
                    formData.append(item.name, item.value);
                    //axios process insert
                });
            }
        });
    }

    render() {

        return (
            <form ref={(el) => {
                this.form = el
            }}>
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
            </form>
        );
    }
}

export default Index;