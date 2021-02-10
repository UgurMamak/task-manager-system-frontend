import React, {Component} from 'react';
import $ from 'jquery'

class Index extends Component {
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
                   // this.state.dizi.push({name: item.name, value: item.value});
                });
               // this.props.handleSubmit(this.state.dizi);
                this.props.handleSubmit(formData);
            }
        });
    }

    render() {

        const {children,className} = this.props;

        return (
                <form ref={(el) => {
                    this.form = el
                }} className={className}>
                    {children}
                </form>
        );
    }
}

export default Index;