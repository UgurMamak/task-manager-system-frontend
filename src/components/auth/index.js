import React, {Component} from 'react';
import $ from 'jquery'

class Index extends Component {

    state = {
        email: "",
        password: "",
        checkbox1: false,
        dizi: []
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
            rules: {
                password_confirm: {
                    equalTo: "#password"
                }
            },
            messages: {
                password_confirm: {
                    equalTo: "Şifreler eşleşmedi"
                }
            },
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
                    this.state.dizi.push({name: item.name, value: item.value});
                });
                this.props.calistir(this.state.dizi);
            }
        });
    }

    render() {

        const {children} = this.props;

        return (
            <form ref={(el) => {
                this.form = el
            }}>
                {children}
            </form>
        );
    }
}

export default Index;